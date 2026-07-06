const MODEL_SETTINGS = {
  formWeight: 0.62,
  homeBoost: 0.14,
  drawTune: 0.04,
  edgeThreshold: 0.035,
  kellyFraction: 0.25,
};

const TEAM_ALIASES = new Map([
  ["Hearts", "Heart of Midlothian"],
  ["Dundee Utd", "Dundee United"],
  ["St. Johnstone", "St Johnstone"],
  ["St. Mirren", "St Mirren"],
  ["Man City", "Manchester City"],
  ["Man United", "Manchester United"],
  ["Man Utd", "Manchester United"],
  ["Nottm Forest", "Nottingham Forest"],
  ["Newcastle", "Newcastle United"],
  ["Tottenham", "Tottenham Hotspur"],
  ["West Ham", "West Ham United"],
  ["Brighton", "Brighton & Hove Albion"],
  ["Wolves", "Wolverhampton Wanderers"],
]);

const COMPETITIONS = {
  spfl: {
    label: "SPFL",
    eyebrow: "SPFL Premiership 2026/27",
    storageKey: "football-model-spfl-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/SC0.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_scotland_premiership"],
      apiFootballLeague: 179,
    },
    teams: [
      "Aberdeen",
      "Celtic",
      "Dundee",
      "Dundee United",
      "Falkirk",
      "Heart of Midlothian",
      "Hibernian",
      "Kilmarnock",
      "Motherwell",
      "Rangers",
      "St Johnstone",
      "St Mirren",
    ],
    priors: {
      Celtic: 1.34,
      Rangers: 1.28,
      "Heart of Midlothian": 1.08,
      Aberdeen: 1.02,
      Hibernian: 0.98,
      "Dundee United": 0.92,
      "St Mirren": 0.9,
      Motherwell: 0.88,
      Kilmarnock: 0.86,
      Dundee: 0.84,
      "St Johnstone": 0.82,
      Falkirk: 0.8,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-07-31",
        endDate: "2026-08-03",
        fixtures: [
          { date: "2026-07-31", time: "20:00", home: "Dundee United", away: "Rangers" },
          { date: "2026-08-01", time: "15:00", home: "Heart of Midlothian", away: "Aberdeen" },
          { date: "2026-08-01", time: "15:00", home: "Hibernian", away: "Kilmarnock" },
          { date: "2026-08-01", time: "15:00", home: "Motherwell", away: "Falkirk" },
          { date: "2026-08-01", time: "15:00", home: "St Mirren", away: "St Johnstone" },
          { date: "2026-08-03", time: "20:00", home: "Celtic", away: "Dundee" },
        ],
      },
    ],
  },
  "premier-league": {
    label: "Premier League",
    eyebrow: "Premier League 2026/27",
    storageKey: "football-model-premier-league-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/E0.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_epl"],
      apiFootballLeague: 39,
    },
    teams: [
      "Arsenal",
      "Aston Villa",
      "Bournemouth",
      "Brentford",
      "Brighton & Hove Albion",
      "Chelsea",
      "Coventry City",
      "Crystal Palace",
      "Everton",
      "Fulham",
      "Hull City",
      "Ipswich Town",
      "Leeds United",
      "Liverpool",
      "Manchester City",
      "Manchester United",
      "Newcastle United",
      "Nottingham Forest",
      "Sunderland",
      "Tottenham Hotspur",
    ],
    priors: {
      Arsenal: 1.28,
      "Manchester City": 1.27,
      Liverpool: 1.22,
      Chelsea: 1.14,
      "Manchester United": 1.12,
      "Newcastle United": 1.1,
      "Aston Villa": 1.08,
      "Tottenham Hotspur": 1.06,
      "Brighton & Hove Albion": 1.02,
      "Crystal Palace": 0.98,
      Bournemouth: 0.97,
      Brentford: 0.96,
      Fulham: 0.95,
      Everton: 0.94,
      "Nottingham Forest": 0.94,
      "Leeds United": 0.9,
      Sunderland: 0.88,
      "Ipswich Town": 0.86,
      "Coventry City": 0.84,
      "Hull City": 0.82,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-21",
        endDate: "2026-08-24",
        fixtures: [
          { date: "2026-08-21", time: "20:00", home: "Arsenal", away: "Coventry City" },
          { date: "2026-08-22", time: "12:30", home: "Hull City", away: "Manchester United" },
          { date: "2026-08-22", time: "15:00", home: "Brentford", away: "Tottenham Hotspur" },
          { date: "2026-08-22", time: "15:00", home: "Ipswich Town", away: "Sunderland" },
          { date: "2026-08-22", time: "15:00", home: "Crystal Palace", away: "Leeds United" },
          { date: "2026-08-22", time: "17:30", home: "Everton", away: "Nottingham Forest" },
          { date: "2026-08-23", time: "14:00", home: "Manchester City", away: "Bournemouth" },
          { date: "2026-08-23", time: "16:30", home: "Newcastle United", away: "Liverpool" },
          { date: "2026-08-24", time: "20:00", home: "Chelsea", away: "Fulham" },
          { date: "2026-08-24", time: "20:00", home: "Aston Villa", away: "Brighton & Hove Albion" },
        ],
      },
    ],
  },
  "champions-league": {
    label: "Champions League",
    eyebrow: "UEFA Champions League 2026/27",
    storageKey: "football-model-champions-league-v2",
    currentSeasonUrl: "",
    liveProvider: {
      oddsApiKeys: ["soccer_uefa_champs_league"],
      apiFootballLeague: 2,
    },
    teams: [
      "Arsenal",
      "Manchester City",
      "Manchester United",
      "Inter Milan",
      "Barcelona",
      "Real Madrid",
      "Villarreal",
      "Atletico Madrid",
      "Bayern Munich",
      "Borussia Dortmund",
      "RB Leipzig",
      "Paris Saint-Germain",
      "Lens",
      "PSV Eindhoven",
      "Feyenoord",
      "Porto",
      "Galatasaray",
      "Shakhtar Donetsk",
    ],
    priors: {
      "Real Madrid": 1.34,
      "Bayern Munich": 1.31,
      "Paris Saint-Germain": 1.3,
      "Manchester City": 1.28,
      Arsenal: 1.27,
      Barcelona: 1.25,
      "Inter Milan": 1.23,
      "Atletico Madrid": 1.17,
      "Borussia Dortmund": 1.13,
      "Manchester United": 1.1,
      Porto: 1.06,
      "RB Leipzig": 1.05,
      "PSV Eindhoven": 1.02,
      Feyenoord: 1,
      Villarreal: 0.99,
      Galatasaray: 0.97,
      "Shakhtar Donetsk": 0.95,
      Lens: 0.93,
    },
    gameweeks: [
      {
        id: 1,
        name: "League Phase Matchday 1",
        startDate: "2026-09-08",
        endDate: "2026-09-09",
        fixtures: [
          { date: "2026-09-08", time: "20:00", home: "Real Madrid", away: "Arsenal" },
          { date: "2026-09-08", time: "20:00", home: "Bayern Munich", away: "Manchester City" },
          { date: "2026-09-08", time: "20:00", home: "Paris Saint-Germain", away: "Manchester United" },
          { date: "2026-09-08", time: "20:00", home: "Inter Milan", away: "Barcelona" },
          { date: "2026-09-09", time: "20:00", home: "Borussia Dortmund", away: "Atletico Madrid" },
          { date: "2026-09-09", time: "20:00", home: "Porto", away: "Villarreal" },
          { date: "2026-09-09", time: "20:00", home: "PSV Eindhoven", away: "Galatasaray" },
          { date: "2026-09-09", time: "20:00", home: "Feyenoord", away: "Shakhtar Donetsk" },
        ],
      },
    ],
    note: "Fixture draw pending. Replace these placeholder league-phase fixtures after UEFA publishes the draw.",
  },
};

