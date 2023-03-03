
import Layout from '@/components/Layout';
import useFetchGames from '@/hooks/useFetchGames';
import GameList from '@/components/game/GameList';
import Loading from '@/components/Loading';

export default function Home() {
  const { games, isLoading } = useFetchGames()

  return (
    <>
      <Layout title="Juegos">
          {isLoading ? <Loading /> : <GameList games={games} /> }
      </Layout>
    </>
  )
}
