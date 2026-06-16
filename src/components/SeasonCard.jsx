import Podium from './Podium'
import SeasonStory from './SeasonStory'

export default function SeasonCard({ league, podium }) {
  const isActive = league.status === 'in_season' || league.status === 'pre_draft'
  const badgeText = isActive ? 'Current Season' : 'Final'

  return (
    <div className="season-block">
      <div className="season-header">
        <div className="season-year">{league.season} Season</div>
        <span className="season-badge">{badgeText}</span>
      </div>

      {isActive || !podium ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
          {isActive
            ? 'Season in progress — check back after the championship.'
            : 'Results unavailable.'}
        </div>
      ) : (
        <>
          <Podium podium={podium} leagueId={league.league_id} />
          <SeasonStory leagueId={league.league_id} />
        </>
      )}
    </div>
  )
}