let activeCompetitionId = localStorage.getItem("football-model-active-competition") || "spfl";
let state = createInitialState(activeCompetitionId);
let lineupRenderTimer;
let backtestCache = {};

const el = (id) => document.getElementById(id);
const activeConfig = () => COMPETITIONS[activeCompetitionId];
const activeTeams = () => activeConfig().teams;

function normalizeTeam(name) {
  const clean = String(name || "").trim();
  return TEAM_ALIASES.get(clean) || clean;
}

function cloneGameweeks(competitionId) {
  return COMPETITIONS[competitionId].gameweeks.map((week) => ({
    ...week,
    fixtures: week.fixtures.map((fixture) => ({ ...fixture })),
  }));
}

function bundledMatches(competitionId) {
  return window.COMPETITION_BUNDLED_MATCHES?.[competitionId] || window.SPFL_BUNDLED_MATCHES || [];
}

function createInitialState(competitionId) {
  const config = COMPETITIONS[competitionId];
  const matches = bundledMatches(competitionId);
  return {
    matches: matches.length ? matches : buildFallbackMatches(competitionId),
    gameweeks: cloneGameweeks(competitionId),
    currentGameweek: 0,
    lineups: {},
    odds: {},
    live: {},
    source: matches.length ? "Bundled Football-Data CSV archive" : "Fallback calibration",
    synthetic: !matches.length,
    updatedAt: new Date().toISOString(),
    competitionId,
    note: config.note || "",
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

function decimal(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num.toFixed(2) : "-";
}

function impliedProbability(odds) {
  const price = Number(odds);
  return Number.isFinite(price) && price > 1 ? 1 / price : null;
}

function noVigProbabilities(odds) {
  const raw = odds.map(impliedProbability);
  if (raw.some((value) => value == null)) return null;
  const total = raw.reduce((sum, value) => sum + value, 0);
  return raw.map((value) => value / total);
}

function expectedValue(probability, odds) {
  const price = Number(odds);
  if (!Number.isFinite(price) || price <= 1) return null;
  return probability * price - 1;
}

function fractionalKelly(probability, odds) {
  const price = Number(odds);
  if (!Number.isFinite(price) || price <= 1) return 0;
  const b = price - 1;
  const q = 1 - probability;
  return clamp(((b * probability - q) / b) * MODEL_SETTINGS.kellyFraction, 0, 0.03);
}

function poisson(lambda, goals) {
  let factorial = 1;
  for (let i = 2; i <= goals; i += 1) factorial *= i;
  return (Math.exp(-lambda) * Math.pow(lambda, goals)) / factorial;
}

function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = String(value).slice(0, 10).split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function formatFixtureDate(fixture) {
  const date = parseDate(fixture.date);
  if (!date) return "TBC";
  const day = date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  return fixture.time ? `${day}, ${fixture.time}` : day;
}

function fixtureKey(fixture) {
  return [activeCompetitionId, fixture.date || "tbc", fixture.home, fixture.away].join("|");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getLineup(fixture, side) {
  return state.lineups?.[fixtureKey(fixture)]?.[side] || "";
}

function normalName(value) {
  return normalizeTeam(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function teamMatch(a, b) {
  const left = normalName(a);
  const right = normalName(b);
  return left === right || left.includes(right) || right.includes(left);
}

function findFixtureForLiveGame(game) {
  const week = getActiveGameweek();
  return week?.fixtures.find((fixture) => {
    return (
      (teamMatch(fixture.home, game.home) && teamMatch(fixture.away, game.away)) ||
      (teamMatch(fixture.home, game.away) && teamMatch(fixture.away, game.home))
    );
  });
}

function lineupImpact(text) {
  const clean = String(text || "").trim();
  if (!clean) return 1;

  const lower = clean.toLowerCase();
  let boost = 1;
  ["injured", "injury", "suspended", "doubtful", "illness", "rested", "rotation", "rotated", "missing", "out", "youth"].forEach((word) => {
    if (lower.includes(word)) boost -= 0.025;
  });
  ["full strength", "strongest", "first choice", "available", "captain starts", "key player starts"].forEach((word) => {
    if (lower.includes(word)) boost += 0.018;
  });

  const namedPlayers = clean.split(/\n|,|;/).map((item) => item.trim()).filter(Boolean).length;
  if (namedPlayers >= 11) boost += 0.025;
  if (namedPlayers > 0 && namedPlayers < 11) boost -= 0.015;
  return clamp(boost, 0.86, 1.08);
}

function normaliseCsvDate(value) {
  const clean = String(value || "").trim();
  const slash = clean.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (!slash) return clean || new Date().toISOString().slice(0, 10);
  const day = slash[1].padStart(2, "0");
  const month = slash[2].padStart(2, "0");
  const rawYear = Number(slash[3]);
  const year = rawYear < 100 ? 2000 + rawYear : rawYear;
  return `${year}-${month}-${day}`;
}

function normaliseStateShape() {
  if (!Array.isArray(state.gameweeks) || !state.gameweeks.length) state.gameweeks = cloneGameweeks(activeCompetitionId);
  if (!Array.isArray(state.matches)) state.matches = [];
  if (!state.lineups || typeof state.lineups !== "object") state.lineups = {};
  if (!state.odds || typeof state.odds !== "object") state.odds = {};
  if (!state.live || typeof state.live !== "object") state.live = {};
  if (typeof state.synthetic !== "boolean") state.synthetic = state.source === "Fallback calibration" && !bundledMatches(activeCompetitionId).length;
  state.currentGameweek = clamp(Number(state.currentGameweek) || 0, 0, state.gameweeks.length - 1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(current);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.map((cells) => Object.fromEntries(headers.map((key, index) => [key, cells[index] || ""])));
}

function csvToMatches(csvText) {
  return parseCsv(csvText)
    .map((row) => {
      const home = normalizeTeam(row.HomeTeam);
      const away = normalizeTeam(row.AwayTeam);
      const hg = Number(row.FTHG);
      const ag = Number(row.FTAG);
      if (!home || !away || Number.isNaN(hg) || Number.isNaN(ag)) return null;
      const date = normaliseCsvDate(row.Date);
      return { date, season: date >= "2026-07-01" ? "2026-27" : row.Season, home, away, hg, ag };
    })
    .filter(Boolean);
}

function buildFallbackMatches(competitionId) {
  const teams = COMPETITIONS[competitionId].teams;
  const matches = [];
  for (let season = 2021; season <= 2025; season += 1) {
    teams.forEach((home, hi) => {
      teams.forEach((away, ai) => {
        if (home === away || (hi + ai + season) % 3 !== 0) return;
        const homeRating = 1.6 - hi / Math.max(12, teams.length);
        const awayRating = 1.5 - ai / Math.max(12, teams.length);
        matches.push({
          date: `${season + 1}-04-${String((hi + ai) % 27 + 1).padStart(2, "0")}`,
          home,
          away,
          hg: clamp(Math.round(1.2 + (homeRating - awayRating) + ((hi + season) % 3) * 0.3), 0, 5),
          ag: clamp(Math.round(1.0 - (homeRating - awayRating) * 0.75 + ((ai + season) % 3) * 0.2), 0, 4),
        });
      });
    });
  }
  return matches;
}

function loadState() {
  const saved = localStorage.getItem(activeConfig().storageKey);
  if (saved) {
    try {
      state = JSON.parse(saved);
      normaliseStateShape();
      return;
    } catch {
      localStorage.removeItem(activeConfig().storageKey);
    }
  }
  state = createInitialState(activeCompetitionId);
  normaliseStateShape();
}

function saveState() {
  normaliseStateShape();
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(activeConfig().storageKey, JSON.stringify(state));
}

function populateSelect(select) {
  select.innerHTML = activeTeams().map((team) => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join("");
}

function buildTeamModel(matches = state.matches) {
  const formWeight = MODEL_SETTINGS.formWeight;
  const totals = { homeGoals: 0, awayGoals: 0, games: 0 };
  const allTeamNames = [...new Set([...activeTeams(), ...matches.flatMap((match) => [match.home, match.away])])];
  const priors = activeConfig().priors || {};
  const team = Object.fromEntries(
    allTeamNames.map((name) => {
      const prior = priors[name] || 1;
      return [name, { played: 0, attackFor: 0, attackAgainst: 0, elo: 1500 + (prior - 1) * 260, recent: [], prior }];
    }),
  );

  [...matches].sort((a, b) => new Date(a.date) - new Date(b.date)).forEach((match, index, ordered) => {
    const home = team[match.home];
    const away = team[match.away];
    if (!home || !away) return;
    const age = ordered.length - index - 1;
    const recency = 0.18 + (1 - 0.18) * Math.exp((-age * formWeight) / 190);

    totals.homeGoals += match.hg;
    totals.awayGoals += match.ag;
    totals.games += 1;
    home.played += recency;
    away.played += recency;
    home.attackFor += match.hg * recency;
    home.attackAgainst += match.ag * recency;
    away.attackFor += match.ag * recency;
    away.attackAgainst += match.hg * recency;

    const homeResult = match.hg > match.ag ? 1 : match.hg === match.ag ? 0.5 : 0;
    const expectedHome = 1 / (1 + Math.pow(10, (away.elo - home.elo) / 400));
    const change = 20 * (Math.log(Math.abs(match.hg - match.ag) + 1) + 1) * (homeResult - expectedHome);
    home.elo += change;
    away.elo -= change;
    home.recent = [...home.recent, match.hg - match.ag].slice(-8);
    away.recent = [...away.recent, match.ag - match.hg].slice(-8);
  });

  const avgHome = totals.games ? totals.homeGoals / totals.games : 1.42;
  const avgAway = totals.games ? totals.awayGoals / totals.games : 1.18;
  allTeamNames.forEach((name) => {
    const t = team[name];
    if (t.played < 0.5) {
      t.attack = t.prior;
      t.defence = clamp(2 - t.prior, 0.72, 1.28);
      t.form = 0;
      return;
    }
    const played = Math.max(1, t.played);
    const dataAttack = (t.attackFor / played) / ((avgHome + avgAway) / 2);
    const dataDefence = (t.attackAgainst / played) / ((avgHome + avgAway) / 2);
    t.attack = dataAttack * 0.86 + t.prior * 0.14;
    t.defence = dataDefence * 0.86 + clamp(2 - t.prior, 0.72, 1.28) * 0.14;
    t.form = t.recent.length ? t.recent.reduce((sum, value) => sum + value, 0) / t.recent.length : 0;
  });

  return { team, avgHome, avgAway };
}

function headToHeadAdjustment(home, away, matches = state.matches) {
  const direct = [...matches]
    .filter((match) => (match.home === home && match.away === away) || (match.home === away && match.away === home))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);
  if (!direct.length) return { home: 1, away: 1 };

  let homeGoalEdge = 0;
  direct.forEach((match, index) => {
    const weight = 1 / (index + 1);
    if (match.home === home) {
      homeGoalEdge += (match.hg - match.ag) * weight;
    } else {
      homeGoalEdge += (match.ag - match.hg) * weight;
    }
  });
  const adjustment = clamp(homeGoalEdge * 0.025, -0.08, 0.08);
  return { home: 1 + adjustment, away: 1 - adjustment };
}

function isCurrentSeasonMatch(match) {
  return match.season === "2026-27" || String(match.date || "") >= "2026-07-01";
}

function fixtureResult(fixture) {
  return [...state.matches].reverse().find((match) => {
    if (!isCurrentSeasonMatch(match)) return false;
    if (match.home !== fixture.home || match.away !== fixture.away) return false;
    return !fixture.date || !match.date || String(match.date).slice(0, 10) === fixture.date;
  });
}

function isWeekComplete(week) {
  return week.fixtures.length > 0 && week.fixtures.every((fixture) => fixtureResult(fixture));
}

function getActiveGameweekIndex() {
  normaliseStateShape();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const datedUpcoming = state.gameweeks.findIndex((week) => {
    const end = parseDate(week.endDate || week.fixtures.at(-1)?.date);
    return end && end >= today && !isWeekComplete(week);
  });
  if (datedUpcoming >= 0) return datedUpcoming;
  const incomplete = state.gameweeks.findIndex((week) => !isWeekComplete(week));
  return incomplete >= 0 ? incomplete : state.gameweeks.length - 1;
}

function getActiveGameweek() {
  state.currentGameweek = getActiveGameweekIndex();
  return state.gameweeks[state.currentGameweek];
}

function predictFixture(fixture, modelMatches = state.matches, useLineups = true) {
  const model = buildTeamModel(modelMatches);
  const h = model.team[fixture.home] || { elo: 1500, attack: 1, defence: 1, form: 0 };
  const a = model.team[fixture.away] || { elo: 1500, attack: 1, defence: 1, form: 0 };
  const eloGap = (h.elo - a.elo) / 420;
  const formGap = (h.form - a.form) / 10;
  const homeLineup = useLineups ? lineupImpact(getLineup(fixture, "home")) : 1;
  const awayLineup = useLineups ? lineupImpact(getLineup(fixture, "away")) : 1;
  const h2h = headToHeadAdjustment(fixture.home, fixture.away, modelMatches);
  const liveXg = state.live?.[fixtureKey(fixture)]?.xg;
  let homeLambda = clamp(
    model.avgHome * (0.72 + h.attack * 0.38) * (0.78 + a.defence * 0.24) * (1 + MODEL_SETTINGS.homeBoost + eloGap * 0.08 + formGap) * homeLineup * h2h.home,
    0.2,
    3.8,
  );
  let awayLambda = clamp(
    model.avgAway * (0.72 + a.attack * 0.36) * (0.82 + h.defence * 0.22) * (1 - MODEL_SETTINGS.homeBoost * 0.35 - eloGap * 0.07 - formGap * 0.6) * awayLineup * h2h.away,
    0.15,
    3.4,
  );
  if (liveXg && Number.isFinite(Number(liveXg.home)) && Number.isFinite(Number(liveXg.away))) {
    homeLambda = clamp(homeLambda * 0.72 + Number(liveXg.home) * 0.28, 0.2, 3.8);
    awayLambda = clamp(awayLambda * 0.72 + Number(liveXg.away) * 0.28, 0.15, 3.4);
  }

  let homeWin = 0;
  let draw = 0;
  let awayWin = 0;
  let btts = 0;
  let over25 = 0;
  let under25 = 0;
  let bestScore = { home: 0, away: 0, value: 0 };

  for (let hg = 0; hg <= 8; hg += 1) {
    for (let ag = 0; ag <= 8; ag += 1) {
      const p = poisson(homeLambda, hg) * poisson(awayLambda, ag);
      if (hg > ag) homeWin += p;
      if (hg === ag) draw += p;
      if (ag > hg) awayWin += p;
      if (hg > 0 && ag > 0) btts += p;
      if (hg + ag > 2.5) over25 += p;
      if (hg + ag < 2.5) under25 += p;
      if (p > bestScore.value) bestScore = { home: hg, away: ag, value: p };
    }
  }

  draw = clamp(draw * (1 + MODEL_SETTINGS.drawTune), 0.04, 0.42);
  const nonDraw = homeWin + awayWin || 1;
  homeWin = homeWin * ((1 - draw) / nonDraw);
  awayWin = awayWin * ((1 - draw) / nonDraw);

  const winner = [
    { label: fixture.home, value: homeWin },
    { label: "Draw", value: draw },
    { label: fixture.away, value: awayWin },
  ].sort((x, y) => y.value - x.value)[0];
  const doubleChance = [
    { label: `${fixture.home} or Draw`, value: homeWin + draw },
    { label: `${fixture.home} or ${fixture.away}`, value: homeWin + awayWin },
    { label: `Draw or ${fixture.away}`, value: draw + awayWin },
  ].sort((x, y) => y.value - x.value)[0];
  const goals = [
    { label: "Over 2.5", value: over25 },
    { label: "Under 2.5", value: under25 },
  ].sort((x, y) => y.value - x.value)[0];

  return {
    home: fixture.home,
    away: fixture.away,
    homeWin,
    draw,
    awayWin,
    winner,
    doubleChance,
    btts: { label: btts >= 0.5 ? "BTTS Yes" : "BTTS No", value: btts >= 0.5 ? btts : 1 - btts },
    goals,
    score: `${bestScore.home}-${bestScore.away}`,
    scoreConfidence: bestScore.value,
    expected: `${homeLambda.toFixed(2)} - ${awayLambda.toFixed(2)} xG`,
    lineupNote: `${Math.round(homeLineup * 100)} / ${Math.round(awayLineup * 100)}`,
  };
}

function predictionBacktest() {
  if (state.synthetic) return { sample: 0, oneXTwo: 0, brier: 0, btts: 0, ou25: 0, exact: 0, favorite: 0, valueBets: 0, valueRoi: 0 };
  const cacheKey = `${activeCompetitionId}:${state.matches.length}`;
  if (backtestCache[cacheKey]) return backtestCache[cacheKey];
  const ordered = [...state.matches]
    .filter((match) => activeTeams().includes(match.home) && activeTeams().includes(match.away))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const warmup = Math.min(420, Math.floor(ordered.length * 0.55));
  const sample = ordered.slice(warmup).slice(-180);
  if (sample.length < 40) {
    return { sample: sample.length, oneXTwo: 0, brier: 0, btts: 0, ou25: 0, exact: 0, favorite: 0 };
  }

  let oneXTwo = 0;
  let brier = 0;
  let btts = 0;
  let ou25 = 0;
  let exact = 0;
  let favorite = 0;
  let valueBets = 0;
  let valueProfit = 0;
  sample.forEach((match) => {
    const priorMatches = ordered.filter((item) => new Date(item.date) < new Date(match.date));
    const p = predictFixture({ home: match.home, away: match.away, date: match.date }, priorMatches, false);
    const actual = match.hg > match.ag ? "H" : match.hg === match.ag ? "D" : "A";
    const predicted = p.homeWin > p.draw && p.homeWin > p.awayWin ? "H" : p.draw > p.awayWin ? "D" : "A";
    if (actual === predicted) oneXTwo += 1;
    if ((actual === "H" && p.homeWin >= 0.5) || (actual === "A" && p.awayWin >= 0.5)) favorite += 1;
    const actualVector = [actual === "H" ? 1 : 0, actual === "D" ? 1 : 0, actual === "A" ? 1 : 0];
    const predictedVector = [p.homeWin, p.draw, p.awayWin];
    brier += predictedVector.reduce((sum, value, index) => sum + Math.pow(value - actualVector[index], 2), 0) / 3;
    if ((match.hg > 0 && match.ag > 0) === p.btts.label.endsWith("Yes")) btts += 1;
    if ((match.hg + match.ag > 2.5) === p.goals.label.startsWith("Over")) ou25 += 1;
    if (p.score === `${match.hg}-${match.ag}`) exact += 1;
    if (match.odds) {
      const bestValue = bestBetRows(p, match.odds).find((row) => row.ev >= MODEL_SETTINGS.edgeThreshold);
      if (bestValue) {
        valueBets += 1;
        const won =
          (bestValue.key === "home" && actual === "H") ||
          (bestValue.key === "draw" && actual === "D") ||
          (bestValue.key === "away" && actual === "A") ||
          (bestValue.key === "over25" && match.hg + match.ag > 2.5) ||
          (bestValue.key === "under25" && match.hg + match.ag < 2.5);
        valueProfit += won ? Number(bestValue.odds) - 1 : -1;
      }
    }
  });

  const result = {
    sample: sample.length,
    oneXTwo: oneXTwo / sample.length,
    brier: brier / sample.length,
    btts: btts / sample.length,
    ou25: ou25 / sample.length,
    exact: exact / sample.length,
    favorite: favorite / sample.length,
    valueBets,
    valueRoi: valueBets ? valueProfit / valueBets : 0,
  };
  backtestCache[cacheKey] = result;
  return result;
}

function renderPredictions() {
  const grid = el("predictionGrid");
  const week = getActiveGameweek();
  if (!week || !week.fixtures.length) {
    grid.innerHTML = '<div class="empty">Add fixtures to this game week to generate predictions.</div>';
    return;
  }

  grid.innerHTML = week.fixtures
    .map((fixture) => {
      const key = fixtureKey(fixture);
      const p = predictFixture(fixture);
      const odds = state.odds?.[key] || {};
      const live = state.live?.[key] || {};
      const confidence = Math.max(p.winner.value, p.doubleChance.value, p.btts.value, p.goals.value);
      const result = fixtureResult(fixture);
      const resultLabel = result ? `Result ${result.hg}-${result.ag}` : formatFixtureDate(fixture);
      return `
        <article class="card" data-fixture-key="${escapeHtml(key)}">
          <div class="fixture-meta">${week.name} &middot; ${resultLabel}</div>
          <div class="matchline">
            <div class="team">${escapeHtml(p.home)}</div>
            <div class="vs">v</div>
            <div class="team">${escapeHtml(p.away)}</div>
          </div>
          <div class="scoreline">
            <span>Predicted score</span>
            <strong>${p.score}</strong>
            <em>${pct(p.scoreConfidence)} exact-score model confidence</em>
          </div>
          <div class="prob-row"><strong>Home</strong><div class="bar"><span style="width:${pct(p.homeWin)}"></span></div><b>${pct(p.homeWin)}</b></div>
          <div class="prob-row"><strong>Draw</strong><div class="bar bar--draw"><span style="width:${pct(p.draw)}"></span></div><b>${pct(p.draw)}</b></div>
          <div class="prob-row"><strong>Away</strong><div class="bar bar--away"><span style="width:${pct(p.awayWin)}"></span></div><b>${pct(p.awayWin)}</b></div>
          <div class="markets">
            <div class="market"><span>Winner</span><strong>${escapeHtml(p.winner.label)} ${pct(p.winner.value)}</strong></div>
            <div class="market"><span>Double chance</span><strong>${escapeHtml(p.doubleChance.label)} ${pct(p.doubleChance.value)}</strong></div>
            <div class="market"><span>BTTS</span><strong>${p.btts.label} ${pct(p.btts.value)}</strong></div>
            <div class="market"><span>O/U 2.5 goals</span><strong>${p.goals.label} ${pct(p.goals.value)}</strong></div>
          </div>
          <div class="odds-panel">
            <div class="odds-head">
              <span>Bookmaker odds</span>
              <strong>Value engine</strong>
            </div>
            <div class="odds-grid">
              <label>${escapeHtml(p.home)}<input data-odds-key="home" type="number" step="0.01" min="1.01" placeholder="Home" value="${escapeHtml(odds.home || "")}"></label>
              <label>Draw<input data-odds-key="draw" type="number" step="0.01" min="1.01" placeholder="Draw" value="${escapeHtml(odds.draw || "")}"></label>
              <label>${escapeHtml(p.away)}<input data-odds-key="away" type="number" step="0.01" min="1.01" placeholder="Away" value="${escapeHtml(odds.away || "")}"></label>
              <label>BTTS Yes<input data-odds-key="bttsYes" type="number" step="0.01" min="1.01" placeholder="Yes" value="${escapeHtml(odds.bttsYes || "")}"></label>
              <label>BTTS No<input data-odds-key="bttsNo" type="number" step="0.01" min="1.01" placeholder="No" value="${escapeHtml(odds.bttsNo || "")}"></label>
              <label>Over 2.5<input data-odds-key="over25" type="number" step="0.01" min="1.01" placeholder="Over" value="${escapeHtml(odds.over25 || "")}"></label>
              <label>Under 2.5<input data-odds-key="under25" type="number" step="0.01" min="1.01" placeholder="Under" value="${escapeHtml(odds.under25 || "")}"></label>
            </div>
            ${renderValueSummary(key, p)}
          </div>
          ${renderLiveNotes(live)}
          <div class="lineup-editor">
            <label>${escapeHtml(p.home)} lineup<textarea data-lineup-side="home" rows="4" placeholder="Paste starting XI, injuries, suspensions, rotation notes">${escapeHtml(getLineup(fixture, "home"))}</textarea></label>
            <label>${escapeHtml(p.away)} lineup<textarea data-lineup-side="away" rows="4" placeholder="Paste starting XI, injuries, suspensions, rotation notes">${escapeHtml(getLineup(fixture, "away"))}</textarea></label>
          </div>
          <div class="confidence">Expected goals ${p.expected} &middot; Lineup strength ${p.lineupNote} &middot; Confidence ${pct(confidence)}</div>
        </article>
      `;
    })
    .join("");
  attachLineupListeners();
  attachOddsListeners();
}

function bestBetRows(prediction, odds = {}) {
  const candidates = [
    { key: "home", label: prediction.home, probability: prediction.homeWin, odds: odds.home },
    { key: "draw", label: "Draw", probability: prediction.draw, odds: odds.draw },
    { key: "away", label: prediction.away, probability: prediction.awayWin, odds: odds.away },
    { key: "bttsYes", label: "BTTS Yes", probability: prediction.btts.label === "BTTS Yes" ? prediction.btts.value : 1 - prediction.btts.value, odds: odds.bttsYes },
    { key: "bttsNo", label: "BTTS No", probability: prediction.btts.label === "BTTS No" ? prediction.btts.value : 1 - prediction.btts.value, odds: odds.bttsNo },
    { key: "over25", label: "Over 2.5", probability: prediction.goals.label === "Over 2.5" ? prediction.goals.value : 1 - prediction.goals.value, odds: odds.over25 },
    { key: "under25", label: "Under 2.5", probability: prediction.goals.label === "Under 2.5" ? prediction.goals.value : 1 - prediction.goals.value, odds: odds.under25 },
  ];

  return candidates
    .map((candidate) => {
      const ev = expectedValue(candidate.probability, candidate.odds);
      return { ...candidate, implied: impliedProbability(candidate.odds), ev, stake: fractionalKelly(candidate.probability, candidate.odds) };
    })
    .filter((candidate) => candidate.ev != null)
    .sort((a, b) => b.ev - a.ev);
}

function renderValueSummary(key, prediction) {
  const odds = state.odds?.[key] || {};
  const rows = bestBetRows(prediction, odds);
  const best = rows[0];
  if (!best) return '<div class="value-summary muted">Add bookmaker odds to calculate value and staking.</div>';
  const status = best.ev >= MODEL_SETTINGS.edgeThreshold ? "value" : "pass";
  return `
    <div class="value-summary value-summary--${status}">
      <span>${status === "value" ? "Value flag" : "No clear value"}</span>
      <strong>${escapeHtml(best.label)} at ${decimal(best.odds)}</strong>
      <em>Model ${pct(best.probability)} &middot; Implied ${pct(best.implied)} &middot; EV ${(best.ev * 100).toFixed(1)}% &middot; Quarter Kelly ${(best.stake * 100).toFixed(1)}% bank</em>
    </div>
  `;
}

function renderLiveNotes(live) {
  if (!live || (!live.xg && !live.teamNews && !live.oddsUpdatedAt && !live.lineupsUpdatedAt)) return "";
  const xgText = live.xg ? `xG feed ${decimal(live.xg.home)}-${decimal(live.xg.away)}` : "xG pending";
  const oddsText = live.oddsUpdatedAt ? "Odds live" : "Odds pending";
  const lineupText = live.lineupsUpdatedAt ? "Lineups live" : "Lineups pending";
  return `
    <div class="live-notes">
      <span>${oddsText}</span>
      <span>${lineupText}</span>
      <span>${xgText}</span>
      ${live.teamNews ? `<em>${escapeHtml(live.teamNews)}</em>` : ""}
    </div>
  `;
}

function renderChrome() {
  const config = activeConfig();
  const matchCount = state.matches.length;
  const week = getActiveGameweek();
  const backtest = predictionBacktest();
  el("competitionEyebrow").textContent = config.eyebrow;
  el("dataStatus").textContent = state.synthetic ? "Calibration only" : matchCount > 250 ? "Model loaded" : "Needs more data";
  el("modelStamp").textContent = state.synthetic
    ? `${week?.fixtures.length || 0} fixtures - draw data pending`
    : `${matchCount} results - ${week?.fixtures.length || 0} fixtures - ${backtest.sample} backtested`;
  el("activeWeekTitle").textContent = `${config.label} - ${week ? week.name : "Upcoming Game Week"}`;
  el("activeWeekSubtitle").textContent = week
    ? `${formatFixtureDate({ date: week.startDate })} to ${formatFixtureDate({ date: week.endDate })}`
    : "Predicted scores, markets, and lineup notes";
  el("autoUpdateStamp").textContent = config.currentSeasonUrl ? "Checking on open" : "Fixture draw pending";
  document.querySelectorAll(".competition-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.competition === activeCompetitionId);
  });
}

function renderAll() {
  renderChrome();
  renderBacktest();
  renderPredictions();
}

function renderBacktest() {
  const backtest = predictionBacktest();
  if (!backtest.sample) {
    el("backtestPanel").innerHTML = `
      <div class="backtest-card">
        <span>Backtest</span>
        <strong>Not enough historical data</strong>
        <em>Use this tab cautiously until more completed matches are available.</em>
      </div>
    `;
    return;
  }
  el("backtestPanel").innerHTML = `
    <div class="backtest-card">
      <span>Rolling backtest</span>
      <strong>${backtest.sample} recent historical matches</strong>
      <em>Uses only matches before each tested fixture.</em>
    </div>
    <div class="backtest-metrics">
      <div><span>1X2 hit</span><strong>${pct(backtest.oneXTwo)}</strong></div>
      <div><span>BTTS hit</span><strong>${pct(backtest.btts)}</strong></div>
      <div><span>O/U 2.5 hit</span><strong>${pct(backtest.ou25)}</strong></div>
      <div><span>Exact score</span><strong>${pct(backtest.exact)}</strong></div>
      <div><span>Brier</span><strong>${backtest.brier.toFixed(3)}</strong></div>
      <div><span>Value bets</span><strong>${backtest.valueBets}</strong></div>
      <div><span>Flat ROI</span><strong>${(backtest.valueRoi * 100).toFixed(1)}%</strong></div>
    </div>
  `;
}

function attachLineupListeners() {
  document.querySelectorAll("[data-fixture-key] textarea").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      const card = event.target.closest("[data-fixture-key]");
      if (!card) return;
      if (!state.lineups[card.dataset.fixtureKey]) state.lineups[card.dataset.fixtureKey] = {};
      state.lineups[card.dataset.fixtureKey][event.target.dataset.lineupSide] = event.target.value;
      saveState();
      clearTimeout(lineupRenderTimer);
      lineupRenderTimer = setTimeout(renderPredictions, 650);
    });
  });
}

function attachOddsListeners() {
  document.querySelectorAll("[data-fixture-key] [data-odds-key]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const card = event.target.closest("[data-fixture-key]");
      if (!card) return;
      if (!state.odds[card.dataset.fixtureKey]) state.odds[card.dataset.fixtureKey] = {};
      const value = Number(event.target.value);
      if (Number.isFinite(value) && value > 1) {
        state.odds[card.dataset.fixtureKey][event.target.dataset.oddsKey] = value;
      } else {
        delete state.odds[card.dataset.fixtureKey][event.target.dataset.oddsKey];
      }
      saveState();
      renderPredictions();
    });
  });
}

