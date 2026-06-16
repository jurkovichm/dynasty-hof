export const MEDAL = ['🥇', '🥈', '🥉'];
export const PLACE_LABEL = ['Champion', 'Runner-Up', 'Third Place'];

// Precomputed per-season data: MVP (top scorer) per podium team + an AI-written
// story blurb. Keyed by league_id. MVPs keyed by roster_id.
export const SEASON_DATA = {
  // 2025 — Dynasty Year 3
  '1215153730790363136': {
    mvps: {
      '7':  { name: 'Drake Maye',  pos: 'QB', team: 'NE',  pts: 343.7, pid: '11564' },
      '10': { name: 'Jalen Hurts', pos: 'QB', team: 'PHI', pts: 307.1, pid: '6904'  },
      '2':  { name: 'Josh Allen',  pos: 'QB', team: 'BUF', pts: 374.6, pid: '4984'  },
    },
    blurb: "The story of the season was a collapse for the ages: chamurph's <b>JJ, JJ, JC, JC, &amp; CD</b> bulldozed the regular season at 13–1 and locked up the #1 overall seed — then fell by a heartbreaking <b>8.4 points</b> in the semifinals and dropped the third-place game to finish a gutting 4th. Meanwhile the #3-seed <b>avocados4tom</b> caught fire at the perfect time, toppling Josh Allen's Stroud Boys in the semis before detonating CroatCoachesAssociation <b>172.5–100.6</b> in the title game behind Drake Maye's 343-point breakout. jjurkovich's <b>CroatCoachesAssociation</b> authored its own Cinderella run — upsetting the top seed — only to run into a buzzsaw in the final.",
  },
  // 2024 — Dynasty Year 2
  '1062418193391632384': {
    mvps: {
      '2': { name: 'Josh Allen',     pos: 'QB', team: 'BUF', pts: 385.0, pid: '4984'  },
      '3': { name: 'Jayden Daniels', pos: 'QB', team: 'WAS', pts: 360.6, pid: '11566' },
      '7': { name: 'Lamar Jackson',  pos: 'QB', team: 'BAL', pts: 411.4, pid: '4881'  },
    },
    blurb: "Back-to-back heartbreak for nodogg21, who earned the #1 seed at 11–3 only to finish runner-up again — a second straight silver so painful he renamed his team <b>Not Taking 2nd Next Year</b> heading into Year 3. <b>Stroud Boys Let's Ride</b> (Smoore1759) went back-to-back, surging from the #3 seed behind another monster Josh Allen campaign (385 pts) and a statement semifinal over avocados4tom. Lamar Jackson's <b>league-best 411-point</b> season carried avocados4tom to a third-place finish, while cre8 came within 3.8 points of crashing the bracket.",
  },
  // 2023 — Dynasty Year 1 (inaugural)
  '920927124263874560': {
    mvps: {
      '2': { name: 'Josh Allen',     pos: 'QB', team: 'BUF', pts: 385.6, pid: '4984' },
      '3': { name: 'Raheem Mostert', pos: 'RB', team: 'MIA', pts: 255.2, pid: '2749' },
      '5': { name: 'CeeDee Lamb',    pos: 'WR', team: 'DAL', pts: 306.7, pid: '6786' },
    },
    blurb: "The inaugural season crowned <b>Stroud Boys Let's Ride</b> (Smoore1759) as the league's first-ever champion — fittingly powered by Josh Allen (385 pts) — despite entering the playoffs as just the #3 seed. nodogg21's <b>Win It For Kirk</b> reached the final but came up short, the first chapter of back-to-back runner-up heartbreak. cre8 claimed third in a 6.2-point nail-biter over ellenwei17, riding CeeDee Lamb's 306-point year, after tight semifinals decided the bracket.",
  },
};
