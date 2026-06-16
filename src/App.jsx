import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import TrophyCase from './components/TrophyCase'
import SeasonCard from './components/SeasonCard'
import { getLeagueChain, getPodium, fetchJSON } from './utils/api'

const API = 'https://api.sleeper.app/v1'
const ROOT_LEAGUE_ID = '1312911602885890048'

export default function App() {
  const [seasons, setSeasons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function main() {
      try {
        const chain = await getLeagueChain(ROOT_LEAGUE_ID)

        for (const league of chain) {
          const isComplete = league.status === 'complete'
          let podium = null
          let users = []
          try { users = await fetchJSON(`${API}/league/${league.league_id}/users`) } catch (_) { /* best-effort */ }
          league._users = users
          if (isComplete) {
            try { podium = await getPodium(league.league_id) } catch (_) { /* best-effort */ }
          }
          // Update state progressively so cards appear as they load
          setSeasons(prev => [...prev, { league, podium }])
        }

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    main()
  }, [])

  return (
    <>
      <Hero />

      {loading && (
        <div id="loading">
          <div className="spinner" />
          Loading league history…
        </div>
      )}

      {error && (
        <div id="loading">
          <div style={{ color: '#ff6060' }}>Error loading league data: {error}</div>
        </div>
      )}

      {seasons.length > 0 && (
        <TrophyCase seasons={seasons} />
      )}

      {seasons.length > 0 && (
        <div id="seasons">
          {seasons.map(({ league, podium }) => (
            <SeasonCard key={league.league_id} league={league} podium={podium} />
          ))}
        </div>
      )}

      <footer>
        Powered by the{' '}
        <a href="https://sleeper.com" target="_blank" rel="noreferrer">Sleeper</a>
        {' '}API &nbsp;&middot;&nbsp; Dynasty Hall of Fame
      </footer>
    </>
  )
}