function mergeMatches(newMatches) {
  const seen = new Set(state.matches.map((match) => [match.date, match.home, match.away, match.hg, match.ag].join("|")));
  let added = 0;
  newMatches.forEach((match) => {
    const key = [match.date, match.home, match.away, match.hg, match.ag].join("|");
    if (seen.has(key)) return;
    seen.add(key);
    state.matches.push(match);
    added += 1;
  });
  return added;
}

async function refreshCurrentSeasonResults() {
  const config = activeConfig();
  if (!config.currentSeasonUrl) {
    el("autoUpdateStamp").textContent = "Fixture draw pending";
    el("dataStatus").textContent = "Saved data";
    return;
  }
  el("dataStatus").textContent = "Checking results";
  el("autoUpdateStamp").textContent = "Checking current feed";
  try {
    const response = await fetch(`${config.currentSeasonUrl}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const added = mergeMatches(csvToMatches(await response.text()));
    if (added) {
      state.source = "Auto-updated Football-Data CSV";
      saveState();
    }
    el("autoUpdateStamp").textContent = added ? `Added ${added} new results` : "No new results";
    el("dataStatus").textContent = "Auto updated";
  } catch (error) {
    el("autoUpdateStamp").textContent = "Auto feed unavailable";
    el("dataStatus").textContent = "Using saved data";
    console.warn("Current season auto update failed", error);
  }
  renderAll();
}

function mergeLiveGame(game) {
  const fixture = findFixtureForLiveGame(game);
  if (!fixture) return false;
  const key = fixtureKey(fixture);
  if (!state.live[key]) state.live[key] = {};

  if (game.odds) {
    if (!state.odds[key]) state.odds[key] = {};
    ["home", "draw", "away", "bttsYes", "bttsNo", "over25", "under25"].forEach((market) => {
      if (game.odds[market]) state.odds[key][market] = game.odds[market];
    });
    state.live[key].oddsUpdatedAt = game.oddsUpdatedAt || new Date().toISOString();
  }

  if (game.lineups) {
    if (!state.lineups[key]) state.lineups[key] = {};
    if (game.lineups.home) state.lineups[key].home = game.lineups.home;
    if (game.lineups.away) state.lineups[key].away = game.lineups.away;
    state.live[key].lineupsUpdatedAt = game.lineupsUpdatedAt || new Date().toISOString();
  }

  if (game.xg) {
    state.live[key].xg = game.xg;
    state.live[key].xgUpdatedAt = game.xgUpdatedAt || new Date().toISOString();
  }

  if (game.teamNews) state.live[key].teamNews = game.teamNews;
  return true;
}

async function refreshLiveData() {
  el("liveDataStamp").textContent = "Checking providers";
  el("liveDataSummary").textContent = "Loading";
  try {
    const response = await fetch(`/api/live-data?competition=${encodeURIComponent(activeCompetitionId)}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const merged = (payload.games || []).filter(mergeLiveGame).length;
    state.live.lastRefresh = new Date().toISOString();
    saveState();
    el("liveDataStamp").textContent = payload.providerStatus || "Live data checked";
    el("liveDataSummary").textContent = `${merged} games updated`;
  } catch (error) {
    el("liveDataStamp").textContent = "Connect provider keys";
    el("liveDataSummary").textContent = "Deploy API needed";
    console.warn("Live data refresh failed", error);
  }
  renderAll();
}

function importFiles(files) {
  [...files].forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imported = csvToMatches(String(reader.result));
      if (imported.length) {
        state.matches.push(...imported);
        state.source = "Imported CSV + local updates";
        saveState();
        renderAll();
      }
    };
    reader.readAsText(file);
  });
}

