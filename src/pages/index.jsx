import { SpeedInsights } from "@vercel/speed-insights/next"
import Layout from '@/components/Layout';
import useFetchGames from '@/hooks/useFetchGames';
import GameList from '@/components/game/GameList';
import Loading from '@/components/Loading';

export default function Home() {
  const { games, isLoading } = useFetchGames()

  return (
    <>
      <SpeedInsights />
      <Layout title="Juegos">
          {isLoading ? <Loading /> : <GameList games={games} /> }
      </Layout>
    </>
  )
}
