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
        id: 0,
        name: "First Qualifying Round - First Legs",
        startDate: "2026-07-08",
        endDate: "2026-07-08",
        fixtures: [
          { date: "2026-07-08", time: "16:00", home: "Kairat", away: "Sutjeska Niksic" },
          { date: "2026-07-08", time: "17:00", home: "Tallinna Flora", away: "Iberia 1999" },
          { date: "2026-07-08", time: "18:00", home: "Petrocub Hincesti", away: "Egnatia Rrogozhine" },
          { date: "2026-07-08", time: "18:00", home: "Maxline Vitebsk", away: "Universitatea Craiova" },
        ],
      },
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
    note: "Qualification fixtures are pulled from the live provider so the exact UEFA draw is used.",
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
        id: 0,
        name: "First Qualifying Round - Live Fixtures",
        startDate: "2026-07-09",
        endDate: "2026-07-09",
        fixtures: [],
      },
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
    note: "Qualification fixtures are pulled from the live provider so the exact UEFA draw is used.",
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
        id: 0,
        name: "First Qualifying Round - Live Fixtures",
        startDate: "2026-07-09",
        endDate: "2026-07-09",
        fixtures: [],
      },
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
    note: "Qualification fixtures are pulled from the live provider so the exact UEFA draw is used.",
  },
};

let activeCompetitionId = localStorage.getItem("football-model-active-competition") || "spfl";
let hasSelectedCompetition = localStorage.getItem("football-model-has-selected-competition") === "true";
let activePage = "home";
let activeView = localStorage.getItem("football-model-active-view-v2") || "performance";
let state;
let lineupRenderTimer;
let backtestCache = {};
let performanceSummaryCache = null;
let liveRefreshTimer;

const el = (id) => document.getElementById(id);
const TODAYS_MATCHES_ID = "todays-matches";
const todayDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const competitionIds = () => Object.keys(COMPETITIONS);
function fixturesForDate(date) {
  return competitionIds().flatMap((competitionId) =>
    COMPETITIONS[competitionId].gameweeks.flatMap((week) =>
      week.fixtures
        .filter((fixture) => fixture.date === date)
        .map((fixture) => ({
          ...fixture,
          competitionId,
          competitionLabel: COMPETITIONS[competitionId].label,
          sourceWeek: week.name,
        })),
    ),
  );
}

function todayCompetitionConfig() {
  const today = todayDateString();
  const fixtures = fixturesForDate(today).sort((a, b) => String(a.time || "").localeCompare(String(b.time || "")));
  const teams = [...new Set(fixtures.flatMap((fixture) => [fixture.home, fixture.away]))];
  return {
    label: "Today's Matches",
    eyebrow: "All competitions today",
    storageKey: "football-model-todays-matches-v2",
    currentSeasonUrl: "",
    liveProvider: null,
    teams,
    priors: {},
    gameweeks: [
      {
        id: 1,
        name: "Today's Matches",
        startDate: today,
        endDate: today,
        fixtures,
      },
    ],
    note: "Combined view of fixtures scheduled today across every competition.",
  };
}

const activeConfig = () => (activeCompetitionId === TODAYS_MATCHES_ID ? todayCompetitionConfig() : COMPETITIONS[activeCompetitionId]);
const activeTeams = () => activeConfig().teams;
const performanceCompetitionIds = () => competitionIds().filter((id) => bundledMatches(id).filter((match) => !match.synthetic).length >= 80);

if (!COMPETITIONS[activeCompetitionId] && activeCompetitionId !== TODAYS_MATCHES_ID) activeCompetitionId = "spfl";
state = createInitialState(activeCompetitionId);

function normalizeTeam(name) {
  const clean = String(name || "").trim();
  return TEAM_ALIASES.get(clean) || clean;
}

function cloneGameweeks(competitionId) {
  const config = competitionId === TODAYS_MATCHES_ID ? todayCompetitionConfig() : COMPETITIONS[competitionId];
  return config.gameweeks.map((week) => ({
    ...week,
    fixtures: week.fixtures.map((fixture) => ({ ...fixture })),
  }));
}

function bundledMatches(competitionId) {
  if (competitionId === TODAYS_MATCHES_ID) return [];
  return window.COMPETITION_BUNDLED_MATCHES?.[competitionId] || window.SPFL_BUNDLED_MATCHES || [];
}

