import { SEASON_DATA } from '../data/seasonData'

export default function SeasonStory({ leagueId }) {
  const data = SEASON_DATA[leagueId]
  if (!data || !data.blurb) return null

  return (
    <div className="season-story">
      <div className="story-head">📖 The Season in Review</div>
      {/* blurb contains <b> tags and &amp; — safe because it's hardcoded in our own seasonData.js */}
      <p className="story-body" dangerouslySetInnerHTML={{ __html: data.blurb }} />
    </div>
  )
}
