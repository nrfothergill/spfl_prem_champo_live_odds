Football 2026/27 Prediction Model

Open index.html in a browser to use the dashboard.

Competition tabs:
- SPFL Premiership
- Premier League
- UEFA Champions League

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

Bundled data:
- Scottish Premiership SC0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Premier League E0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Champions League tab uses confirmed/early league-phase teams and placeholder fixtures until the UEFA draw is published.
- 2,231 SPFL results and 3,800 Premier League results are included in data.js.

Weekly update flow:
1. The dashboard only shows the active upcoming game week.
2. The page checks the selected competition's current-season Football-Data CSV feed when opened and when Refresh Results is pressed, where a feed is available.
3. New results are merged automatically, then the dashboard moves to the next incomplete game week.
4. Import a fresh CSV only if the automatic feed is delayed or blocked by the browser.
5. Export Data to save the current model state.

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
- Conservative quarter-Kelly staking guide
- Rolling backtest metrics

Model notes:
- Weighted recency, attack/defence strength, Elo-style ratings, club priors, recent head-to-head, home advantage, form, bookmaker closing odds for historical analysis, and Poisson goal probabilities.
- Lineup boxes accept starting XI, injury, suspension, rotation, and availability notes. Those notes adjust each team's attacking expectation.
- The backtest uses only matches before each tested fixture and reports 1X2, BTTS, O/U 2.5, exact score, Brier score, value-bet count, and flat-stake ROI.
- Predictions are estimates, not betting advice. No model can guarantee profit.
Updated deployment