function createInitialState(competitionId) {
  const config = competitionId === TODAYS_MATCHES_ID ? todayCompetitionConfig() : COMPETITIONS[competitionId] || COMPETITIONS.spfl;
  const matches = competitionId === TODAYS_MATCHES_ID ? [] : bundledMatches(competitionId);
  return {
    matches: matches.length ? matches : buildFallbackMatches(competitionId),
    gameweeks: cloneGameweeks(competitionId),
    currentGameweek: 0,
    lineups: {},
    odds: {},
    sourceLinks: {},
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

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x || 1;
}

function decimalToFractional(value) {
  const decimalOdds = Number(value);
  if (!Number.isFinite(decimalOdds) || decimalOdds <= 1) return "Odds pending";
  const profit = decimalOdds - 1;
  const denominator = 100;
  const numerator = Math.round(profit * denominator);
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
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

function poissonOverProbability(lambda, line) {
  let underOrEqual = 0;
  for (let goals = 0; goals <= Math.floor(line); goals += 1) {
    underOrEqual += poisson(lambda, goals);
  }
  return clamp(1 - underOrEqual, 0.01, 0.99);
}

function bestOverUnderLine(lines, probabilityForOver, labelSuffix = "") {
  return lines
    .flatMap((line) => {
      const over = clamp(probabilityForOver(line), 0.01, 0.99);
      return [
        { label: `Over ${line}${labelSuffix}`, value: over, line, side: "over" },
        { label: `Under ${line}${labelSuffix}`, value: 1 - over, line, side: "under" },
      ];
    })
    .sort((a, b) => b.value - a.value)[0];
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
  return fixture.time ? `${day}, ${fixture.time} UK` : day;
}

function formatUpdateTime(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return "Not yet updated";
  return date.toLocaleString("en-GB", {
    timeZone: "Europe/London",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function predictionUpdatedAt(key) {
  const live = state.live?.[key] || {};
  const dates = [
    state.updatedAt,
    live.oddsUpdatedAt,
    live.lineupsUpdatedAt,
    live.xgUpdatedAt,
  ]
    .map((value) => (value ? new Date(value).getTime() : NaN))
    .filter(Number.isFinite);
  return dates.length ? new Date(Math.max(...dates)).toISOString() : "";
}

function overUnderWon(label, total) {
  const match = String(label || "").match(/^(Over|Under)\s+([0-9.]+)/i);
  if (!match) return false;
  const line = Number(match[2]);
  return match[1].toLowerCase() === "over" ? total > line : total < line;
}

function fixtureKey(fixture) {
  return [fixture.competitionId || activeCompetitionId, fixture.date || "tbc", fixture.home, fixture.away].join("|");
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

function getSourceLinks(fixture) {
  return state.sourceLinks?.[fixtureKey(fixture)] || {};
}

function safeSourceUrl(value) {
  const text = String(value || "").trim();
  return /^https?:\/\//i.test(text) ? text : "";
}

function regexEscape(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findFixtureByKey(key) {
  for (const week of state.gameweeks || []) {
    for (const fixture of week.fixtures || []) {
      if (fixtureKey(fixture) === key) return fixture;
    }
  }
  return null;
}

function extractDecimalNear(text, labels) {
  const source = String(text || "");
  const parsePrice = (value) => {
    const raw = String(value || "").trim();
    const fraction = raw.match(/^(\d{1,3})\/(\d{1,3})$/);
    if (fraction) {
      const top = Number(fraction[1]);
      const bottom = Number(fraction[2]);
      return bottom > 0 ? 1 + top / bottom : null;
    }
    return Number(raw);
  };
  for (const label of labels.filter(Boolean)) {
    const escaped = regexEscape(label);
    const pricePattern = "(\\d{1,3}\\/\\d{1,3}|[1-9][0-9]?(?:\\.\\d{1,3})?)";
    const after = source.match(new RegExp(`${escaped}[^0-9/]{0,40}${pricePattern}`, "i"));
    if (after) return parsePrice(after[1]);
    const before = source.match(new RegExp(`${pricePattern}[^A-Za-z0-9/]{0,24}${escaped}`, "i"));
    if (before) return parsePrice(before[1]);
  }
  return null;
}

function oddsFromResearchNotes(text, fixture) {
  if (!fixture) return {};
  const markets = [
    { key: "home", labels: [fixture.home, "home win", "home"] },
    { key: "draw", labels: ["draw", "x"] },
    { key: "away", labels: [fixture.away, "away win", "away"] },
    { key: "bttsYes", labels: ["BTTS Yes", "Both Teams To Score Yes", "Both Teams To Score - Yes"] },
    { key: "bttsNo", labels: ["BTTS No", "Both Teams To Score No", "Both Teams To Score - No"] },
    { key: "over25", labels: ["Over 2.5", "O 2.5", "Over 2.5 goals"] },
    { key: "under25", labels: ["Under 2.5", "U 2.5", "Under 2.5 goals"] },
    { key: "cornersOver95", labels: ["Over 9.5 corners", "Corners Over 9.5"] },
    { key: "cornersUnder95", labels: ["Under 9.5 corners", "Corners Under 9.5"] },
  ];
  return markets.reduce((parsed, market) => {
    const value = extractDecimalNear(text, market.labels);
    if (Number.isFinite(value) && value > 1) parsed[market.key] = value;
    return parsed;
  }, {});
}

function hasStatsSignal(text) {
  return /corner|set piece|cross|wing|wide|pressure|shot volume|xg|expected goals|shots|cards|fouls|possession/i.test(String(text || ""));
}

async function scanSourceUrl(url) {
  const safeUrl = safeSourceUrl(url);
  if (!safeUrl) return { ok: false, text: "", error: "No URL" };
  try {
    const response = await fetch(`/api/source-scan?url=${encodeURIComponent(safeUrl)}`, { cache: "no-store" });
    if (!response.ok) return { ok: false, text: "", error: `HTTP ${response.status}` };
    return response.json();
  } catch {
    return { ok: false, text: "", error: "Source scan unavailable" };
  }
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

function liveGameBelongsInWeek(game, week) {
  if (!game.date || !week) return false;
  const gameDate = parseDate(game.date);
  const start = parseDate(week.startDate || game.date);
  const end = parseDate(week.endDate || week.startDate || game.date);
  if (!gameDate || !start || !end) return false;
  return gameDate >= start && gameDate <= end;
}

function addFixtureFromLiveGame(game) {
  const week = getActiveGameweek();
  if (!liveGameBelongsInWeek(game, week)) return null;
  const duplicate = week.fixtures.find((fixture) => teamMatch(fixture.home, game.home) && teamMatch(fixture.away, game.away));
  if (duplicate) return duplicate;
  const fixture = {
    date: game.date,
    time: game.time || "TBC",
    home: game.home,
    away: game.away,
    competitionId: activeCompetitionId === TODAYS_MATCHES_ID ? game.competitionId : activeCompetitionId,
    competitionLabel: activeCompetitionId === TODAYS_MATCHES_ID && game.competitionId ? COMPETITIONS[game.competitionId]?.label : undefined,
    sourceWeek: "Live provider",
  };
  week.fixtures.push(fixture);
  return fixture;
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
  if (!state.sourceLinks || typeof state.sourceLinks !== "object") state.sourceLinks = {};
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
  const teams = (competitionId === TODAYS_MATCHES_ID ? todayCompetitionConfig() : COMPETITIONS[competitionId]).teams;
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
  const teamSpecific = DOMESTIC_BLEND_COMPETITIONS.flatMap((competitionId) =>
    bundledMatches(competitionId)
      .filter((match) => wanted.has(match.home) || wanted.has(match.away))
      .map((match) => ({ ...match, sourceCompetition: competitionId })),
  );
  if (teamSpecific.length) return teamSpecific;
  return DOMESTIC_BLEND_COMPETITIONS.flatMap((competitionId) =>
    bundledMatches(competitionId)
      .slice(-220)
      .map((match) => ({ ...match, sourceCompetition: competitionId, genericDomestic: true })),
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
  if (activeCompetitionId === TODAYS_MATCHES_ID) {
    state = createInitialState(activeCompetitionId);
    normaliseStateShape();
    return;
  }
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
  let bestScore = { home: 0, away: 0, value: 0 };

  for (let hg = 0; hg <= 8; hg += 1) {
    for (let ag = 0; ag <= 8; ag += 1) {
      const p = poisson(homeLambda, hg) * poisson(awayLambda, ag);
      if (hg > ag) homeWin += p;
      if (hg === ag) draw += p;
      if (ag > hg) awayWin += p;
      if (hg > 0 && ag > 0) btts += p;
      if (hg + ag > 2.5) over25 += p;
      if (p > bestScore.value) bestScore = { home: hg, away: ag, value: p };
    }
  }
  let goalLineOffset = 0;

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
    goalLineOffset = clamp(marketGoals[0] - over25, -0.18, 0.18);
    over25 = clamp(over25 * 0.82 + marketGoals[0] * 0.18, 0.08, 0.92);
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
  const totalExpectedGoals = homeLambda + awayLambda;
  const goals = bestOverUnderLine([2.5, 3.5], (line) => {
    if (line === 2.5) return over25;
    return clamp(poissonOverProbability(totalExpectedGoals, line) + goalLineOffset, 0.04, 0.96);
  });
  const tempo = clamp((totalExpectedGoals - 2.15) / 2.2, -0.22, 0.28);
  const pressureGap = Math.abs(homeWin - awayWin);
  let cornersOver95 = clamp(0.49 + tempo + pressureGap * 0.1 + Math.abs(formGap) * 0.35, 0.28, 0.76);
  const marketCorners = marketOdds ? noVigProbabilities([marketOdds.cornersOver95, marketOdds.cornersUnder95]) : null;
  const sourceNotes = String(state.sourceLinks?.[fixtureKey(fixture)]?.notes || "");
  const scannedStats = String(state.sourceLinks?.[fixtureKey(fixture)]?.statsSignal || "");
  const hasCornerResearch = /corner|set piece|cross|wing|wide|pressure|shot volume/i.test(`${sourceNotes} ${scannedStats}`);
  let cornerLineOffset = 0;
  if (marketCorners) cornersOver95 = clamp(cornersOver95 * 0.78 + marketCorners[0] * 0.22, 0.18, 0.86);
  if (marketCorners) cornerLineOffset = clamp(marketCorners[0] - cornersOver95, -0.14, 0.14);
  const expectedCorners = clamp(8.6 + totalExpectedGoals * 0.42 + pressureGap * 1.4 + Math.abs(formGap) * 2.8, 6.6, 12.9);
  const corners = marketCorners || hasCornerResearch
    ? bestOverUnderLine([8.5, 9.5, 10.5], (line) => {
        if (line === 9.5) return cornersOver95;
        return clamp(poissonOverProbability(expectedCorners, line) + cornerLineOffset, 0.08, 0.92);
      }, " corners")
    : { label: "Not yet available", value: 0 };
  const scorerSide = homeLambda >= awayLambda ? "home" : "away";
  const bookedSide = h.form < a.form ? "home" : "away";
  const fouledSide = homeLambda >= awayLambda ? "home" : "away";
  const likelyScorer = playerCandidate(fixture, scorerSide, "scorer");
  const likelyBooked = playerCandidate(fixture, bookedSide, "booked");
  const likelyFouled = playerCandidate(fixture, fouledSide, "fouled");
  const likelyShots = playerCandidate(fixture, scorerSide, "shots");
  const likelySot = playerCandidate(fixture, scorerSide, "sot");
  const scorerBase = scorerSide === "home" ? homeLambda : awayLambda;
  const playerScorerProbability = likelyScorer ? clamp(0.18 + scorerBase * 0.12, 0.16, 0.48) : 0;
  const playerBookedProbability = likelyBooked ? clamp(0.22 + pressureGap * 0.18 + Math.max(0, totalExpectedGoals - 2.4) * 0.04, 0.18, 0.52) : 0;
  const playerFouledExpected = clamp(1.35 + scorerBase * 0.34 + Math.max(0, btts - 0.5) * 0.7, 0.6, 3.4);
  const playerShotsExpected = clamp(1.65 + scorerBase * 0.82 + Math.max(0, over25 - 0.5) * 0.9, 0.7, 4.8);
  const playerSotExpected = clamp(0.56 + scorerBase * 0.34 + Math.max(0, over25 - 0.5) * 0.3, 0.22, 2.4);
  const fouledMarket = thresholdMarket(likelyFouled, "fouled", playerFouledExpected, [1, 2, 3], "playerFouled");
  const shotsMarket = thresholdMarket(likelyShots, "shots", playerShotsExpected, [1, 2, 3, 4], "playerShots");
  const sotMarket = thresholdMarket(likelySot, "shots on target", playerSotExpected, [1, 2, 3], "playerSot");

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
    corners,
    playerMarkets: {
      scorer: likelyScorer ? { label: `${likelyScorer} to score`, value: playerScorerProbability } : { label: "Not yet available", value: 0 },
      booked: likelyBooked ? { label: `${likelyBooked} to be booked`, value: playerBookedProbability } : { label: "Not yet available", value: 0 },
      fouled: fouledMarket,
      shots: shotsMarket,
      sot: sotMarket,
    },
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
    if (overUnderWon(p.goals.label, match.hg + match.ag)) ou25 += 1;
    if (p.score === `${match.hg}-${match.ag}`) exact += 1;
    if (match.odds) {
      const bestValue = bestBetRows(p, match.odds).find((row) => row.ev >= MODEL_SETTINGS.edgeThreshold);
      if (bestValue) {
        valueBets += 1;
        const won =
          (bestValue.key === "home" && actual === "H") ||
          (bestValue.key === "draw" && actual === "D") ||
          (bestValue.key === "away" && actual === "A") ||
          (bestValue.key === "goalsDynamic" && overUnderWon(bestValue.label, match.hg + match.ag));
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

function withCompetition(competitionId, callback) {
  const previousCompetition = activeCompetitionId;
  const previousState = state;
  try {
    activeCompetitionId = competitionId;
    state = createInitialState(competitionId);
    normaliseStateShape();
    return callback();
  } finally {
    activeCompetitionId = previousCompetition;
    state = previousState;
  }
}

function competitionBacktestSummary(competitionId) {
  return withCompetition(competitionId, () => {
    const matches = realCompletedMatches().sort((a, b) => String(a.date).localeCompare(String(b.date)));
    const backtest = predictionBacktest();
    return {
      id: competitionId,
      label: activeConfig().label,
      matches: matches.length,
      sample: backtest.sample,
      start: matches[0]?.date || "",
      end: matches.at(-1)?.date || "",
      oneXTwo: backtest.oneXTwo || 0,
      btts: backtest.btts || 0,
      ou25: backtest.ou25 || 0,
      exact: backtest.exact || 0,
      brier: backtest.brier || 0,
      valueRoi: backtest.valueRoi || 0,
    };
  });
}

function allPerformanceSummaries() {
  const key = performanceCompetitionIds().map((id) => `${id}:${bundledMatches(id).length}`).join("|");
  if (performanceSummaryCache?.key === key) return performanceSummaryCache.rows;
  const rows = performanceCompetitionIds().map(competitionBacktestSummary);
  performanceSummaryCache = { key, rows };
  return rows;
}

function activeCompetitionTrend(limit = 360) {
  const completed = realCompletedMatches()
    .filter((match) => activeTeams().includes(match.home) && activeTeams().includes(match.away))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  if (completed.length < 120) return [];
  const warmup = Math.min(420, Math.floor(completed.length * 0.55));
  const tested = completed.slice(warmup).slice(-limit);
  const buckets = new Map();
  tested.forEach((match) => {
    const matchIndex = completed.indexOf(match);
    const prediction = predictFixture({ date: match.date, home: match.home, away: match.away }, completed.slice(0, matchIndex), false);
    const actual = match.hg > match.ag ? "H" : match.hg === match.ag ? "D" : "A";
    const predicted = prediction.homeWin > prediction.draw && prediction.homeWin > prediction.awayWin ? "H" : prediction.draw > prediction.awayWin ? "D" : "A";
    const season = match.season || String(match.date).slice(0, 4);
    if (!buckets.has(season)) buckets.set(season, { season, tested: 0, wins: 0, btts: 0, ou25: 0 });
    const bucket = buckets.get(season);
    bucket.tested += 1;
    if (actual === predicted) bucket.wins += 1;
    if ((match.hg > 0 && match.ag > 0) === prediction.btts.label.endsWith("Yes")) bucket.btts += 1;
    if (overUnderWon(prediction.goals.label, match.hg + match.ag)) bucket.ou25 += 1;
  });
  return [...buckets.values()].filter((row) => row.tested >= 10).slice(-6);
}

function renderPredictions() {
  const grid = el("predictionGrid");
  const week = getActiveGameweek();
  if (!week || !week.fixtures.length) {
    const message = UEFA_BLEND_COMPETITIONS.has(activeCompetitionId) || activeCompetitionId === TODAYS_MATCHES_ID
      ? "Exact fixtures will appear here as soon as the live provider publishes them for this round/date."
      : "Add fixtures to this game week to generate predictions.";
    grid.innerHTML = `<div class="empty">${message}</div>`;
    return;
  }

  grid.innerHTML = week.fixtures
    .map((fixture) => {
      const key = fixtureKey(fixture);
      const p = predictFixture(fixture);
      const odds = state.odds?.[key] || {};
      const live = state.live?.[key] || {};
      const sources = getSourceLinks(fixture);
      const sourceButtons = [
        ["Lineups", sources.lineups],
        ["Odds", sources.odds],
        ["Stats", sources.stats],
      ]
        .map(([label, url]) => ({ label, url: safeSourceUrl(url) }))
        .filter((item) => item.url);
      const confidence = Math.max(p.winner.value, p.doubleChance.value, p.btts.value, p.goals.value);
      const result = fixtureResult(fixture);
      const competitionLabel = fixture.competitionLabel ? `${escapeHtml(fixture.competitionLabel)} &middot; ` : "";
      const resultLabel = result ? `Result ${result.hg}-${result.ag}` : formatFixtureDate(fixture);
      const updatedValue = predictionUpdatedAt(key);
      const updatedLabel = updatedValue ? `${formatUpdateTime(updatedValue)} UK` : "Not yet updated";
      return `
        <article class="card fixture-card" data-fixture-key="${escapeHtml(key)}">
          <details class="fixture-details">
            <summary class="fixture-summary">
              <div>
                <span>${competitionLabel}${escapeHtml(week.name)} &middot; ${resultLabel}</span>
                <strong>${escapeHtml(p.home)} v ${escapeHtml(p.away)}</strong>
              </div>
              <b>${p.score}</b>
            </summary>
            <div class="fixture-body">
              <div class="prediction-updated">
                <span>Prediction last updated</span>
                <strong>${escapeHtml(updatedLabel)}</strong>
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
            <div class="market"><span>Most likely goals line</span><strong>${p.goals.label} ${pct(p.goals.value)}</strong></div>
            <div class="market"><span>Most likely corners line</span><strong>${p.corners.label}${p.corners.value ? ` ${pct(p.corners.value)}` : ""}</strong></div>
            <div class="market"><span>Player booked</span><strong>${escapeHtml(p.playerMarkets.booked.label)}${p.playerMarkets.booked.value ? ` ${pct(p.playerMarkets.booked.value)}` : ""}</strong></div>
            <div class="market"><span>Player fouled</span><strong>${escapeHtml(p.playerMarkets.fouled.label)}${p.playerMarkets.fouled.value ? ` ${pct(p.playerMarkets.fouled.value)}` : ""}</strong></div>
            <div class="market"><span>Player shots</span><strong>${escapeHtml(p.playerMarkets.shots.label)}${p.playerMarkets.shots.value ? ` ${pct(p.playerMarkets.shots.value)}` : ""}</strong></div>
            <div class="market"><span>Player shots on target</span><strong>${escapeHtml(p.playerMarkets.sot.label)}${p.playerMarkets.sot.value ? ` ${pct(p.playerMarkets.sot.value)}` : ""}</strong></div>
            <div class="market"><span>Player to score</span><strong>${escapeHtml(p.playerMarkets.scorer.label)}${p.playerMarkets.scorer.value ? ` ${pct(p.playerMarkets.scorer.value)}` : ""}</strong></div>
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
              <label>Over 9.5 corners<input data-odds-key="cornersOver95" type="number" step="0.01" min="1.01" placeholder="Over" value="${escapeHtml(odds.cornersOver95 || "")}"></label>
              <label>Under 9.5 corners<input data-odds-key="cornersUnder95" type="number" step="0.01" min="1.01" placeholder="Under" value="${escapeHtml(odds.cornersUnder95 || "")}"></label>
              <label>Booked player<input data-odds-key="playerBooked" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerBooked || "")}"></label>
              <label>Player 1+ fouled<input data-odds-key="playerFouled1" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerFouled1 || "")}"></label>
              <label>Player 2+ fouled<input data-odds-key="playerFouled2" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerFouled2 || "")}"></label>
              <label>Player 3+ fouled<input data-odds-key="playerFouled3" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerFouled3 || "")}"></label>
              <label>Player 1+ shots<input data-odds-key="playerShots1" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerShots1 || "")}"></label>
              <label>Player 2+ shots<input data-odds-key="playerShots2" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerShots2 || "")}"></label>
              <label>Player 3+ shots<input data-odds-key="playerShots3" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerShots3 || "")}"></label>
              <label>Player 4+ shots<input data-odds-key="playerShots4" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerShots4 || "")}"></label>
              <label>Player 1+ SOT<input data-odds-key="playerSot1" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerSot1 || "")}"></label>
              <label>Player 2+ SOT<input data-odds-key="playerSot2" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerSot2 || "")}"></label>
              <label>Player 3+ SOT<input data-odds-key="playerSot3" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerSot3 || "")}"></label>
              <label>Player to score<input data-odds-key="playerScorer" type="number" step="0.01" min="1.01" placeholder="Odds" value="${escapeHtml(odds.playerScorer || "")}"></label>
            </div>
            ${renderValueSummary(key, p)}
          </div>
          <div class="source-panel">
            <div class="odds-head">
              <span>Source links</span>
              <strong>Research inputs</strong>
            </div>
            <div class="source-grid">
              <label>Lineups URL<input data-source-key="lineups" type="url" placeholder="Paste lineup page" value="${escapeHtml(sources.lineups || "")}"></label>
              <label>Odds URL<input data-source-key="odds" type="url" placeholder="Paste bookmaker/exchange page" value="${escapeHtml(sources.odds || "")}"></label>
              <label>Stats URL<input data-source-key="stats" type="url" placeholder="Paste stats, xG, shots, corners, cards, or fouls page" value="${escapeHtml(sources.stats || "")}"></label>
            </div>
            <label class="source-notes">Research notes<textarea data-source-key="notes" rows="3" placeholder="Paste important notes: injuries, rotation, corners trend, player shots, fouls, bookmaker price notes">${escapeHtml(sources.notes || "")}</textarea></label>
            ${sources.scanStatus ? `<div class="source-status">${escapeHtml(sources.scanStatus)}</div>` : ""}
            ${sourceButtons.length ? `<div class="source-links">${sourceButtons.map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>`).join("")}</div>` : ""}
            <div class="source-actions">
              <button type="button" data-source-submit>Update prediction</button>
            </div>
          </div>
          ${renderLiveNotes(live, odds, sources)}
          <div class="lineup-editor">
            <label>${escapeHtml(p.home)} lineup<textarea data-lineup-side="home" rows="4" placeholder="Not yet available">${escapeHtml(getLineup(fixture, "home"))}</textarea></label>
            <label>${escapeHtml(p.away)} lineup<textarea data-lineup-side="away" rows="4" placeholder="Not yet available">${escapeHtml(getLineup(fixture, "away"))}</textarea></label>
          </div>
          <div class="confidence">Expected goals ${p.expected} &middot; Lineup strength ${p.lineupNote} &middot; Confidence ${pct(confidence)}</div>
            </div>
          </details>
        </article>
      `;
    })
    .join("");
  attachLineupListeners();
  attachOddsListeners();
  attachSourceLinkListeners();
}

function renderCompetitionList() {
  const list = el("competitionList");
  if (!list) return;
  list.innerHTML = competitionIds()
    .map((id) => {
      const config = COMPETITIONS[id];
      const matches = bundledMatches(id).filter((match) => !match.synthetic).length;
      const status = matches >= 80 ? `${matches.toLocaleString()} historical results` : "European blend model";
      return `
        <button class="competition-option ${id === activeCompetitionId ? "is-active" : ""}" type="button" data-competition="${id}">
          <strong>${escapeHtml(config.label)}</strong>
          <span>${status}</span>
        </button>
      `;
    })
    .join("");
  list.querySelectorAll("[data-competition]").forEach((button) => {
    button.addEventListener("click", () => {
      switchCompetition(button.dataset.competition);
      closeCompetitionDrawer();
    });
  });
}

function openCompetitionDrawer() {
  const drawer = el("competitionDrawer");
  if (!drawer) return;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCompetitionDrawer() {
  const drawer = el("competitionDrawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

function scrollToPageTop() {
  if (window.scrollTo) window.scrollTo({ top: 0, behavior: "auto" });
}

function renderPageVisibility() {
  if (el("homePage")) el("homePage").hidden = activePage !== "home";
  if (el("performancePage")) el("performancePage").hidden = activePage !== "performance";
  if (el("leagueWorkspace")) el("leagueWorkspace").hidden = activePage !== "league";
  if (el("appHeader")) el("appHeader").hidden = activePage === "home";
}

function showModelPerformanceOnly() {
  activePage = "performance";
  hasSelectedCompetition = false;
  localStorage.removeItem("football-model-has-selected-competition");
  switchView("performance");
  renderPageVisibility();
  closeCompetitionDrawer();
  scrollToPageTop();
}

function showTodaysMatches() {
  activeCompetitionId = TODAYS_MATCHES_ID;
  activePage = "league";
  hasSelectedCompetition = true;
  activeView = "odds";
  localStorage.setItem("football-model-active-view-v2", activeView);
  loadState();
  populateTeamControls();
  renderAll();
  refreshLiveData();
  closeCompetitionDrawer();
  scrollToPageTop();
}

function showHomePage() {
  activePage = "home";
  hasSelectedCompetition = false;
  localStorage.removeItem("football-model-has-selected-competition");
  renderPageVisibility();
  closeCompetitionDrawer();
  scrollToPageTop();
}

function marketLabel(key) {
  return {
    home: "Home win",
    draw: "Draw",
    away: "Away win",
    doubleChance: "Double chance",
    bttsYes: "BTTS Yes",
    bttsNo: "BTTS No",
    goalsDynamic: "Goals line",
    over25: "Over 2.5",
    under25: "Under 2.5",
    cornersDynamic: "Corners line",
    cornersOver95: "Over 9.5 corners",
    cornersUnder95: "Under 9.5 corners",
    playerBooked: "Player to be booked",
    playerFouled1: "Player 1+ fouled",
    playerFouled2: "Player 2+ fouled",
    playerFouled3: "Player 3+ fouled",
    playerShots1: "Player 1+ shots",
    playerShots2: "Player 2+ shots",
    playerShots3: "Player 3+ shots",
    playerShots4: "Player 4+ shots",
    playerSot1: "Player 1+ shot on target",
    playerSot2: "Player 2+ shots on target",
    playerSot3: "Player 3+ shots on target",
    playerScorer: "Player to score",
  }[key] || key;
}

function allBetCandidates(prediction, odds = {}) {
  const goalOdds = prediction.goals.label === "Over 2.5"
    ? odds.over25
    : prediction.goals.label === "Under 2.5"
      ? odds.under25
      : null;
  const cornerOdds = prediction.corners.label === "Over 9.5 corners"
    ? odds.cornersOver95
    : prediction.corners.label === "Under 9.5 corners"
      ? odds.cornersUnder95
      : null;
  const cornerCandidates = prediction.corners.value > 0
    ? [
        { key: "cornersDynamic", label: prediction.corners.label, probability: prediction.corners.value, odds: cornerOdds },
      ]
    : [];
  const candidates = [
    { key: "home", label: prediction.home, probability: prediction.homeWin, odds: odds.home },
    { key: "draw", label: "Draw", probability: prediction.draw, odds: odds.draw },
    { key: "away", label: prediction.away, probability: prediction.awayWin, odds: odds.away },
    { key: "doubleChance", label: prediction.doubleChance.label, probability: prediction.doubleChance.value, odds: odds.doubleChance },
    { key: "bttsYes", label: "BTTS Yes", probability: prediction.btts.label === "BTTS Yes" ? prediction.btts.value : 1 - prediction.btts.value, odds: odds.bttsYes },
    { key: "bttsNo", label: "BTTS No", probability: prediction.btts.label === "BTTS No" ? prediction.btts.value : 1 - prediction.btts.value, odds: odds.bttsNo },
    { key: "goalsDynamic", label: prediction.goals.label, probability: prediction.goals.value, odds: goalOdds },
    ...cornerCandidates,
    { key: "playerBooked", label: prediction.playerMarkets.booked.label, probability: prediction.playerMarkets.booked.value, odds: odds.playerBooked },
    ...prediction.playerMarkets.fouled.options.map((option) => ({ key: option.key, label: option.label, probability: option.value, odds: odds[option.key] })),
    ...prediction.playerMarkets.shots.options.map((option) => ({ key: option.key, label: option.label, probability: option.value, odds: odds[option.key] })),
    ...prediction.playerMarkets.sot.options.map((option) => ({ key: option.key, label: option.label, probability: option.value, odds: odds[option.key] })),
    { key: "playerScorer", label: prediction.playerMarkets.scorer.label, probability: prediction.playerMarkets.scorer.value, odds: odds.playerScorer },
  ];

  return candidates
    .filter((candidate) => candidate.probability > 0 && candidate.label !== "Not yet available")
    .map((candidate) => ({
      ...candidate,
      implied: impliedProbability(candidate.odds),
      ev: expectedValue(candidate.probability, candidate.odds),
      stake: fractionalKelly(candidate.probability, candidate.odds),
    }));
}

function lineupPlayers(text) {
  return String(text || "")
    .split(/[,;\n]/)
    .map((name) => name.trim().replace(/^\d+\.\s*/, ""))
    .filter(Boolean)
    .slice(0, 11);
}

function playerCandidate(fixture, side, role) {
  const players = lineupPlayers(getLineup(fixture, side));
  if (!players.length) return null;
  if (role === "scorer") return players[Math.max(0, players.length - 1)] || players[0];
  if (role === "shots") return players[Math.max(0, players.length - 1)] || players[0];
  if (role === "sot") return players[Math.max(0, players.length - 1)] || players[0];
  if (role === "fouled") return players[Math.max(0, players.length - 2)] || players[0];
  if (role === "booked") return players[Math.min(3, players.length - 1)] || players[0];
  return players[0];
}

function atLeastProbability(expected, threshold) {
  let below = 0;
  for (let count = 0; count < threshold; count += 1) below += poisson(expected, count);
  return clamp(1 - below, 0.02, 0.95);
}

function thresholdMarket(player, action, expected, thresholds, keyPrefix) {
  if (!player) return { label: "Not yet available", value: 0, options: [] };
  const options = thresholds.map((threshold) => ({
    key: `${keyPrefix}${threshold}`,
    threshold,
    label: `${player} ${threshold}+ ${action}`,
    value: atLeastProbability(expected, threshold),
  }));
  const display = [...options].filter((option) => option.value >= 0.34).sort((a, b) => b.threshold - a.threshold)[0] || options[0];
  return { ...display, options };
}

function bestBetRows(prediction, odds = {}) {
  return allBetCandidates(prediction, odds)
    .filter((candidate) => candidate.ev != null)
    .sort((a, b) => b.ev - a.ev);
}

function combinedOdds(legs) {
  if (!legs.length || legs.some((leg) => !Number.isFinite(Number(leg.odds)))) return null;
  return legs.reduce((total, leg) => total * Number(leg.odds), 1);
}

function combinedProbability(legs) {
  return legs.reduce((total, leg) => total * Number(leg.probability || 0), 1);
}

function formatCombinedOdds(odds) {
  return Number.isFinite(odds) && odds > 1 ? decimalToFractional(odds) : "Odds pending";
}

function formatOddsPrice(odds) {
  return Number.isFinite(Number(odds)) && Number(odds) > 1 ? decimalToFractional(odds) : "Odds pending";
}

function legSummary(leg) {
  return `${escapeHtml(leg.label)} (${formatOddsPrice(leg.odds)} / ${pct(leg.probability)})`;
}

function recommendationLegsForFixture(fixture) {
  const key = fixtureKey(fixture);
  const prediction = predictFixture(fixture);
  const odds = state.odds?.[key] || {};
  const candidates = allBetCandidates(prediction, odds)
    .filter((row) => row.probability >= 0.5)
    .sort((a, b) => {
      const aScore = a.probability + Math.max(0, a.ev || 0) * 0.75;
      const bScore = b.probability + Math.max(0, b.ev || 0) * 0.75;
      return bScore - aScore;
    });
  return { fixture, key, candidates };
}

function recommendedBetBuilders() {
  const week = getActiveGameweek();
  if (!week) return [];
  return week.fixtures
    .map((fixture) => {
      const { candidates } = recommendationLegsForFixture(fixture);
      const legs = candidates.slice(0, 5);
      if (legs.length < 2) return null;
      const probability = combinedProbability(legs);
      const odds = combinedOdds(legs);
      return {
        fixture,
        legs,
        probability,
        odds,
        value: odds ? expectedValue(probability, odds) : null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aScore = a.probability + Math.max(0, a.value || 0) * 0.35;
      const bScore = b.probability + Math.max(0, b.value || 0) * 0.35;
      return bScore - aScore;
    })
    .slice(0, 3);
}

function recommendedAccumulator() {
  const week = getActiveGameweek();
  if (!week) return null;
  const legs = week.fixtures
    .map((fixture) => {
      const { candidates } = recommendationLegsForFixture(fixture);
      const best = candidates.find((row) => row.probability >= 0.6) || candidates[0];
      return best ? { ...best, fixture, fixtureLabel: `${fixture.home} v ${fixture.away}` } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 5);
  if (legs.length < 2) return null;
  const probability = combinedProbability(legs);
  const odds = combinedOdds(legs);
  return {
    legs,
    probability,
    odds,
    value: odds ? expectedValue(probability, odds) : null,
  };
}

function valueDashboardRows() {
  const week = getActiveGameweek();
  if (!week) return [];
  const rows = week.fixtures
    .flatMap((fixture) => {
      const key = fixtureKey(fixture);
      const prediction = predictFixture(fixture);
      const odds = state.odds?.[key] || {};
      const rowsWithOdds = bestBetRows(prediction, odds);
      const fallbackRows = allBetCandidates(prediction, odds)
        .filter((row) => row.probability >= 0.55)
        .sort((a, b) => b.probability - a.probability);
      return (rowsWithOdds.length ? rowsWithOdds : fallbackRows).map((row) => ({
        ...row,
        fixture,
        key,
        fixtureLabel: `${fixture.home} v ${fixture.away}`,
      }));
    })
    .filter((row) => row.ev == null || row.ev >= MODEL_SETTINGS.edgeThreshold);
  return rows
    .sort((a, b) => {
      const aScore = Math.max(0, a.ev || 0) * 1.4 + a.probability;
      const bScore = Math.max(0, b.ev || 0) * 1.4 + b.probability;
      return bScore - aScore;
    })
    .slice(0, 10);
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
  const builderRows = recommendedBetBuilders();
  const accumulator = recommendedAccumulator();
  const liveFixtures = week?.fixtures.filter((fixture) => {
    const key = fixtureKey(fixture);
    return state.live?.[key]?.oddsUpdatedAt || Object.keys(state.odds?.[key] || {}).length;
  }).length || 0;
  const oddsLabel = liveFixtures === 1 ? "fixture" : "fixtures";
  const backtest = predictionBacktest();

  panel.innerHTML = `
    <div class="odds-hero">
      <div>
        <span>Centre dashboard</span>
        <strong>${week ? week.name : "Upcoming game week"}</strong>
        <em>${liveFixtures} ${oddsLabel} with priced odds - recommendations rank model likelihood against entered or live prices</em>
      </div>
      <div class="odds-hero__stat">
        <span>Best edge</span>
        <strong>${valueRows[0] ? `${(valueRows[0].ev * 100).toFixed(1)}%` : "Not yet available"}</strong>
      </div>
    </div>
    <div class="dashboard-grid">
      <section class="dashboard-card dashboard-card--large">
        <div class="dashboard-title">
          <span>Recommended Bets</span>
          <strong>${valueRows.length ? `${valueRows.length} selections` : "Not yet available"}</strong>
        </div>
        ${
          valueRows.length
            ? `<div class="dashboard-list">${valueRows.map((row) => `
                <div class="dashboard-row">
                  <div><strong>${escapeHtml(row.label)}</strong><span>${escapeHtml(row.fixtureLabel)} - ${marketLabel(row.key)}</span></div>
                  <b>${formatOddsPrice(row.odds)}</b>
                  <em>Probability ${pct(row.probability)}${row.implied ? ` / Implied ${pct(row.implied)}` : ""}${row.ev != null ? ` / EV ${(row.ev * 100).toFixed(1)}%` : " / value updates when odds arrive"}${row.stake ? ` / Stake ${(row.stake * 100).toFixed(1)}%` : ""}</em>
                </div>
              `).join("")}</div>`
            : `<div class="empty empty--inline">Selections appear when fixtures have strong model probabilities.</div>`
        }
      </section>
      <section class="dashboard-card">
        <div class="dashboard-title">
          <span>Recommended Bet Builder</span>
          <strong>${builderRows.length ? "Highest combined probability" : "Not yet available"}</strong>
        </div>
        ${
          builderRows.length
            ? `<div class="dashboard-list">${builderRows.map((builder) => `
                <div class="dashboard-row dashboard-row--stack">
                  <div>
                    <strong>${escapeHtml(builder.fixture.home)} v ${escapeHtml(builder.fixture.away)}</strong>
                    <span>${builder.legs.map(legSummary).join(" + ")}</span>
                  </div>
                  <b>${formatCombinedOdds(builder.odds)}</b>
                  <em>Combined probability ${pct(builder.probability)}${builder.value != null ? ` / EV ${(builder.value * 100).toFixed(1)}%` : " / value updates when odds arrive"}</em>
                </div>
              `).join("")}</div>`
            : `<div class="empty empty--inline">Needs fixtures with strong enough model probabilities.</div>`
        }
      </section>
      <section class="dashboard-card">
        <div class="dashboard-title">
          <span>Recommended Accumulator</span>
          <strong>${accumulator ? `${accumulator.legs.length} selections` : "Not yet available"}</strong>
        </div>
        ${
          accumulator
            ? `<div class="dashboard-list">
                ${accumulator.legs.map((leg) => `
                  <div class="dashboard-row dashboard-row--compact">
                    <div><strong>${escapeHtml(leg.label)}</strong><span>${escapeHtml(leg.fixtureLabel)} - ${marketLabel(leg.key)}</span></div>
                    <b>${formatOddsPrice(leg.odds)}</b>
                    <em>Probability ${pct(leg.probability)}</em>
                  </div>
                `).join("")}
                <div class="value-summary value-summary--${accumulator.value != null && accumulator.value >= MODEL_SETTINGS.edgeThreshold ? "value" : "pass"}">
                  <span>Combined accumulator</span>
                  <strong>${formatCombinedOdds(accumulator.odds)}</strong>
                  <em>Combined model probability ${pct(accumulator.probability)}${accumulator.value != null ? ` &middot; EV ${(accumulator.value * 100).toFixed(1)}%` : " &middot; odds value updates when prices arrive"}</em>
                </div>
              </div>`
            : `<div class="empty empty--inline">Needs at least two strong selections in the game week.</div>`
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
                  <b>${formatOddsPrice(row.from)} -> ${formatOddsPrice(row.to)}</b>
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
          <div><span>Goals line</span><strong>${backtest.sample ? pct(backtest.ou25) : "-"}</strong></div>
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
      <strong>${escapeHtml(best.label)} at ${formatOddsPrice(best.odds)}</strong>
      <em>Model ${pct(best.probability)} &middot; Implied ${pct(best.implied)} &middot; EV ${(best.ev * 100).toFixed(1)}% &middot; Quarter Kelly ${(best.stake * 100).toFixed(1)}% bank</em>
    </div>
  `;
}

function renderModelPerformance() {
  const panels = [el("modelPerformance"), el("homeModelPerformance")].filter(Boolean);
  if (!panels.length) return;
  const summaries = allPerformanceSummaries();
  const totalTested = summaries.reduce((sum, row) => sum + row.sample, 0);
  const totalMatches = summaries.reduce((sum, row) => sum + row.matches, 0);
  const best = [...summaries].sort((a, b) => b.oneXTwo - a.oneXTwo)[0];
  const averageAccuracy = summaries.length ? summaries.reduce((sum, row) => sum + row.oneXTwo, 0) / summaries.length : 0;
  const averageBrier = summaries.length ? summaries.reduce((sum, row) => sum + row.brier, 0) / summaries.length : 0;
  const dateStart = summaries.map((row) => row.start).filter(Boolean).sort()[0] || "";
  const dateEnd = summaries.map((row) => row.end).filter(Boolean).sort().at(-1) || "";
  const trend = activeCompetitionTrend();

  const html = `
    <section class="performance-hero">
      <div>
        <span>Model Performance</span>
        <strong>${totalTested.toLocaleString()} backtested predictions</strong>
        <em>${dateStart ? `${formatFixtureDate({ date: dateStart })} to ${formatFixtureDate({ date: dateEnd })}` : "Historical validation building"}</em>
      </div>
      <div class="performance-score">
        <span>Best competition</span>
        <strong>${best ? `${escapeHtml(best.label)} ${pct(best.oneXTwo)}` : "--"}</strong>
      </div>
    </section>
    <div class="performance-metrics">
      <div><span>Total historical results</span><strong>${totalMatches.toLocaleString()}</strong></div>
      <div><span>Average 1X2 accuracy</span><strong>${pct(averageAccuracy)}</strong></div>
      <div><span>Average Brier score</span><strong>${averageBrier ? averageBrier.toFixed(3) : "--"}</strong></div>
      <div><span>Markets tested</span><strong>1X2 / BTTS / goals line</strong></div>
    </div>
    <section class="performance-section">
      <div class="dashboard-title">
        <span>Results by Competition</span>
        <strong>${summaries.length} validated leagues</strong>
      </div>
      <div class="performance-table">
        <div class="performance-row performance-row--head">
          <span>Competition</span><span>Tested</span><span>1X2</span><span>BTTS</span><span>Goals line</span><span>Brier</span>
        </div>
        ${summaries.map((row) => `
          <div class="performance-row">
            <span><strong>${escapeHtml(row.label)}</strong><em>${row.matches.toLocaleString()} results</em></span>
            <span>${row.sample}</span>
            <span>${pct(row.oneXTwo)}</span>
            <span>${pct(row.btts)}</span>
            <span>${pct(row.ou25)}</span>
            <span>${row.brier.toFixed(3)}</span>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="performance-section">
      <div class="dashboard-title">
        <span>Performance Over Time</span>
        <strong>${escapeHtml(activeConfig().label)}</strong>
      </div>
      ${
        trend.length
          ? `<div class="trend-grid">${trend.map((row) => `
              <div class="trend-card">
                <span>${escapeHtml(row.season)}</span>
                <strong>${pct(row.wins / row.tested)}</strong>
                <em>${row.tested} tested / BTTS ${pct(row.btts / row.tested)} / goals line ${pct(row.ou25 / row.tested)}</em>
                <div class="trend-bar"><span style="width:${pct(row.wins / row.tested)}"></span></div>
              </div>
            `).join("")}</div>`
          : `<div class="empty empty--inline">Performance over time will appear once this competition has enough settled historical matches.</div>`
      }
    </section>
  `;
  panels.forEach((panel) => {
    panel.innerHTML = html;
  });
}

function renderLiveNotes(live = {}, odds = {}, sources = {}) {
  const hasOdds = Object.keys(odds || {}).length > 0;
  const hasSource = Boolean(sources.odds || sources.lineups || sources.stats);
  if (!live || (!live.xg && !live.teamNews && !live.oddsUpdatedAt && !live.lineupsUpdatedAt && !hasOdds && !hasSource)) return "";
  const xgText = live.xg ? `xG feed ${decimal(live.xg.home)}-${decimal(live.xg.away)}` : "xG pending";
  const oddsText = live.oddsUpdatedAt
    ? live.oddsSource === "source URL"
      ? "Odds from URL"
      : live.oddsSource === "research notes"
        ? "Odds from notes"
        : "Odds live"
    : hasOdds
      ? "Odds entered"
      : sources.odds
        ? "Odds link saved"
        : "Odds pending";
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
  const summaries = allPerformanceSummaries();
  const totalTested = summaries.reduce((sum, row) => sum + row.sample, 0);
  const bestAccuracy = summaries.length ? Math.max(...summaries.map((row) => row.oneXTwo)) : 0;
  if (el("competitionEyebrow")) el("competitionEyebrow").textContent = "Fixture IQ";
  if (el("dataStatus")) el("dataStatus").textContent = `${competitionIds().length} competitions covered`;
  if (el("coverageCount")) el("coverageCount").textContent = competitionIds().length;
  if (el("testedCount")) el("testedCount").textContent = totalTested ? totalTested.toLocaleString() : "Loading";
  if (el("topAccuracy")) el("topAccuracy").textContent = bestAccuracy ? pct(bestAccuracy) : "Loading";
  if (el("activeCompetitionName")) el("activeCompetitionName").textContent = config.label;
  const blendNote = UEFA_BLEND_COMPETITIONS.has(activeCompetitionId) ? " - 70/30 Europe/domestic blend" : "";
  if (el("modelStamp")) el("modelStamp").textContent = realMatchCount
    ? `${realMatchCount} real results - ${week?.fixtures.length || 0} fixtures - ${backtest.sample} backtested${blendNote}`
    : `${week?.fixtures.length || 0} fixtures - historical record pending${blendNote}`;
  if (el("activeWeekTitle")) el("activeWeekTitle").textContent = `${config.label} - ${week ? week.name : "Upcoming Game Week"}`;
  el("activeWeekSubtitle").textContent = week
    ? `${formatFixtureDate({ date: week.startDate })} to ${formatFixtureDate({ date: week.endDate })}`
    : "Predicted scores, markets, and lineup notes";
  if (el("autoUpdateStamp")) el("autoUpdateStamp").textContent = backtest.sample ? `${backtest.sample} recent tests` : "Validation building";
  document.querySelectorAll(".competition-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.competition === activeCompetitionId);
  });
  document.querySelectorAll(".competition-option").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.competition === activeCompetitionId);
  });
  if (el("drawerToday")) el("drawerToday").classList.toggle("is-active", activeCompetitionId === TODAYS_MATCHES_ID);
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
  localStorage.setItem("football-model-active-view-v2", activeView);
  renderView();
}

function renderAll() {
  renderChrome();
  renderCompetitionList();
  renderView();
  renderPageVisibility();
  renderModelPerformance();
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
      <div><span>Goals line hit</span><strong>${pct(backtest.ou25)}</strong></div>
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
    const goalsWon = overUnderWon(prediction.goals.label, match.hg + match.ag);
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
        <div><span>Goals line accuracy</span><strong>${pct(goalsHit)}</strong></div>
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
  document.querySelectorAll("[data-fixture-key] [data-lineup-side]").forEach((textarea) => {
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

function attachSourceLinkListeners() {
  const persistSourceInputs = (card) => {
    if (!card) return false;
    if (!state.sourceLinks[card.dataset.fixtureKey]) state.sourceLinks[card.dataset.fixtureKey] = {};
    card.querySelectorAll("[data-source-key]").forEach((input) => {
      const sourceKey = input.dataset.sourceKey;
      const value = input.value.trim();
      if (value) {
        state.sourceLinks[card.dataset.fixtureKey][sourceKey] = value;
      } else {
        delete state.sourceLinks[card.dataset.fixtureKey][sourceKey];
      }
    });
    return true;
  };

  const saveSourceInputs = async (card, scanLinks = false) => {
    if (!persistSourceInputs(card)) return false;
    const fixture = findFixtureByKey(card.dataset.fixtureKey);
    const sources = state.sourceLinks[card.dataset.fixtureKey];
    const scans = [];
    let oddsText = sources.notes || "";
    let statsText = sources.notes || "";

    if (scanLinks) {
      const blocked = [];
      if (sources.odds) {
        const scan = await scanSourceUrl(sources.odds);
        scans.push(scan.ok ? "Odds URL read" : "Odds URL blocked");
        if (!scan.ok) blocked.push("Odds URL");
        if (scan.ok) oddsText = `${oddsText} ${scan.text}`;
      }
      if (sources.stats) {
        const scan = await scanSourceUrl(sources.stats);
        scans.push(scan.ok ? "Stats URL read" : "Stats URL blocked");
        if (!scan.ok) blocked.push("Stats URL");
        if (scan.ok) statsText = `${statsText} ${scan.text}`;
      }
      if (blocked.length && typeof window !== "undefined" && typeof window.alert === "function") {
        window.alert(`${blocked.join(" and ")} could not be read automatically. The link has been saved, but this site may block automated reading.`);
      }
    }

    const parsedOdds = oddsFromResearchNotes(oddsText, fixture);
    if (Object.keys(parsedOdds).length) {
      state.odds[card.dataset.fixtureKey] = {
        ...(state.odds[card.dataset.fixtureKey] || {}),
        ...parsedOdds,
      };
      state.live[card.dataset.fixtureKey] = {
        ...(state.live[card.dataset.fixtureKey] || {}),
        oddsUpdatedAt: new Date().toISOString(),
        oddsSource: scanLinks ? "source URL" : "research notes",
      };
    }
    if (hasStatsSignal(statsText)) {
      state.sourceLinks[card.dataset.fixtureKey].statsSignal = "Stats source includes match-stat context";
      state.live[card.dataset.fixtureKey] = {
        ...(state.live[card.dataset.fixtureKey] || {}),
        sourceScanUpdatedAt: new Date().toISOString(),
      };
    }
    if (scanLinks) {
      state.sourceLinks[card.dataset.fixtureKey].scanStatus = scans.length ? scans.join(" / ") : "No source URLs to scan";
      state.sourceLinks[card.dataset.fixtureKey].scanUpdatedAt = new Date().toISOString();
    }
    saveState();
    return true;
  };

  document.querySelectorAll("[data-fixture-key] [data-source-key]").forEach((input) => {
    const handler = (event) => {
      const card = event.target.closest("[data-fixture-key]");
      if (!card) return;
      persistSourceInputs(card);
      saveState();
    };
    input.addEventListener(input.tagName === "TEXTAREA" ? "input" : "change", handler);
  });

  document.querySelectorAll("[data-fixture-key] [data-source-submit]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const card = event.target.closest("[data-fixture-key]");
      button.textContent = "Checking links";
      button.disabled = true;
      try {
        if (!await saveSourceInputs(card, true)) return;
        renderAll();
      } catch {
        if (typeof window !== "undefined" && typeof window.alert === "function") {
          window.alert("The source links could not be checked. Please try again or use a different source.");
        }
        button.textContent = "Update prediction";
        button.disabled = false;
      }
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
    if (el("autoUpdateStamp")) el("autoUpdateStamp").textContent = "Fixture draw pending";
    if (el("dataStatus")) el("dataStatus").textContent = `${competitionIds().length} competitions covered`;
    return;
  }
  if (el("dataStatus")) el("dataStatus").textContent = `${competitionIds().length} competitions covered`;
  if (el("autoUpdateStamp")) el("autoUpdateStamp").textContent = "Checking current feed";
  try {
    const response = await fetch(`${config.currentSeasonUrl}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const added = mergeMatches(csvToMatches(await response.text()));
    if (added) {
      state.source = "Auto-updated Football-Data CSV";
      saveState();
    }
    if (el("autoUpdateStamp")) el("autoUpdateStamp").textContent = added ? `Added ${added} new results` : "No new results";
    if (el("dataStatus")) el("dataStatus").textContent = `${competitionIds().length} competitions covered`;
  } catch (error) {
    if (el("autoUpdateStamp")) el("autoUpdateStamp").textContent = "Auto feed unavailable";
    if (el("dataStatus")) el("dataStatus").textContent = `${competitionIds().length} competitions covered`;
    console.warn("Current season auto update failed", error);
  }
  renderAll();
}

function mergeLiveGame(game) {
  const fixture = findFixtureForLiveGame(game) || addFixtureFromLiveGame(game);
  if (!fixture) return false;
  const key = fixtureKey(fixture);
  if (!state.live[key]) state.live[key] = {};

  if (game.odds) {
    if (!state.odds[key]) state.odds[key] = {};
    const previousOdds = { ...state.odds[key] };
    const movement = {};
    [
      "home",
      "draw",
      "away",
      "bttsYes",
      "bttsNo",
      "over25",
      "under25",
      "cornersOver95",
      "cornersUnder95",
      "playerBooked",
      "playerScorer",
      "playerFouled1",
      "playerFouled2",
      "playerFouled3",
      "playerShots1",
      "playerShots2",
      "playerShots3",
      "playerShots4",
      "playerSot1",
      "playerSot2",
      "playerSot3",
    ].forEach((market) => {
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
  el("liveDataStamp").textContent = "Checking market";
  el("liveDataSummary").textContent = "Updating";
  try {
    const ids = activeCompetitionId === TODAYS_MATCHES_ID ? competitionIds() : [activeCompetitionId];
    const payloads = await Promise.all(
      ids.map(async (competitionId) => {
        const response = await fetch(`/api/live-data?competition=${encodeURIComponent(competitionId)}`, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      }),
    );
    const merged = payloads
      .flatMap((payload, index) => (payload.games || []).map((game) => ({ ...game, competitionId: ids[index] })))
      .filter(mergeLiveGame).length;
    state.live.lastRefresh = new Date().toISOString();
    if (activeCompetitionId !== TODAYS_MATCHES_ID) saveState();
    el("liveDataStamp").textContent = merged ? "Market data updated" : "Market watch ready";
    el("liveDataSummary").textContent = merged ? `${merged} matches refreshed` : "No new movement";
  } catch (error) {
    el("liveDataStamp").textContent = "Market watch ready";
    el("liveDataSummary").textContent = "Updates when available";
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
  ["homeTeam", "awayTeam"].forEach((id) => {
    const select = el(id);
    if (select) populateSelect(select);
  });
  if (el("awayTeam")) el("awayTeam").selectedIndex = Math.min(1, activeTeams().length - 1);
}

function switchCompetition(competitionId) {
  activeCompetitionId = competitionId;
  activePage = "league";
  hasSelectedCompetition = true;
  localStorage.setItem("football-model-active-competition", activeCompetitionId);
  localStorage.setItem("football-model-has-selected-competition", "true");
  activeView = "odds";
  localStorage.setItem("football-model-active-view-v2", activeView);
  loadState();
  populateTeamControls();
  renderAll();
  refreshCurrentSeasonResults();
  closeCompetitionDrawer();
  scrollToPageTop();
}

function init() {
  loadState();
  populateTeamControls();
  renderAll();
  if (el("addFixture")) el("addFixture").addEventListener("click", addFixture);
  if (el("exportData")) el("exportData").addEventListener("click", exportData);
  if (el("resetData")) el("resetData").addEventListener("click", resetData);
  if (el("autoRefresh")) el("autoRefresh").addEventListener("click", refreshCurrentSeasonResults);
  if (el("liveRefresh")) el("liveRefresh").addEventListener("click", refreshLiveData);
  if (el("competitionMenu")) el("competitionMenu").addEventListener("click", openCompetitionDrawer);
  if (el("appCompetitionMenu")) el("appCompetitionMenu").addEventListener("click", openCompetitionDrawer);
  if (el("drawerPerformance")) el("drawerPerformance").addEventListener("click", showModelPerformanceOnly);
  if (el("drawerToday")) el("drawerToday").addEventListener("click", showTodaysMatches);
  if (el("homeLink")) el("homeLink").addEventListener("click", showHomePage);
  if (el("closeCompetitionMenu")) el("closeCompetitionMenu").addEventListener("click", closeCompetitionDrawer);
  if (el("competitionDrawer")) el("competitionDrawer").addEventListener("click", (event) => {
    if (event.target === el("competitionDrawer")) closeCompetitionDrawer();
  });
  document.querySelectorAll("[data-view-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.viewJump === "performance") showModelPerformanceOnly();
      else switchView(button.dataset.viewJump);
    });
  });
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });
  refreshCurrentSeasonResults();
  refreshLiveData();
  startLiveDataMonitor();
}

init();
