import Avatar from './Avatar'

export default function TrophyCase({ seasons }) {
  // Aggregate medals per manager across completed seasons
  const tally = {}
  seasons.forEach(({ podium }) => {
    if (!podium) return
    podium.forEach((p, i) => {
      if (!p) return
      const key = p.manager
      if (!tally[key]) tally[key] = { manager: p.manager, avatar: p.avatar, g: 0, s: 0, b: 0 }
      // keep latest non-null avatar
      if (p.avatar) tally[key].avatar = p.avatar
      if (i === 0) tally[key].g++
      else if (i === 1) tally[key].s++
      else if (i === 2) tally[key].b++
    })
  })

  const rows = Object.values(tally)
  if (!rows.length) return null

  // Sort: golds, then silvers, then bronzes
  rows.sort((a, b) => b.g - a.g || b.s - a.s || b.b - a.b)

  const completedCount = seasons.filter(s => s.podium).length

  // Collect all unique managers seen across all seasons
  const allManagerNames = new Set()
  seasons.forEach(({ league }) => {
    if (league._users) {
      league._users.forEach(u => { if (u.display_name) allManagerNames.add(u.display_name) })
    }
  })
  const zeroTrophy = [...allManagerNames].filter(m => !tally[m])

  return (
    <div id="trophy-case">
      <div className="tc-title">🏛️ Trophy Case</div>
      <div className="tc-sub">
        All-Time Podium Finishes · {completedCount} Season{completedCount === 1 ? '' : 's'}
      </div>
      <div className="tc-cabinet">
        <div className="tc-interior">
          <table className="tc-table">
            <thead>
              <tr>
                <th>Manager</th>
                <th className="num">Gold</th>
                <th className="num">Silver</th>
                <th className="num">Bronze</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.manager}>
                  <td>
                    <div className="tc-manager">
                      <Avatar url={r.avatar} name={r.manager} className="tc-avatar" />
                      <span>@{r.manager}</span>
                    </div>
                  </td>
                  <td className={`tc-count${r.g ? '' : ' zero'}`}>
                    {r.g ? `🥇 ${r.g}` : '–'}
                  </td>
                  <td className={`tc-count${r.s ? '' : ' zero'}`}>
                    {r.s ? `🥈 ${r.s}` : '–'}
                  </td>
                  <td className={`tc-count${r.b ? '' : ' zero'}`}>
                    {r.b ? `🥉 ${r.b}` : '–'}
                  </td>
                </tr>
              ))}
              {zeroTrophy.length > 0 && (
                <tr className="tc-cobweb-row">
                  <td colSpan="4">
                    <div className="tc-cobweb-line">
                      <span className="cobweb-icon">🕸️</span>
                      <span className="cobweb-names">
                        {zeroTrophy.map(m => `@${m}`).join(', ')}
                      </span>
                      <span className="cobweb-icon">🕸️</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
