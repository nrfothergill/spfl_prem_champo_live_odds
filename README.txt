Football 2026/27 Prediction Model

Open index.html in a browser to use the dashboard.

Competition tabs:
- SPFL Premiership
- Premier League
- French Ligue 1
- German Bundesliga
- Spanish La Liga
- Italian Serie A
- Portuguese Primeira Liga
- UEFA Champions League
- UEFA Europa League
- UEFA Conference League

Live data setup:
- Deploy as a Vercel project, not only a static drop, if you want live odds/lineups/xG.
- Add these Vercel environment variables:
  - ODDS_API_KEY: key from The Odds API.
  - API_FOOTBALL_KEY: key from API-Football/API-Sports.
  - ODDS_REGIONS: optional, defaults to uk,eu.
- The browser calls /api/live-data?competition=... and the API route keeps provider keys server-side.
- Live odds are mapped into the value engine automatically.
- Starting XIs are pasted into the lineup model automatically when the provider has confirmed lineups.
- xG/stat feeds are blended into expected goals when available.
- The page checks live data on open, when Refresh Live Data is pressed, every five minutes while open, and when the browser tab becomes active again.
- The API route requests live odds plus upcoming/live fixture context so odds movements and starting XIs appear as soon as the providers publish them.

Bundled data:
- Scottish Premiership SC0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Premier League E0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Ligue 1 F1, Bundesliga D1, La Liga SP1, Serie A I1, and Primeira Liga P1 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Champions League, Europa League, and Conference League tabs use editable league-phase teams and placeholder fixtures until the UEFA draws are published; UEFA historical backtest records are not bundled from Football-Data.
- Bundled match counts: 2,231 SPFL, 3,800 Premier League, 3,477 Ligue 1, 3,060 Bundesliga, 3,800 La Liga, 3,800 Serie A, and 3,060 Primeira Liga results.
- Champions League, Europa League, and Conference League predictions use a 70% European-context model and a 30% domestic-league club data blend.

Weekly update flow:
1. The dashboard opens on the odds movement and value-bet screen for the active upcoming game week.
2. The page checks the selected competition's current-season Football-Data CSV feed when opened and when Refresh Results is pressed, where a feed is available.
3. New results are merged automatically, then the dashboard moves to the next incomplete game week.
4. Export Data to save the current model state.

Dashboard pages:
- Odds Dashboard: biggest tracked price moves, best model value bets, and quick accuracy stats.
- Predictions: predicted scores, 1X2, double chance, BTTS, over/under 2.5 goals, odds input, value flag, and lineup notes.
- Backtest: recent settled historical predictions with winner, BTTS, over/under hit checks, plus overall rolling accuracy. New leagues begin showing backtest records once enough real completed matches are available.

Prediction markets:
- Predicted score
- Winner
- Double chance
- BTTS
- Over/under 2.5 goals
- Lineup-adjusted expected goals
- Manual bookmaker odds input
- Live bookmaker odds integration through /api/live-data
- Value/edge flag
- Biggest price movement tracker after repeated live odds refreshes
- Market-implied probability blending when live or manual odds are available
- Conservative quarter-Kelly staking guide
- Rolling backtest metrics

Model notes:
- Weighted recency, attack/defence strength, Elo-style ratings, club priors, recent head-to-head, home advantage, form, bookmaker closing odds for historical analysis, and Poisson goal probabilities.
- Lineup boxes accept starting XI, injury, suspension, rotation, and availability notes. Those notes adjust each team's attacking expectation.
- The backtest uses only matches before each tested fixture and reports 1X2, BTTS, O/U 2.5, exact score, Brier score, value-bet count, and flat-stake ROI.
- Predictions are estimates, not betting advice. No model can guarantee profit.