function addFixture() {
  const home = el("homeTeam").value;
  const away = el("awayTeam").value;
  if (home === away) return;
  const week = getActiveGameweek();
  week.fixtures.push({ date: week.startDate || new Date().toISOString().slice(0, 10), time: "15:00", home, away });
  saveState();
  renderAll();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${activeCompetitionId}-2026-27-model-data.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function resetData() {
  localStorage.removeItem(activeConfig().storageKey);
  state = createInitialState(activeCompetitionId);
  populateTeamControls();
  renderAll();
}

function populateTeamControls() {
  ["homeTeam", "awayTeam"].forEach((id) => populateSelect(el(id)));
  el("awayTeam").selectedIndex = Math.min(1, activeTeams().length - 1);
}

function switchCompetition(competitionId) {
  activeCompetitionId = competitionId;
  localStorage.setItem("football-model-active-competition", activeCompetitionId);
  loadState();
  populateTeamControls();
  renderAll();
  refreshCurrentSeasonResults();
}

function init() {
  loadState();
  populateTeamControls();
  renderAll();
  el("addFixture").addEventListener("click", addFixture);
  el("exportData").addEventListener("click", exportData);
  el("resetData").addEventListener("click", resetData);
  el("autoRefresh").addEventListener("click", refreshCurrentSeasonResults);
  el("liveRefresh").addEventListener("click", refreshLiveData);
  el("csvUpload").addEventListener("change", (event) => importFiles(event.target.files));
  document.querySelectorAll(".competition-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchCompetition(tab.dataset.competition));
  });
  refreshCurrentSeasonResults();
  refreshLiveData();
}

init();
