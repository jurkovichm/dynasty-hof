import Avatar from './Avatar'
import { SEASON_DATA } from '../data/seasonData'

function MvpSection({ leagueId, rosterId }) {
  const data = SEASON_DATA[leagueId]
  const mvp = data && data.mvps ? data.mvps[String(rosterId)] : null
  if (!mvp) return null

  const thumb = mvp.pid ? `https://sleepercdn.com/content/nfl/players/thumb/${mvp.pid}.jpg` : null

  return (
    <div className="mvp-section">
      <p className="section-label">Team MVP</p>
      <div className="mvp-row">
        {thumb && (
          <img
            className="mvp-avatar"
            src={thumb}
            alt={mvp.name}
            loading="lazy"
            onError={e => { e.target.style.display = 'none' }}
          />
        )}
        <div>
          <div className="mvp-name">{mvp.name}</div>
          <div className="mvp-stat">{mvp.pos} · {mvp.team} · {mvp.pts.toFixed(1)} pts</div>
        </div>
      </div>
    </div>
  )
}

// Visual display order in the podium: [place-2, place-1, place-3]
// place prop is 1/2/3 (actual rank), p is the player data
export default function PodiumPlace({ place, p, leagueId }) {
  const placeLabel = ['Champion', 'Runner-Up', 'Third Place'][place - 1]

  if (!p) {
    return <div className={`place-card place-${place}`}></div>
  }

  return (
    <div className={`place-card place-${place}`}>
      <div className="place-rank">{placeLabel}</div>
      <Avatar url={p.avatar} name={p.teamName} className="podium-avatar" />
      <div className="podium-team">{p.teamName}</div>
      <div className="podium-manager">@{p.manager}</div>
      <MvpSection leagueId={leagueId} rosterId={p.rosterId} />
    </div>
  )
}
