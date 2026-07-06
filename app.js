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
  ["Paris SG", "Paris Saint-Germain"],
  ["Ath Madrid", "Atletico Madrid"],
  ["Ath Bilbao", "Athletic Bilbao"],
  ["Betis", "Real Betis"],
  ["Sociedad", "Real Sociedad"],
  ["Vallecano", "Rayo Vallecano"],
  ["Inter", "Inter Milan"],
  ["Milan", "AC Milan"],
  ["Dortmund", "Borussia Dortmund"],
  ["Ein Frankfurt", "Eintracht Frankfurt"],
  ["M'gladbach", "Borussia Monchengladbach"],
  ["Leverkusen", "Bayer Leverkusen"],
  ["FC Koln", "Koln"],
  ["Sp Lisbon", "Sporting CP"],
  ["Sporting", "Sporting CP"],
  ["Guimaraes", "Vitoria Guimaraes"],
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
  "ligue-1": {
    label: "Ligue 1",
    eyebrow: "French Ligue 1 2026/27",
    storageKey: "football-model-ligue-1-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/F1.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_france_ligue_one"],
      apiFootballLeague: 61,
    },
    teams: [
      "Paris Saint-Germain",
      "Marseille",
      "Monaco",
      "Lyon",
      "Lille",
      "Nice",
      "Rennes",
      "Lens",
      "Strasbourg",
      "Toulouse",
      "Nantes",
      "Montpellier",
      "Brest",
      "Reims",
      "Auxerre",
      "Angers",
      "Lorient",
      "Paris FC",
    ],
    priors: {
      "Paris Saint-Germain": 1.34,
      Marseille: 1.15,
      Monaco: 1.14,
      Lyon: 1.1,
      Lille: 1.08,
      Nice: 1.04,
      Rennes: 1.02,
      Lens: 1.01,
      Strasbourg: 0.98,
      Toulouse: 0.95,
      Nantes: 0.92,
      Montpellier: 0.9,
      Brest: 0.9,
      Reims: 0.89,
      Auxerre: 0.87,
      Angers: 0.85,
      Lorient: 0.84,
      "Paris FC": 0.83,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-14",
        endDate: "2026-08-17",
        fixtures: [
          { date: "2026-08-14", time: "20:00", home: "Paris Saint-Germain", away: "Lorient" },
          { date: "2026-08-15", time: "16:00", home: "Marseille", away: "Paris FC" },
          { date: "2026-08-15", time: "18:00", home: "Monaco", away: "Angers" },
          { date: "2026-08-15", time: "20:00", home: "Lyon", away: "Auxerre" },
          { date: "2026-08-16", time: "14:00", home: "Lille", away: "Reims" },
          { date: "2026-08-16", time: "16:00", home: "Nice", away: "Brest" },
          { date: "2026-08-16", time: "18:00", home: "Rennes", away: "Montpellier" },
          { date: "2026-08-16", time: "20:00", home: "Lens", away: "Nantes" },
          { date: "2026-08-17", time: "20:00", home: "Strasbourg", away: "Toulouse" },
        ],
      },
    ],
  },
  bundesliga: {
    label: "Bundesliga",
    eyebrow: "German Bundesliga 2026/27",
    storageKey: "football-model-bundesliga-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/D1.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_germany_bundesliga"],
      apiFootballLeague: 78,
    },
    teams: [
      "Bayern Munich",
      "Borussia Dortmund",
      "RB Leipzig",
      "Bayer Leverkusen",
      "Eintracht Frankfurt",
      "Stuttgart",
      "Wolfsburg",
      "Freiburg",
      "Union Berlin",
      "Werder Bremen",
      "Borussia Monchengladbach",
      "Mainz",
      "Augsburg",
      "Hoffenheim",
      "Heidenheim",
      "Hamburg",
      "Koln",
      "St Pauli",
    ],
    priors: {
      "Bayern Munich": 1.3,
      "Borussia Dortmund": 1.16,
      "RB Leipzig": 1.14,
      "Bayer Leverkusen": 1.13,
      "Eintracht Frankfurt": 1.07,
      Stuttgart: 1.05,
      Wolfsburg: 0.99,
      Freiburg: 0.98,
      "Union Berlin": 0.95,
      "Werder Bremen": 0.94,
      "Borussia Monchengladbach": 0.94,
      Mainz: 0.92,
      Augsburg: 0.9,
      Hoffenheim: 0.9,
      Heidenheim: 0.88,
      Hamburg: 0.86,
      Koln: 0.85,
      "St Pauli": 0.84,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-21",
        endDate: "2026-08-23",
        fixtures: [
          { date: "2026-08-21", time: "19:30", home: "Bayern Munich", away: "St Pauli" },
          { date: "2026-08-22", time: "14:30", home: "Borussia Dortmund", away: "Koln" },
          { date: "2026-08-22", time: "14:30", home: "RB Leipzig", away: "Hamburg" },
          { date: "2026-08-22", time: "14:30", home: "Bayer Leverkusen", away: "Heidenheim" },
          { date: "2026-08-22", time: "17:30", home: "Eintracht Frankfurt", away: "Hoffenheim" },
          { date: "2026-08-23", time: "14:30", home: "Stuttgart", away: "Augsburg" },
          { date: "2026-08-23", time: "16:30", home: "Wolfsburg", away: "Mainz" },
          { date: "2026-08-23", time: "18:30", home: "Freiburg", away: "Borussia Monchengladbach" },
          { date: "2026-08-23", time: "18:30", home: "Union Berlin", away: "Werder Bremen" },
        ],
      },
    ],
  },
  "la-liga": {
    label: "La Liga",
    eyebrow: "Spanish La Liga 2026/27",
    storageKey: "football-model-la-liga-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/SP1.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_spain_la_liga"],
      apiFootballLeague: 140,
    },
    teams: [
      "Real Madrid",
      "Barcelona",
      "Atletico Madrid",
      "Athletic Bilbao",
      "Villarreal",
      "Real Betis",
      "Real Sociedad",
      "Sevilla",
      "Valencia",
      "Celta Vigo",
      "Osasuna",
      "Getafe",
      "Mallorca",
      "Rayo Vallecano",
      "Girona",
      "Espanyol",
      "Alaves",
      "Levante",
      "Elche",
      "Real Valladolid",
    ],
    priors: {
      "Real Madrid": 1.3,
      Barcelona: 1.27,
      "Atletico Madrid": 1.18,
      "Athletic Bilbao": 1.08,
      Villarreal: 1.06,
      "Real Betis": 1.03,
      "Real Sociedad": 1.02,
      Sevilla: 0.99,
      Valencia: 0.96,
      "Celta Vigo": 0.94,
      Osasuna: 0.93,
      Getafe: 0.91,
      Mallorca: 0.91,
      "Rayo Vallecano": 0.9,
      Girona: 0.9,
      Espanyol: 0.88,
      Alaves: 0.86,
      Levante: 0.85,
      Elche: 0.84,
      "Real Valladolid": 0.82,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-14",
        endDate: "2026-08-17",
        fixtures: [
          { date: "2026-08-14", time: "20:00", home: "Real Madrid", away: "Real Valladolid" },
          { date: "2026-08-15", time: "17:30", home: "Barcelona", away: "Elche" },
          { date: "2026-08-15", time: "20:00", home: "Atletico Madrid", away: "Levante" },
          { date: "2026-08-16", time: "16:00", home: "Athletic Bilbao", away: "Alaves" },
          { date: "2026-08-16", time: "18:30", home: "Villarreal", away: "Espanyol" },
          { date: "2026-08-16", time: "20:00", home: "Real Betis", away: "Girona" },
          { date: "2026-08-17", time: "18:30", home: "Real Sociedad", away: "Rayo Vallecano" },
          { date: "2026-08-17", time: "20:00", home: "Sevilla", away: "Mallorca" },
          { date: "2026-08-17", time: "20:00", home: "Valencia", away: "Getafe" },
          { date: "2026-08-17", time: "20:00", home: "Celta Vigo", away: "Osasuna" },
        ],
      },
    ],
  },
  "serie-a": {
    label: "Serie A",
    eyebrow: "Italian Serie A 2026/27",
    storageKey: "football-model-serie-a-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/I1.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_italy_serie_a"],
      apiFootballLeague: 135,
    },
    teams: [
      "Inter Milan",
      "Juventus",
      "AC Milan",
      "Napoli",
      "Atalanta",
      "Roma",
      "Lazio",
      "Fiorentina",
      "Bologna",
      "Torino",
      "Genoa",
      "Udinese",
      "Cagliari",
      "Verona",
      "Lecce",
      "Parma",
      "Como",
      "Sassuolo",
      "Pisa",
      "Cremonese",
    ],
    priors: {
      "Inter Milan": 1.25,
      Juventus: 1.18,
      "AC Milan": 1.17,
      Napoli: 1.16,
      Atalanta: 1.12,
      Roma: 1.08,
      Lazio: 1.06,
      Fiorentina: 1.04,
      Bologna: 1.02,
      Torino: 0.96,
      Genoa: 0.92,
      Udinese: 0.91,
      Cagliari: 0.89,
      Verona: 0.88,
      Lecce: 0.87,
      Parma: 0.86,
      Como: 0.85,
      Sassuolo: 0.84,
      Pisa: 0.82,
      Cremonese: 0.81,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-22",
        endDate: "2026-08-24",
        fixtures: [
          { date: "2026-08-22", time: "17:30", home: "Inter Milan", away: "Cremonese" },
          { date: "2026-08-22", time: "19:45", home: "Juventus", away: "Pisa" },
          { date: "2026-08-23", time: "17:30", home: "AC Milan", away: "Sassuolo" },
          { date: "2026-08-23", time: "19:45", home: "Napoli", away: "Como" },
          { date: "2026-08-23", time: "19:45", home: "Atalanta", away: "Parma" },
          { date: "2026-08-24", time: "17:30", home: "Roma", away: "Lecce" },
          { date: "2026-08-24", time: "17:30", home: "Lazio", away: "Verona" },
          { date: "2026-08-24", time: "19:45", home: "Fiorentina", away: "Cagliari" },
          { date: "2026-08-24", time: "19:45", home: "Bologna", away: "Udinese" },
          { date: "2026-08-24", time: "19:45", home: "Torino", away: "Genoa" },
        ],
      },
    ],
  },
  "primeira-liga": {
    label: "Primeira Liga",
    eyebrow: "Portuguese Primeira Liga 2026/27",
    storageKey: "football-model-primeira-liga-v2",
    currentSeasonUrl: "https://www.football-data.co.uk/mmz4281/2627/P1.csv",
    liveProvider: {
      oddsApiKeys: ["soccer_portugal_primeira_liga"],
      apiFootballLeague: 94,
    },
    teams: [
      "Benfica",
      "Porto",
      "Sporting CP",
      "Braga",
      "Vitoria Guimaraes",
      "Famalicao",
      "Casa Pia",
      "Moreirense",
      "Arouca",
      "Rio Ave",
      "Estoril",
      "Boavista",
      "Gil Vicente",
      "Nacional",
      "AVS",
      "Santa Clara",
      "Tondela",
      "Alverca",
    ],
    priors: {
      Benfica: 1.26,
      Porto: 1.22,
      "Sporting CP": 1.22,
      Braga: 1.12,
      "Vitoria Guimaraes": 1.04,
      Famalicao: 0.97,
      "Casa Pia": 0.94,
      Moreirense: 0.93,
      Arouca: 0.91,
      "Rio Ave": 0.9,
      Estoril: 0.89,
      Boavista: 0.88,
      "Gil Vicente": 0.88,
      Nacional: 0.86,
      AVS: 0.85,
      "Santa Clara": 0.84,
      Tondela: 0.82,
      Alverca: 0.81,
    },
    gameweeks: [
      {
        id: 1,
        name: "Gameweek 1",
        startDate: "2026-08-07",
        endDate: "2026-08-10",
        fixtures: [
          { date: "2026-08-07", time: "20:15", home: "Benfica", away: "Alverca" },
          { date: "2026-08-08", time: "18:00", home: "Porto", away: "Tondela" },
          { date: "2026-08-08", time: "20:30", home: "Sporting CP", away: "Santa Clara" },
          { date: "2026-08-09", time: "15:30", home: "Braga", away: "AVS" },
          { date: "2026-08-09", time: "18:00", home: "Vitoria Guimaraes", away: "Nacional" },
          { date: "2026-08-09", time: "20:30", home: "Famalicao", away: "Gil Vicente" },
          { date: "2026-08-10", time: "18:00", home: "Casa Pia", away: "Boavista" },
          { date: "2026-08-10", time: "20:15", home: "Moreirense", away: "Estoril" },
          { date: "2026-08-10", time: "20:15", home: "Arouca", away: "Rio Ave" },
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
  "europa-league": {
    label: "Europa League",
    eyebrow: "UEFA Europa League 2026/27",
    storageKey: "football-model-europa-league-v2",
    currentSeasonUrl: "",
    liveProvider: {
      oddsApiKeys: ["soccer_uefa_europa_league"],
      apiFootballLeague: 3,
    },
    teams: [
      "Tottenham Hotspur",
      "Manchester United",
      "Roma",
      "Lazio",
      "Real Betis",
      "Real Sociedad",
      "Porto",
      "Braga",
      "Lyon",
      "Marseille",
      "Eintracht Frankfurt",
      "Freiburg",
      "Ajax",
      "PSV Eindhoven",
      "Feyenoord",
      "Rangers",
      "Celtic",
      "Fenerbahce",
      "Galatasaray",
      "Olympiacos",
      "Shakhtar Donetsk",
      "Dynamo Kyiv",
      "Sporting CP",
      "Villarreal",
    ],
    priors: {
      "Tottenham Hotspur": 1.15,
      "Manchester United": 1.15,
      Roma: 1.11,
      Lazio: 1.09,
      "Real Betis": 1.06,
      "Real Sociedad": 1.06,
      Porto: 1.12,
      Braga: 1.05,
      Lyon: 1.05,
      Marseille: 1.08,
      "Eintracht Frankfurt": 1.07,
      Freiburg: 1.0,
      Ajax: 1.06,
      "PSV Eindhoven": 1.08,
      Feyenoord: 1.06,
      Rangers: 1.05,
      Celtic: 1.05,
      Fenerbahce: 1.04,
      Galatasaray: 1.05,
      Olympiacos: 1.0,
      "Shakhtar Donetsk": 0.98,
      "Dynamo Kyiv": 0.96,
      "Sporting CP": 1.1,
      Villarreal: 1.07,
    },
    gameweeks: [
      {
        id: 1,
        name: "League Phase Matchday 1",
        startDate: "2026-09-24",
        endDate: "2026-09-25",
        fixtures: [
          { date: "2026-09-24", time: "17:45", home: "Tottenham Hotspur", away: "Roma" },
          { date: "2026-09-24", time: "17:45", home: "Manchester United", away: "Real Betis" },
          { date: "2026-09-24", time: "20:00", home: "Porto", away: "Lyon" },
          { date: "2026-09-24", time: "20:00", home: "Marseille", away: "Ajax" },
          { date: "2026-09-25", time: "17:45", home: "Rangers", away: "Fenerbahce" },
          { date: "2026-09-25", time: "17:45", home: "Celtic", away: "Olympiacos" },
          { date: "2026-09-25", time: "20:00", home: "Sporting CP", away: "Eintracht Frankfurt" },
          { date: "2026-09-25", time: "20:00", home: "Villarreal", away: "Galatasaray" },
        ],
      },
    ],
    note: "Fixture draw pending. Replace these placeholder league-phase fixtures after UEFA publishes the draw.",
  },
  "conference-league": {
    label: "Conference League",
    eyebrow: "UEFA Conference League 2026/27",
    storageKey: "football-model-conference-league-v2",
    currentSeasonUrl: "",
    liveProvider: {
      oddsApiKeys: ["soccer_uefa_europa_conference_league"],
      apiFootballLeague: 848,
    },
    teams: [
      "Chelsea",
      "Fiorentina",
      "Real Betis",
      "Lille",
      "Nice",
      "Vitoria Guimaraes",
      "AZ Alkmaar",
      "Twente",
      "Gent",
      "Club Brugge",
      "Copenhagen",
      "Brondby",
      "Hearts",
      "Hibernian",
      "Panathinaikos",
      "PAOK",
      "Basel",
      "Young Boys",
      "Slavia Prague",
      "Sparta Prague",
      "Legia Warsaw",
      "Rapid Vienna",
      "Djurgarden",
      "Molde",
    ],
    priors: {
      Chelsea: 1.2,
      Fiorentina: 1.12,
      "Real Betis": 1.1,
      Lille: 1.08,
      Nice: 1.06,
      "Vitoria Guimaraes": 1.02,
      "AZ Alkmaar": 1.06,
      Twente: 1.03,
      Gent: 1.02,
      "Club Brugge": 1.07,
      Copenhagen: 1.04,
      Brondby: 0.98,
      Hearts: 0.94,
      Hibernian: 0.91,
      Panathinaikos: 1.0,
      PAOK: 1.01,
      Basel: 0.99,
      "Young Boys": 1.02,
      "Slavia Prague": 1.03,
      "Sparta Prague": 1.02,
      "Legia Warsaw": 0.98,
      "Rapid Vienna": 0.97,
      Djurgarden: 0.95,
      Molde: 0.96,
    },
    gameweeks: [
      {
        id: 1,
        name: "League Phase Matchday 1",
        startDate: "2026-10-01",
        endDate: "2026-10-01",
        fixtures: [
          { date: "2026-10-01", time: "17:45", home: "Chelsea", away: "Gent" },
          { date: "2026-10-01", time: "17:45", home: "Fiorentina", away: "Copenhagen" },
          { date: "2026-10-01", time: "17:45", home: "Lille", away: "Hearts" },
          { date: "2026-10-01", time: "17:45", home: "Nice", away: "Panathinaikos" },
          { date: "2026-10-01", time: "20:00", home: "AZ Alkmaar", away: "Basel" },
          { date: "2026-10-01", time: "20:00", home: "Club Brugge", away: "PAOK" },
          { date: "2026-10-01", time: "20:00", home: "Slavia Prague", away: "Molde" },
          { date: "2026-10-01", time: "20:00", home: "Vitoria Guimaraes", away: "Legia Warsaw" },
        ],
      },
    ],
    note: "Fixture draw pending. Replace these placeholder league-phase fixtures after UEFA publishes the draw.",
  },
};

let activeCompetitionId = localStorage.getItem("football-model-active-competition") || "spfl";
let activeView = localStorage.getItem("football-model-active-view") || "odds";
let state = createInitialState(activeCompetitionId);
let lineupRenderTimer;
let backtestCache = {};
let liveRefreshTimer;

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
  const bundled = bundledMatches(activeCompetitionId);
  if (bundled.length && (state.synthetic || state.source === "Fallback calibration")) {
    state.matches = bundled;
    state.source = "Bundled Football-Data CSV archive";
    state.synthetic = false;
  }
  if (!state.lineups || typeof state.lineups !== "object") state.lineups = {};
  if (!state.odds || typeof state.odds !== "object") state.odds = {};
  if (!state.live || typeof state.live !== "object") state.live = {};
  if (typeof state.synthetic !== "boolean") state.synthetic = state.source === "Fallback calibration" && !bundled.length;
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
          synthetic: true,
        });
      });
    });
  }
  return matches;
}

