Fixture IQ

Open index.html in a browser to use Fixture IQ.

Competition tabs:
- Today's Matches from the sidebar combines all fixtures dated today across every competition.
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
  - EXTRA_ODDS_MARKETS: optional, use totals_corners or any extra market keys your odds provider supports.
- The browser calls /api/live-data?competition=... and the API route keeps provider keys server-side.
- UEFA Champions League, Europa League, and Conference League fixtures are locked to the verified UEFA.com fixture list bundled in the site. Third-party fixture APIs are blocked from creating UEFA fixtures because they can publish incorrect qualifying ties.
- Live odds are mapped into the value engine automatically, including extra markets when the provider supplies them.
- Starting XIs are pasted into the lineup model automatically when the provider has confirmed lineups.
- xG/stat feeds are blended into expected goals when available.
- The page checks live data on open, when Refresh Live Data is pressed, every five minutes while open, and when the browser tab becomes active again.
- The API route requests live odds plus upcoming/live fixture context so odds movements and starting XIs appear as soon as the providers publish them.
- Today's Matches checks every supported competition feed and merges matching live odds, lineups, and provider fixtures into the combined daily view.

Bundled data:
- Scottish Premiership SC0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Premier League E0 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Ligue 1 F1, Bundesliga D1, La Liga SP1, Serie A I1, and Primeira Liga P1 CSV results from Football-Data, seasons 2016/17 through 2025/26.
- Champions League, Europa League, and Conference League tabs use editable league-phase teams and placeholder fixtures until the UEFA draws are published; UEFA historical backtest records are not bundled from Football-Data.
- Bundled match counts: 2,231 SPFL, 3,800 Premier League, 3,477 Ligue 1, 3,060 Bundesliga, 3,800 La Liga, 3,800 Serie A, and 3,060 Primeira Liga results.
- Champions League, Europa League, and Conference League predictions use a 70% European-context model and a 30% domestic-league club data blend.

Weekly update flow:
1. The site opens on a clean homepage.
2. Model Performance opens as its own page from the sidebar or homepage button.
3. The league workspace stays hidden until a competition is selected from the sidebar, then opens as its own page.
2. The page checks the selected competition's current-season Football-Data CSV feed when opened and when Refresh Results is pressed, where a feed is available.
3. New results are merged automatically, then the dashboard moves to the next incomplete game week.
4. Export Data to save the current model state.

Dashboard pages:
- Today's Matches: a combined daily workspace using the same odds dashboard, prediction cards, and markets as competition pages.
- Model Performance: total tested matches, date range, accuracy/calibration metrics, performance over time, and results by competition.
- Odds Dashboard: recommended bets, recommended bet builders, recommended accumulators, biggest tracked price moves, model likelihood versus implied odds, and quick accuracy stats.
- Predictions: predicted scores, 1X2, double chance, BTTS, over/under 2.5 goals, corners over/under, player booked, player fouled thresholds, player shots thresholds, player shots-on-target thresholds, player to score, odds input, value flag, and lineup notes.
- Each prediction card opens as a foldable fixture row. Press the arrow to reveal the full prediction, odds, lineups, and research inputs.
- Each prediction card includes Source Links for lineups, odds, and a broad stats URL for xG, shots, corners, cards, fouls, and other match data, plus research notes. These links are saved per fixture so manual research can be combined with lineup notes and bookmaker odds without needing a paid all-in-one data API.
- Press Update prediction in the research inputs panel after adding notes or links to refresh the model output, recommended bets, bet builder, and accumulator with the latest saved research.
- Odds and stats source links are saved per fixture. When deployed on Vercel, pressing Update prediction tries to read those URLs through /api/source-scan, parse decimal or fractional bookmaker odds, and detect useful stats context. Some bookmaker pages block automated reading; if that happens, a pop-up warning appears, the link is still saved, and manual odds boxes remain available.
- Visible odds in the dashboard and value summaries are shown in UK bookmaker fractional style, such as 6/4 or 11/10.
- Opened prediction cards show when the model was last updated for that fixture in UK time.
- Goal and corner markets now show the strongest practical over/under line rather than always using over/under 2.5 goals and over/under 9.5 corners. Goals choose between 2.5 and 3.5; corners choose between 8.5, 9.5, and 10.5 when corner odds or corner research is available.
- Corner recommendations only show when corner odds are entered or the research notes include corner/stat context. Otherwise the corner market stays "Not yet available" and is excluded from recommended bets.
- Backtest: recent settled historical predictions with winner, BTTS, over/under hit checks, plus overall rolling accuracy. New leagues begin showing backtest records once enough real completed matches are available.

Prediction markets:
- Predicted score
- Winner
- Double chance
- BTTS
- Over/under 2.5 goals
- Over/under 9.5 corners
- Most likely player to be booked
- Most likely player fouled threshold, such as 2+ or 3+ fouled
- Most likely player shots threshold, such as 2+ or 3+ shots
- Most likely player shots-on-target threshold, such as 1+ or 2+ shots on target
- Most likely player to score
- Lineup-adjusted expected goals
- Manual bookmaker odds input
- Live bookmaker odds integration through /api/live-data
- Value/edge flag
- Biggest price movement tracker after repeated live odds refreshes
- Market-implied probability blending when live or manual odds are available
- Conservative quarter-Kelly staking guide
- Rolling backtest metrics
- Bet builder and accumulator recommendations prioritise the highest combined model probability, then improve the ranking when live odds show positive value.
- UEFA Champions League, Europa League, and Conference League use live-provider qualification windows so exact qualifying fixtures can be inserted into the competition tab and Today's Matches when published.
- Fixture kickoff times are displayed in UK time. The Champions League first qualifying round fixtures for 8 July 2026 are bundled into the Champions League tab and Today's Matches as a fallback while live provider data updates.
- For a more reliable replacement, use a licensed data provider such as Sportradar, Stats Perform/Opta, Sportmonks, or Betfair Exchange API. BBC Sport and Paddy Power website pages are not stable public APIs and should not be scraped for production data.

Model notes:
- Weighted recency, attack/defence strength, Elo-style ratings, club priors, recent head-to-head, home advantage, form, bookmaker closing odds for historical analysis, and Poisson goal probabilities.
- Lineup boxes accept starting XI, injury, suspension, rotation, and availability notes. Those notes adjust each team's attacking expectation.
- The backtest uses only matches before each tested fixture and reports 1X2, BTTS, O/U 2.5, exact score, Brier score, value-bet count, and flat-stake ROI.
- Predictions are estimates, not betting advice. No model can guarantee profit.
