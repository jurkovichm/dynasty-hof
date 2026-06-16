const ROOT_LEAGUE_ID = '1312911602885890048';
const API = 'https://api.sleeper.app/v1';

export async function fetchJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${url}`);
  return r.json();
}

export async function getLeagueChain(startId) {
  const chain = [];
  let id = startId || ROOT_LEAGUE_ID;
  while (id && id !== '0') {
    const league = await fetchJSON(`${API}/league/${id}`);
    chain.push(league);
    id = league.previous_league_id;
  }
  return chain; // newest first
}

export async function getPodium(leagueId) {
  const [bracket, rosters, users] = await Promise.all([
    fetchJSON(`${API}/league/${leagueId}/winners_bracket`),
    fetchJSON(`${API}/league/${leagueId}/rosters`),
    fetchJSON(`${API}/league/${leagueId}/users`),
  ]);

  // Build lookup maps
  const rosterToOwner = {};
  rosters.forEach(r => { rosterToOwner[r.roster_id] = r.owner_id; });

  const userMap = {};
  users.forEach(u => { userMap[u.user_id] = u; });

  // Find championship (p:1) and 3rd place (p:3) matches
  let champ = null, third = null;
  bracket.forEach(m => {
    if (m.p === 1) champ = m;
    if (m.p === 3) third = m;
  });

  if (!champ) return null;

  const podiumRosterIds = [
    champ.w,                          // 1st
    champ.l,                          // 2nd
    third ? third.w : null,           // 3rd
  ];

  return podiumRosterIds.map((rosterId, i) => {
    if (!rosterId) return null;
    const ownerId = rosterToOwner[rosterId];
    const user = userMap[ownerId] || {};
    const teamName = user.metadata?.team_name || user.display_name || 'Unknown';
    const manager = user.display_name || 'Unknown';
    const avatar = avatarUrl(user);
    return { place: i + 1, teamName, manager, rosterId, avatar };
  });
}

export function avatarUrl(user) {
  // Prefer custom team logo, fall back to user avatar, then null
  const custom = user.metadata?.avatar;
  if (custom) return custom;
  if (user.avatar) return `https://sleepercdn.com/avatars/${user.avatar}`;
  return null;
}
