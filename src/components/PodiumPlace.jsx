import Avatar from './Avatar'
import LombardiTrophy from './LombardiTrophy'
import { MEDAL, PLACE_LABEL, SEASON_DATA } from '../data/seasonData'

function MvpSection({ leagueId, rosterId, place }) {
  const data = SEASON_DATA[leagueId]
  const mvp = data && data.mvps ? data.mvps[String(rosterId)] : null
  if (!mvp) return null

  const thumb = mvp.pid ? `https://sleepercdn.com/content/nfl/players/thumb/${mvp.pid}.jpg` : null

  return (
    <div className="mvp">
      <span className="mvp-tag">★ Team MVP</span>
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
        <div className="mvp-info">
          <span className="mvp-name">{mvp.name}</span>
          <span className="mvp-meta">{mvp.pos} · {mvp.team} · {mvp.pts.toFixed(1)} pts</span>
        </div>
      </div>
    </div>
  )
}

// Visual display order in the podium: [place-2, place-1, place-3]
// place prop is 1/2/3 (actual rank), p is the player data
export default function PodiumPlace({ place, p, leagueId }) {
  const cssClass = `place-${place}`

  // For the center (1st place), show LombardiTrophy; for others show medal emoji
  const medalEl = place === 1
    ? <div className="medal"><LombardiTrophy /></div>
    : <div className="medal">{MEDAL[place - 1]}</div>

  const label = PLACE_LABEL[place - 1]

  if (!p) {
    return <div className={`podium-place ${cssClass}`}></div>
  }

  return (
    <div className={`podium-place ${cssClass}`}>
      <div className="place-card">
        {medalEl}
        <div className="avatar-wrap">
          <Avatar url={p.avatar} name={p.teamName} className="avatar" />
        </div>
        <div className="place-label">{label}</div>
        <div className="team-name">{p.teamName}</div>
        <div className="manager-name">@{p.manager}</div>
        <MvpSection leagueId={leagueId} rosterId={p.rosterId} place={place} />
      </div>
      <div className="podium-bar"></div>
    </div>
  )
}
