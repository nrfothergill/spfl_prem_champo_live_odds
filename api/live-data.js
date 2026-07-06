const COMPETITIONS = {
  spfl: {
    oddsKeys: ["soccer_scotland_premiership"],
    apiFootballLeague: 179,
  },
  "premier-league": {
    oddsKeys: ["soccer_epl"],
    apiFootballLeague: 39,
  },
  "ligue-1": {
    oddsKeys: ["soccer_france_ligue_one"],
    apiFootballLeague: 61,
  },
  bundesliga: {
    oddsKeys: ["soccer_germany_bundesliga"],
    apiFootballLeague: 78,
  },
  "la-liga": {
    oddsKeys: ["soccer_spain_la_liga"],
    apiFootballLeague: 140,
  },
  "serie-a": {
    oddsKeys: ["soccer_italy_serie_a"],
    apiFootballLeague: 135,
  },
  "primeira-liga": {
    oddsKeys: ["soccer_portugal_primeira_liga"],
    apiFootballLeague: 94,
  },
  "champions-league": {
    oddsKeys: ["soccer_uefa_champs_league"],
    apiFootballLeague: 2,
  },
  "europa-league": {
    oddsKeys: ["soccer_uefa_europa_league"],
    apiFootballLeague: 3,
  },
  "conference-league": {
    oddsKeys: ["soccer_uefa_europa_conference_league"],
    apiFootballLeague: 848,
  },
};

function normalName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function decimal(value) {
  const num = Number(value);
  return Number.isFinite(num) && num > 1 ? Number(num.toFixed(3)) : null;
}

function marketPrice(bookmakers, marketKey, outcomeName) {
  const prices = [];
  (bookmakers || []).forEach((bookmaker) => {
    (bookmaker.markets || []).filter((market) => market.key === marketKey).forEach((market) => {
      (market.outcomes || []).forEach((outcome) => {
        if (!outcomeName || normalName(outcome.name).includes(normalName(outcomeName)) || normalName(outcomeName).includes(normalName(outcome.name))) {
          const price = decimal(outcome.price);
          if (price) prices.push(price);
        }
      });
    });
  });
  if (!prices.length) return null;
  return Number((prices.reduce((sum, value) => sum + value, 0) / prices.length).toFixed(3));
}

function parseOddsApiGame(game) {
  return {
    home: game.home_team,
    away: game.away_team,
    oddsUpdatedAt: game.bookmakers?.[0]?.last_update,
    odds: {
      home: marketPrice(game.bookmakers, "h2h", game.home_team),
      draw: marketPrice(game.bookmakers, "h2h", "Draw"),
      away: marketPrice(game.bookmakers, "h2h", game.away_team),
      over25: marketPrice(game.bookmakers, "totals", "Over"),
      under25: marketPrice(game.bookmakers, "totals", "Under"),
      bttsYes: marketPrice(game.bookmakers, "btts", "Yes"),
      bttsNo: marketPrice(game.bookmakers, "btts", "No"),
    },
  };
}

async function fetchOdds(competition) {
  const apiKey = process.env.ODDS_API_KEY;
  if (!apiKey) return [];
  for (const sportKey of competition.oddsKeys) {
    const url = new URL(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds/`);
    url.searchParams.set("apiKey", apiKey);
    url.searchParams.set("regions", process.env.ODDS_REGIONS || "uk,eu");
    url.searchParams.set("markets", "h2h,totals,btts");
    url.searchParams.set("oddsFormat", "decimal");
    const response = await fetch(url);
    if (response.ok) return (await response.json()).map(parseOddsApiGame);
  }
  return [];
}

async function apiFootball(path, params = {}) {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) return null;
  const url = new URL(`https://v3.football.api-sports.io/${path}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url, { headers: { "x-apisports-key": apiKey } });
  if (!response.ok) return null;
  return response.json();
}

function lineupText(lineup) {
  const players = lineup?.startXI?.map((item) => item.player?.name).filter(Boolean) || [];
  return players.length ? players.join(", ") : "";
}

function statValue(stats, teamName, labels) {
  const teamStats = (stats || []).find((entry) => normalName(entry.team?.name).includes(normalName(teamName)) || normalName(teamName).includes(normalName(entry.team?.name)));
  const item = teamStats?.statistics?.find((stat) => labels.some((label) => normalName(stat.type).includes(normalName(label))));
  const value = Number(item?.value);
  return Number.isFinite(value) ? value : null;
}

async function fetchFixtureContext(competition, fixtureParams) {
  if (!process.env.API_FOOTBALL_KEY) return [];
  const fixtures = await apiFootball("fixtures", fixtureParams);
  const games = [];
  for (const fixture of fixtures?.response || []) {
    const fixtureId = fixture.fixture?.id;
    const home = fixture.teams?.home?.name;
    const away = fixture.teams?.away?.name;
    if (!fixtureId || !home || !away) continue;
    const [lineups, stats] = await Promise.all([
      apiFootball("fixtures/lineups", { fixture: fixtureId }),
      apiFootball("fixtures/statistics", { fixture: fixtureId }),
    ]);
    const homeLineup = lineups?.response?.find((entry) => normalName(entry.team?.name).includes(normalName(home)));
    const awayLineup = lineups?.response?.find((entry) => normalName(entry.team?.name).includes(normalName(away)));
    const homeXg = statValue(stats?.response, home, ["expected goals", "xg"]);
    const awayXg = statValue(stats?.response, away, ["expected goals", "xg"]);
    games.push({
      home,
      away,
      lineups: {
        home: lineupText(homeLineup),
        away: lineupText(awayLineup),
      },
      xg: homeXg != null && awayXg != null ? { home: homeXg, away: awayXg } : null,
      teamNews: fixture.fixture?.status?.long,
      lineupsUpdatedAt: new Date().toISOString(),
      xgUpdatedAt: new Date().toISOString(),
    });
  }
  return games;
}

async function fetchFixtureContexts(competition) {
  const [upcoming, live] = await Promise.all([
    fetchFixtureContext(competition, {
      league: competition.apiFootballLeague,
      season: "2026",
      next: "30",
    }).catch(() => []),
    fetchFixtureContext(competition, {
      league: competition.apiFootballLeague,
      season: "2026",
      live: "all",
    }).catch(() => []),
  ]);
  return mergeGames(upcoming, live);
}

function mergeGames(...groups) {
  const map = new Map();
  groups.flat().forEach((game) => {
    const key = `${normalName(game.home)}-${normalName(game.away)}`;
    map.set(key, { ...(map.get(key) || {}), ...game, odds: { ...(map.get(key)?.odds || {}), ...(game.odds || {}) }, lineups: { ...(map.get(key)?.lineups || {}), ...(game.lineups || {}) } });
  });
  return [...map.values()];
}

export default async function handler(request, response) {
  const competitionId = request.query.competition || "spfl";
  const competition = COMPETITIONS[competitionId];
  if (!competition) {
    response.status(400).json({ error: "Unknown competition" });
    return;
  }

  const [oddsGames, contextGames] = await Promise.all([
    fetchOdds(competition).catch(() => []),
    fetchFixtureContexts(competition).catch(() => []),
  ]);
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.status(200).json({
    providerStatus: [
      process.env.ODDS_API_KEY ? "Odds connected" : "Odds key missing",
      process.env.API_FOOTBALL_KEY ? "Lineups/xG connected" : "Football API key missing",
    ].join(" / "),
    games: mergeGames(oddsGames, contextGames),
  });
}
