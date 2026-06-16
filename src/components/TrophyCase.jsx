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
    <section className="trophy-case">
      <p className="section-label">Trophy Case · {completedCount} Season{completedCount === 1 ? '' : 's'}</p>
      <table className="tc-table">
        <thead>
          <tr>
            <th>Manager</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.manager}>
              <td>
                <div className="tc-team">
                  <Avatar url={r.avatar} name={r.manager} className="tc-avatar" />
                  <div>
                    <div className="tc-name">@{r.manager}</div>
                  </div>
                </div>
              </td>
              <td className={r.g ? 'tc-gold' : 'zero'}>
                {r.g || '–'}
              </td>
              <td className={r.s ? 'tc-silver' : 'zero'}>
                {r.s || '–'}
              </td>
              <td className={r.b ? 'tc-bronze' : 'zero'}>
                {r.b || '–'}
              </td>
            </tr>
          ))}
          {zeroTrophy.length > 0 && (
            <tr>
              <td colSpan="4" style={{ color: 'var(--muted)', fontSize: '0.8rem', paddingTop: '16px' }}>
                No podium finishes: {zeroTrophy.map(m => `@${m}`).join(', ')}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}