function realCompletedMatches() {
  return state.matches.filter((match) => !match.synthetic);
}

const DOMESTIC_BLEND_COMPETITIONS = ["premier-league", "ligue-1", "bundesliga", "la-liga", "serie-a", "primeira-liga", "spfl"];
const UEFA_BLEND_COMPETITIONS = new Set(["champions-league", "europa-league", "conference-league"]);

function domesticMatchPoolForTeams(teams) {
  const wanted = new Set(teams);
  return DOMESTIC_BLEND_COMPETITIONS.flatMap((competitionId) =>
    bundledMatches(competitionId)
      .filter((match) => wanted.has(match.home) || wanted.has(match.away))
      .map((match) => ({ ...match, sourceCompetition: competitionId })),
  );
}

function blendedModelMatches(modelMatches = state.matches) {
  if (!UEFA_BLEND_COMPETITIONS.has(activeCompetitionId)) return modelMatches;
  const europeanMatches = modelMatches.length ? modelMatches : buildFallbackMatches(activeCompetitionId);
  const domesticMatches = domesticMatchPoolForTeams(activeTeams());
  if (!domesticMatches.length) return europeanMatches.map((match) => ({ ...match, weight: 1 }));

  const effectiveSample = 1000;
  const europeanWeight = (effectiveSample * 0.7) / Math.max(1, europeanMatches.length);
  const domesticWeight = (effectiveSample * 0.3) / Math.max(1, domesticMatches.length);
  return [
    ...europeanMatches.map((match) => ({ ...match, weight: europeanWeight, modelSource: activeCompetitionId })),
    ...domesticMatches.map((match) => ({ ...match, weight: domesticWeight, modelSource: "domestic" })),
  ];
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
    const matchWeight = Number.isFinite(Number(match.weight)) ? Number(match.weight) : 1;
    const recency = (0.18 + (1 - 0.18) * Math.exp((-age * formWeight) / 190)) * matchWeight;

    totals.homeGoals += match.hg * matchWeight;
    totals.awayGoals += match.ag * matchWeight;
    totals.games += matchWeight;
    home.played += recency;
    away.played += recency;
    home.attackFor += match.hg * recency;
    home.attackAgainst += match.ag * recency;
    away.attackFor += match.ag * recency;
    away.attackAgainst += match.hg * recency;

    const homeResult = match.hg > match.ag ? 1 : match.hg === match.ag ? 0.5 : 0;
    const expectedHome = 1 / (1 + Math.pow(10, (away.elo - home.elo) / 400));
    const change = 20 * matchWeight * (Math.log(Math.abs(match.hg - match.ag) + 1) + 1) * (homeResult - expectedHome);
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

function blendProbabilities(modelValues, marketValues, weight = 0.22) {
  const marketTotal = marketValues.reduce((sum, value) => sum + value, 0);
  if (!marketTotal) return modelValues;
  const blended = modelValues.map((value, index) => value * (1 - weight) + (marketValues[index] / marketTotal) * weight);
  const total = blended.reduce((sum, value) => sum + value, 0) || 1;
  return blended.map((value) => value / total);
}

function predictFixture(fixture, modelMatches = state.matches, useLineups = true) {
  const preparedMatches = blendedModelMatches(modelMatches);
  const model = buildTeamModel(preparedMatches);
  const h = model.team[fixture.home] || { elo: 1500, attack: 1, defence: 1, form: 0 };
  const a = model.team[fixture.away] || { elo: 1500, attack: 1, defence: 1, form: 0 };
  const eloGap = (h.elo - a.elo) / 420;
  const formGap = (h.form - a.form) / 10;
  const homeLineup = useLineups ? lineupImpact(getLineup(fixture, "home")) : 1;
  const awayLineup = useLineups ? lineupImpact(getLineup(fixture, "away")) : 1;
  const h2h = headToHeadAdjustment(fixture.home, fixture.away, preparedMatches);
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
  const marketOdds = useLineups ? state.odds?.[fixtureKey(fixture)] : null;
  const market1x2 = marketOdds ? noVigProbabilities([marketOdds.home, marketOdds.draw, marketOdds.away]) : null;
  if (market1x2) {
    [homeWin, draw, awayWin] = blendProbabilities([homeWin, draw, awayWin], market1x2, 0.18);
  }

  const marketBtts = marketOdds ? noVigProbabilities([marketOdds.bttsYes, marketOdds.bttsNo]) : null;
  if (marketBtts) btts = clamp(btts * 0.82 + marketBtts[0] * 0.18, 0.08, 0.92);

  const marketGoals = marketOdds ? noVigProbabilities([marketOdds.over25, marketOdds.under25]) : null;
  if (marketGoals) {
    over25 = clamp(over25 * 0.82 + marketGoals[0] * 0.18, 0.08, 0.92);
    under25 = 1 - over25;
  }

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
  const completed = realCompletedMatches();
  if (completed.length < 80) return { sample: 0, oneXTwo: 0, brier: 0, btts: 0, ou25: 0, exact: 0, favorite: 0, valueBets: 0, valueRoi: 0 };
  const cacheKey = `${activeCompetitionId}:${completed.length}`;
  if (backtestCache[cacheKey]) return backtestCache[cacheKey];
  const ordered = [...completed]
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
            <label>${escapeHtml(p.home)} lineup<textarea data-lineup-side="home" rows="4" placeholder="Not yet available">${escapeHtml(getLineup(fixture, "home"))}</textarea></label>
            <label>${escapeHtml(p.away)} lineup<textarea data-lineup-side="away" rows="4" placeholder="Not yet available">${escapeHtml(getLineup(fixture, "away"))}</textarea></label>
          </div>
          <div class="confidence">Expected goals ${p.expected} &middot; Lineup strength ${p.lineupNote} &middot; Confidence ${pct(confidence)}</div>
        </article>
      `;
    })
    .join("");
  attachLineupListeners();
  attachOddsListeners();
}

function marketLabel(key) {
  return {
    home: "Home win",
    draw: "Draw",
    away: "Away win",
    bttsYes: "BTTS Yes",
    bttsNo: "BTTS No",
    over25: "Over 2.5",
    under25: "Under 2.5",
  }[key] || key;
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

function valueDashboardRows() {
  const week = getActiveGameweek();
  if (!week) return [];
  return week.fixtures
    .flatMap((fixture) => {
      const key = fixtureKey(fixture);
      const prediction = predictFixture(fixture);
      return bestBetRows(prediction, state.odds?.[key] || {}).map((row) => ({
        ...row,
        fixture,
        key,
        fixtureLabel: `${fixture.home} v ${fixture.away}`,
      }));
    })
    .filter((row) => row.ev >= MODEL_SETTINGS.edgeThreshold)
    .sort((a, b) => b.ev - a.ev)
    .slice(0, 8);
}

function oddsMovementRows() {
  const week = getActiveGameweek();
  if (!week) return [];
  return week.fixtures
    .flatMap((fixture) => {
      const key = fixtureKey(fixture);
      const movement = state.live?.[key]?.oddsMovement || {};
      return Object.entries(movement).map(([market, move]) => ({
        fixture,
        market,
        from: move.from,
        to: move.to,
        change: move.change,
        pctChange: move.pctChange,
        updatedAt: move.updatedAt,
      }));
    })
    .sort((a, b) => Math.abs(b.pctChange || 0) - Math.abs(a.pctChange || 0))
    .slice(0, 8);
}

function renderOddsDashboard() {
  const panel = el("oddsDashboard");
  const week = getActiveGameweek();
  const valueRows = valueDashboardRows();
  const movementRows = oddsMovementRows();
  const liveFixtures = week?.fixtures.filter((fixture) => {
    const key = fixtureKey(fixture);
    return state.live?.[key]?.oddsUpdatedAt || Object.keys(state.odds?.[key] || {}).length;
  }).length || 0;
  const backtest = predictionBacktest();

  panel.innerHTML = `
    <div class="odds-hero">
      <div>
        <span>Centre dashboard</span>
        <strong>${week ? week.name : "Upcoming game week"}</strong>
        <em>${liveFixtures} fixtures with odds data - ${backtest.sample ? `${pct(backtest.oneXTwo)} rolling 1X2 hit rate` : "backtest pending"}</em>
      </div>
      <div class="odds-hero__stat">
        <span>Best edge</span>
        <strong>${valueRows[0] ? `${(valueRows[0].ev * 100).toFixed(1)}%` : "Not yet available"}</strong>
      </div>
    </div>
    <div class="dashboard-grid">
      <section class="dashboard-card dashboard-card--large">
        <div class="dashboard-title">
          <span>Best Value Bets</span>
          <strong>${valueRows.length ? `${valueRows.length} model edges` : "Not yet available"}</strong>
        </div>
        ${
          valueRows.length
            ? `<div class="dashboard-list">${valueRows.map((row) => `
                <div class="dashboard-row">
                  <div><strong>${escapeHtml(row.fixtureLabel)}</strong><span>${escapeHtml(row.label)} - ${marketLabel(row.key)}</span></div>
                  <b>${decimal(row.odds)}</b>
                  <em>Model ${pct(row.probability)} / EV ${(row.ev * 100).toFixed(1)}% / Stake ${(row.stake * 100).toFixed(1)}%</em>
                </div>
              `).join("")}</div>`
            : `<div class="empty empty--inline">Live bookmaker odds not yet available.</div>`
        }
      </section>
      <section class="dashboard-card">
        <div class="dashboard-title">
          <span>Biggest Price Movements</span>
          <strong>${movementRows.length ? `${movementRows.length} tracked moves` : "Not yet available"}</strong>
        </div>
        ${
          movementRows.length
            ? `<div class="dashboard-list">${movementRows.map((row) => `
                <div class="dashboard-row dashboard-row--compact">
                  <div><strong>${escapeHtml(row.fixture.home)} v ${escapeHtml(row.fixture.away)}</strong><span>${marketLabel(row.market)}</span></div>
                  <b>${decimal(row.from)} -> ${decimal(row.to)}</b>
                  <em>${row.change > 0 ? "Drift" : "Shortened"} ${(Math.abs(row.pctChange) * 100).toFixed(1)}%</em>
                </div>
              `).join("")}</div>`
            : `<div class="empty empty--inline">Needs two live odds refreshes to show movement.</div>`
        }
      </section>
      <section class="dashboard-card">
        <div class="dashboard-title">
          <span>Model Accuracy</span>
          <strong>${backtest.sample ? `${pct(backtest.oneXTwo)} 1X2` : "Not enough data"}</strong>
        </div>
        <div class="mini-metrics">
          <div><span>BTTS</span><strong>${backtest.sample ? pct(backtest.btts) : "-"}</strong></div>
          <div><span>O/U 2.5</span><strong>${backtest.sample ? pct(backtest.ou25) : "-"}</strong></div>
          <div><span>Exact</span><strong>${backtest.sample ? pct(backtest.exact) : "-"}</strong></div>
          <div><span>ROI</span><strong>${backtest.sample ? `${(backtest.valueRoi * 100).toFixed(1)}%` : "-"}</strong></div>
        </div>
      </section>
    </div>
  `;
}

function renderValueSummary(key, prediction) {
  const odds = state.odds?.[key] || {};
  const rows = bestBetRows(prediction, odds);
  const best = rows[0];
  if (!best) return '<div class="value-summary muted">Live bookmaker odds not yet available.</div>';
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
  const realMatchCount = realCompletedMatches().length;
  const week = getActiveGameweek();
  const backtest = predictionBacktest();
  el("competitionEyebrow").textContent = config.eyebrow;
  el("dataStatus").textContent = realMatchCount > 250 ? "Model loaded" : realMatchCount ? "Building record" : "Calibration only";
  const blendNote = UEFA_BLEND_COMPETITIONS.has(activeCompetitionId) ? " - 70/30 Europe/domestic blend" : "";
  el("modelStamp").textContent = realMatchCount
    ? `${realMatchCount} real results - ${week?.fixtures.length || 0} fixtures - ${backtest.sample} backtested${blendNote}`
    : `${week?.fixtures.length || 0} fixtures - historical record pending${blendNote}`;
  el("activeWeekTitle").textContent = `${config.label} - ${week ? week.name : "Upcoming Game Week"}`;
  el("activeWeekSubtitle").textContent = week
    ? `${formatFixtureDate({ date: week.startDate })} to ${formatFixtureDate({ date: week.endDate })}`
    : "Predicted scores, markets, and lineup notes";
  el("autoUpdateStamp").textContent = config.currentSeasonUrl ? "Checking on open" : "Fixture draw pending";
  document.querySelectorAll(".competition-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.competition === activeCompetitionId);
  });
}

function renderView() {
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === activeView);
  });
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.classList.toggle("view-panel--active", panel.id === `${activeView}Dashboard` || panel.id === `${activeView}View`);
  });
}

function switchView(view) {
  activeView = view;
  localStorage.setItem("football-model-active-view", activeView);
  renderView();
}

function renderAll() {
  renderChrome();
  renderView();
  renderOddsDashboard();
  renderBacktest();
  renderBacktestDetails();
  renderPredictions();
}

function renderBacktest() {
  const backtest = predictionBacktest();
  if (!backtest.sample) {
    el("backtestPanel").innerHTML = `
      <div class="backtest-card">
        <span>Backtest</span>
        <strong>Building historical record</strong>
        <em>This page starts once at least 80 real completed matches are available for this competition.</em>
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

function historicalPredictionRows(limit = 30) {
  const completed = realCompletedMatches();
  if (completed.length < 80) return [];
  const teams = activeTeams();
  const ordered = [...completed]
    .filter((match) => teams.includes(match.home) && teams.includes(match.away))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const warmup = Math.min(420, Math.floor(ordered.length * 0.55));
  return ordered.slice(warmup).slice(-limit).map((match, index, sample) => {
    const matchIndex = ordered.indexOf(match);
    const prior = ordered.slice(0, matchIndex);
    const prediction = predictFixture({ date: match.date, home: match.home, away: match.away }, prior, false);
    const actual = match.hg > match.ag ? "H" : match.hg === match.ag ? "D" : "A";
    const pick = prediction.homeWin > prediction.draw && prediction.homeWin > prediction.awayWin ? "H" : prediction.draw > prediction.awayWin ? "D" : "A";
    const pickLabel = pick === "H" ? match.home : pick === "A" ? match.away : "Draw";
    const bttsWon = (match.hg > 0 && match.ag > 0) === prediction.btts.label.endsWith("Yes");
    const goalsWon = (match.hg + match.ag > 2.5) === prediction.goals.label.startsWith("Over");
    return {
      id: `${match.date}-${match.home}-${match.away}-${index}-${sample.length}`,
      date: match.date,
      fixture: `${match.home} v ${match.away}`,
      score: `${match.hg}-${match.ag}`,
      pickLabel,
      won: pick === actual,
      btts: prediction.btts.label,
      bttsWon,
      goals: prediction.goals.label,
      goalsWon,
      predictedScore: prediction.score,
    };
  }).reverse();
}

function renderBacktestDetails() {
  const panel = el("backtestDetails");
  const rows = historicalPredictionRows(36);
  if (!rows.length) {
    panel.innerHTML = `
      <div class="backtest-history">
        <div class="empty empty--inline">No settled prediction history yet. This will update automatically once enough real completed matches are available.</div>
      </div>
    `;
    return;
  }
  const oneXTwoHit = rows.filter((row) => row.won).length / rows.length;
  const bttsHit = rows.filter((row) => row.bttsWon).length / rows.length;
  const goalsHit = rows.filter((row) => row.goalsWon).length / rows.length;
  panel.innerHTML = `
    <section class="backtest-history">
      <div class="history-summary">
        <div><span>Shown sample</span><strong>${rows.length} matches</strong></div>
        <div><span>Winner accuracy</span><strong>${pct(oneXTwoHit)}</strong></div>
        <div><span>BTTS accuracy</span><strong>${pct(bttsHit)}</strong></div>
        <div><span>O/U 2.5 accuracy</span><strong>${pct(goalsHit)}</strong></div>
      </div>
      <div class="history-table">
        <div class="history-row history-row--head">
          <span>Match</span><span>Prediction</span><span>Actual</span><span>Markets</span>
        </div>
        ${rows.map((row) => `
          <div class="history-row">
            <span><strong>${escapeHtml(row.fixture)}</strong><em>${formatFixtureDate({ date: row.date })}</em></span>
            <span><strong>${escapeHtml(row.pickLabel)}</strong><em>Score ${escapeHtml(row.predictedScore)}</em></span>
            <span><strong>${escapeHtml(row.score)}</strong><em class="${row.won ? "hit" : "miss"}">${row.won ? "Winner hit" : "Winner missed"}</em></span>
            <span><em class="${row.bttsWon ? "hit" : "miss"}">${escapeHtml(row.btts)}</em><em class="${row.goalsWon ? "hit" : "miss"}">${escapeHtml(row.goals)}</em></span>
          </div>
        `).join("")}
      </div>
    </section>
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
      renderAll();
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
    const previousOdds = { ...state.odds[key] };
    const movement = {};
    ["home", "draw", "away", "bttsYes", "bttsNo", "over25", "under25"].forEach((market) => {
      const nextPrice = Number(game.odds[market]);
      const previousPrice = Number(previousOdds[market]);
      if (Number.isFinite(nextPrice) && nextPrice > 1) {
        if (Number.isFinite(previousPrice) && previousPrice > 1 && Math.abs(previousPrice - nextPrice) >= 0.01) {
          movement[market] = {
            from: previousPrice,
            to: nextPrice,
            change: nextPrice - previousPrice,
            pctChange: (nextPrice - previousPrice) / previousPrice,
            updatedAt: game.oddsUpdatedAt || new Date().toISOString(),
          };
        }
        state.odds[key][market] = nextPrice;
      }
    });
    if (Object.keys(movement).length) state.live[key].oddsMovement = { ...(state.live[key].oddsMovement || {}), ...movement };
    state.live[key].previousOdds = previousOdds;
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
    el("liveDataStamp").textContent = "No available data yet";
    el("liveDataSummary").textContent = "No live data yet";
    console.warn("Live data refresh failed", error);
  }
  renderAll();
}

function startLiveDataMonitor() {
  if (liveRefreshTimer) clearInterval(liveRefreshTimer);
  liveRefreshTimer = setInterval(() => {
    if (document.hidden) return;
    refreshLiveData();
  }, 5 * 60 * 1000);
  if (document.addEventListener) document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshLiveData();
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
  document.querySelectorAll(".competition-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchCompetition(tab.dataset.competition));
  });
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });
  refreshCurrentSeasonResults();
  refreshLiveData();
  startLiveDataMonitor();
}

init();
