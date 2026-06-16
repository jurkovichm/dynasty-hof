import PodiumPlace from './PodiumPlace'

// podium = [1st, 2nd, 3rd] (index 0 = winner, index 1 = runner-up, index 2 = third)
// Visual order: 2nd on left, 1st in center, 3rd on right
export default function Podium({ podium, leagueId }) {
  const [first, second, third] = podium

  return (
    <div className="podium">
      <PodiumPlace place={2} p={second} leagueId={leagueId} />
      <PodiumPlace place={1} p={first} leagueId={leagueId} />
      <PodiumPlace place={3} p={third} leagueId={leagueId} />
    </div>
  )
}
