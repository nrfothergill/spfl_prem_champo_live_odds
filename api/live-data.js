const COMPETITIONS = {
  spfl: { oddsKeys: ["soccer_scotland_premiership"], apiFootballLeague: 179 },
  "premier-league": { oddsKeys: ["soccer_epl"], apiFootballLeague: 39 },
  "ligue-1": { oddsKeys: ["soccer_france_ligue_one"], apiFootballLeague: 61 },
  bundesliga: { oddsKeys: ["soccer_germany_bundesliga"], apiFootballLeague: 78 },
  "la-liga": { oddsKeys: ["soccer_spain_la_liga"], apiFootballLeague: 140 },
  "serie-a": { oddsKeys: ["soccer_italy_serie_a"], apiFootballLeague: 135 },
  "primeira-liga": { oddsKeys: ["soccer_portugal_primeira_liga"], apiFootballLeague: 94 },
  "champions-league": {
    oddsKeys: ["soccer_uefa_champs_league"],
    apiFootballLeague: 2,
    qualificationWindows: [["2026-07-07", "2026-07-09"]],
    officialFixtureSource: "UEFA.com",
    trustApiFootballFixtures: true,
  },
  "europa-league": {
    oddsKeys: ["soccer_uefa_europa_league"],
    apiFootballLeague: 3,
    qualificationWindows: [["2026-07-09", "2026-07-09"]],
    officialFixtureSource: "UEFA.com",
    trustApiFootballFixtures: true,
  },
  "conference-league": {
    oddsKeys: ["soccer_uefa_europa_conference_league"],
    apiFootballLeague: 848,
    qualificationWindows: [["2026-07-09", "2026-07-09"]],
    officialFixtureSource: "UEFA.com",
    trustApiFootballFixtures: true,
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

function ukDateTime(value) {
  if (!value) return { date: null, time: null };
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return { date: null, time: null };
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(parsed);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return { date: `${lookup.year}-${lookup.month}-${lookup.day}`, time: `${lookup.hour}:${lookup.minute}` };
}

function parseOddsApiGame(game) {
  const uk = ukDateTime(game.commence_time);
  return {
    home: game.home_team,
    away: game.away_team,
    date: uk.date,
    time: uk.time,
    oddsUpdatedAt: game.bookmakers?.[0]?.last_update,
    odds: {
      home: marketPrice(game.bookmakers, "h2h", game.home_team),
      draw: marketPrice(game.bookmakers, "h2h", "Draw"),
      away: marketPrice(game.bookmakers, "h2h", game.away_team),
      over25: marketPrice(game.bookmakers, "totals", "Over"),
      under25: marketPrice(game.bookmakers, "totals", "Under"),
      bttsYes: marketPrice(game.bookmakers, "btts", "Yes"),
      bttsNo: marketPrice(game.bookmakers, "btts", "No"),
      cornersOver95: marketPrice(game.bookmakers, "totals_corners", "Over"),
      cornersUnder95: marketPrice(game.bookmakers, "totals_corners", "Under"),
    },
  };
}

async function readJsonOrText(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text.slice(0, 220);
  }
}

async function fetchOdds(competition) {
  const apiKey = process.env.ODDS_API_KEY;
  const diagnostics = {
    connected: Boolean(apiKey),
    provider: "The Odds API",
    gamesReturned: 0,
    pricedGames: 0,
    marketsUsed: "",
    sportKey: competition.oddsKeys?.[0] || "",
    message: apiKey ? "Odds key found" : "Odds key missing",
    errors: [],
  };
  if (!apiKey) return { games: [], diagnostics };

  const extraMarkets = process.env.EXTRA_ODDS_MARKETS ? `,${process.env.EXTRA_ODDS_MARKETS}` : "";
  const marketAttempts = [`h2h,totals,btts${extraMarkets}`, "h2h,totals,btts", "h2h,totals", "h2h"];

  for (const sportKey of competition.oddsKeys || []) {
    for (const markets of marketAttempts) {
      const url = new URL(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds/`);
      url.searchParams.set("apiKey", apiKey);
      url.searchParams.set("regions", process.env.ODDS_REGIONS || "uk,eu");
      url.searchParams.set("markets", markets);
      url.searchParams.set("oddsFormat", "decimal");

      const response = await fetch(url);
      diagnostics.sportKey = sportKey;
      diagnostics.marketsUsed = markets;
      diagnostics.remainingRequests = response.headers.get("x-requests-remaining") || "";
      diagnostics.usedRequests = response.headers.get("x-requests-used") || "";

      if (!response.ok) {
        const body = await readJsonOrText(response);
        diagnostics.errors.push(`${sportKey} ${markets}: HTTP ${response.status} ${typeof body === "string" ? body : body?.message || body?.error || ""}`.trim());
        continue;
      }

      const games = (await response.json()).map(parseOddsApiGame);
      diagnostics.gamesReturned = games.length;
      diagnostics.pricedGames = games.filter((game) => Object.values(game.odds || {}).some((price) => Number(price) > 1)).length;
      diagnostics.message = games.length
        ? `Odds returned ${games.length} games using ${markets}`
        : `Odds connected, but ${sportKey} returned no upcoming games`;
      return { games, diagnostics };
    }
  }

  diagnostics.message = diagnostics.errors[0] || "Odds API returned no usable response";
  return { games: [], diagnostics };
}

async function apiFootball(path, params = {}, diagnostics) {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) return null;
  const url = new URL(`https://v3.football.api-sports.io/${path}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url, { headers: { "x-apisports-key": apiKey } });
  if (!response.ok) {
    diagnostics?.errors.push(`${path}: HTTP ${response.status}`);
    return null;
  }
  const json = await response.json();
  const apiError = json?.errors && Object.keys(json.errors).length ? JSON.stringify(json.errors).slice(0, 220) : "";
  if (apiError) diagnostics?.errors.push(`${path}: ${apiError}`);
  return json;
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

async function fetchFixtureContext(competition, fixtureParams, diagnostics) {
  if (!process.env.API_FOOTBALL_KEY) return [];
  const fixtures = await apiFootball("fixtures", fixtureParams, diagnostics);
  const games = [];
  const fixtureRows = fixtures?.response || [];
  diagnostics.fixtureRows += fixtureRows.length;

  for (const fixture of fixtureRows) {
    const fixtureId = fixture.fixture?.id;
    const home = fixture.teams?.home?.name;
    const away = fixture.teams?.away?.name;
    if (!fixtureId || !home || !away) continue;
    const [lineups, stats] = await Promise.all([
      apiFootball("fixtures/lineups", { fixture: fixtureId }, diagnostics),
      apiFootball("fixtures/statistics", { fixture: fixtureId }, diagnostics),
    ]);
    const homeLineup = lineups?.response?.find((entry) => normalName(entry.team?.name).includes(normalName(home)));
    const awayLineup = lineups?.response?.find((entry) => normalName(entry.team?.name).includes(normalName(away)));
    const homeXg = statValue(stats?.response, home, ["expected goals", "xg"]);
    const awayXg = statValue(stats?.response, away, ["expected goals", "xg"]);
    const uk = ukDateTime(fixture.fixture?.date);
    const status = fixture.fixture?.status?.short || "";
    const homeGoals = Number(fixture.goals?.home);
    const awayGoals = Number(fixture.goals?.away);
    const completed = ["FT", "AET", "PEN"].includes(status) && Number.isFinite(homeGoals) && Number.isFinite(awayGoals);
    if (lineupText(homeLineup) || lineupText(awayLineup)) diagnostics.lineupGames += 1;
    if (homeXg != null && awayXg != null) diagnostics.xgGames += 1;
    games.push({
      home,
      away,
      date: uk.date,
      time: uk.time,
      lineups: { home: lineupText(homeLineup), away: lineupText(awayLineup) },
      xg: homeXg != null && awayXg != null ? { home: homeXg, away: awayXg } : null,
      teamNews: fixture.fixture?.status?.long,
      status,
      completed,
      result: completed ? { home: homeGoals, away: awayGoals } : null,
      lineupsUpdatedAt: new Date().toISOString(),
      xgUpdatedAt: new Date().toISOString(),
    });
  }
  return games;
}

async function fetchFixtureContexts(competition) {
  const diagnostics = {
    connected: Boolean(process.env.API_FOOTBALL_KEY),
    provider: "API-Football",
    fixtureRows: 0,
    contextGames: 0,
    lineupGames: 0,
    xgGames: 0,
    message: process.env.API_FOOTBALL_KEY ? "Football key found" : "Football API key missing",
    errors: [],
  };
  if (!process.env.API_FOOTBALL_KEY) return { games: [], diagnostics };
  const today = ukDateTime(new Date().toISOString()).date;

  const qualificationRequests = (competition.qualificationWindows || []).map(([from, to]) =>
    fetchFixtureContext(competition, { league: competition.apiFootballLeague, season: "2026", from, to }, diagnostics).catch((error) => {
      diagnostics.errors.push(error.message);
      return [];
    }),
  );

  const [upcoming, live, completedToday, ...qualification] = await Promise.all([
    fetchFixtureContext(competition, { league: competition.apiFootballLeague, season: "2026", next: "30" }, diagnostics).catch((error) => {
      diagnostics.errors.push(error.message);
      return [];
    }),
    fetchFixtureContext(competition, { league: competition.apiFootballLeague, season: "2026", live: "all" }, diagnostics).catch((error) => {
      diagnostics.errors.push(error.message);
      return [];
    }),
    fetchFixtureContext(competition, { league: competition.apiFootballLeague, season: "2026", date: today }, diagnostics).catch((error) => {
      diagnostics.errors.push(error.message);
      return [];
    }),
    ...qualificationRequests,
  ]);

  const games = mergeGames(upcoming, live, completedToday, ...qualification);
  diagnostics.contextGames = games.length;
  diagnostics.message = games.length
    ? `Football API returned ${games.length} fixture records`
    : "Football API connected, but no fixture context is available yet";
  return { games, diagnostics };
}

function mergeGames(...groups) {
  const map = new Map();
  groups.flat().forEach((game) => {
    const key = `${normalName(game.home)}-${normalName(game.away)}`;
    map.set(key, {
      ...(map.get(key) || {}),
      ...game,
      odds: { ...(map.get(key)?.odds || {}), ...(game.odds || {}) },
      lineups: { ...(map.get(key)?.lineups || {}), ...(game.lineups || {}) },
    });
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

  const [oddsResult, contextResult] = await Promise.all([
    fetchOdds(competition).catch((error) => ({
      games: [],
      diagnostics: { connected: Boolean(process.env.ODDS_API_KEY), provider: "The Odds API", message: error.message, errors: [error.message] },
    })),
    competition.trustApiFootballFixtures === false
      ? Promise.resolve({
          games: [],
          diagnostics: {
            connected: Boolean(process.env.API_FOOTBALL_KEY),
            provider: "API-Football",
            message: "UEFA fixtures are locked to bundled official fixtures, so third-party fixture creation is disabled",
            errors: [],
          },
        })
      : fetchFixtureContexts(competition).catch((error) => ({
          games: [],
          diagnostics: { connected: Boolean(process.env.API_FOOTBALL_KEY), provider: "API-Football", message: error.message, errors: [error.message] },
        })),
  ]);

  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.status(200).json({
    providerStatus: [
      competition.officialFixtureSource ? `Fixtures locked to ${competition.officialFixtureSource}` : "Fixture feed active",
      oddsResult.diagnostics.connected ? "Odds key found" : "Odds key missing",
      contextResult.diagnostics.connected ? "Football key found" : "Football API key missing",
    ].join(" / "),
    diagnostics: {
      competition: competitionId,
      generatedAt: new Date().toISOString(),
      odds: oddsResult.diagnostics,
      football: contextResult.diagnostics,
      mergedGames: mergeGames(oddsResult.games, contextResult.games).length,
    },
    games: mergeGames(oddsResult.games, contextResult.games),
  });
}
