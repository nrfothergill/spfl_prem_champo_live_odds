Fixture IQ

Accuracy improvements in V47
- Historical matches decay by their actual age rather than their row position.
- Low-sample team ratings are pulled toward informed priors until enough results exist.
- Elo ratings account for home advantage and dampen unusually large scorelines.
- A Dixon-Coles low-score adjustment improves modelling of 0-0, 1-0, 0-1 and 1-1 results.

Starting XI editor in V48
- Select a formation independently for each team.
- Enter all eleven players in position-labelled fields.
- Saved formations make a small tactical adjustment and complete team sheets feed the lineup model.

Matchday presentation in V49
- Starting XI fields are arranged on a pitch in the selected formation.
- Today's Matches is prediction-only and no longer displays a backtest page.
- Today's completed scores are saved into the correct competition backtest.

Tracked backtests in V50
- Finished fixtures disappear from Today's Matches.
- Current-season results enter backtesting only after xG or statistical notes have been saved.
- The prediction is captured when Update prediction is pressed, before the final result is known.

UEFA qualification fixtures in V51
- Bundles UEFA-confirmed Champions League, Europa League and Conference League first-round fixtures.
- Includes all 27 Europa/Conference first legs on 9 July in UK time and the confirmed return legs.
- Migrates previously saved empty qualifying rounds automatically.
- API context can update lineups, xG and results, but cannot create unverified UEFA fixtures.

Today's fixture cleanup in V52
- Removes fixtures immediately when the provider reports a final result.
- Uses a 150-minute UK-time completion window as a fallback when provider status is delayed.
- Rechecks the visible Today list every minute and filters stale fixtures on every page load.

Qualifying score calibration in V53
- Adds team-specific strength priors for every currently bundled UEFA qualifying club.
- Includes qualifying fixture teams in the rating model even when historical match data is unavailable.
- Removes the identical neutral-team fallback that caused almost every predicted score to be 1-0.
- Uses a calibrated xG-to-score threshold that improved exact-score hits from 48 to 57 in a 420-match holdout.
- Corrects systematic goal underestimation; holdout BTTS accuracy rose from 41.7% to 59.8% and goals-line accuracy from 45.2% to 61.9%.

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
3. New results are merged automatically, then the site moves to the next incomplete game week.
4. Export Data to save the current model state.

Workspace pages:
- Today's Matches: a combined daily workspace using the same prediction cards as competition pages.
- Model Performance: total tested matches, date range, accuracy/calibration metrics, performance over time, and results by competition.
- Predictions: foldable fixture rows showing predicted score, predicted result, double chance, BTTS, and the most likely over/under goals line with confidence percentages.
- Each prediction card includes a Result section for saving the final score into the model history.
- Each prediction card includes manual model inputs for home/away team news, injuries, suspensions, rotation, xG scored, xG conceded, and stat/tempo notes. Press Update prediction after entering them to recalculate that fixture.
- Backtest: recent settled historical predictions with winner, BTTS, over/under hit checks, plus overall rolling accuracy. New leagues begin showing backtest records once enough real completed matches are available.

Prediction markets:
- Predicted score
- Predicted result
- Double chance
- BTTS
- Most likely over/under goals line
- Expected goals
- Manual result entry
- Manual team news, xG scored, xG conceded, and stat inputs
- Rolling backtest metrics
- UEFA Champions League, Europa League, and Conference League use live-provider qualification windows so exact qualifying fixtures can be inserted into the competition tab and Today's Matches when published.
- Fixture kickoff times are displayed in UK time. The Champions League first qualifying round fixtures for 8 July 2026 are bundled into the Champions League tab and Today's Matches as a fallback while live provider data updates.

Model notes:
- Weighted recency, attack/defence strength, Elo-style ratings, club priors, recent head-to-head, home advantage, form, manual team news, differently weighted home/away xG scored/conceded signals, historical odds where available, and Poisson goal probabilities.
- The backtest uses only matches before each tested fixture and reports 1X2, BTTS, O/U goals, exact score, and Brier score.
- Predictions are estimates, not betting advice. No model can guarantee profit.
