import GameItem from "./GameItem";

export default function GameList({games = []}) {
    return(
        <div className='relative grid gap-6 lg:grid-cols-2 xl:grid-cols-3 container mx-auto mt-5 px-10'>
            {games.map((game,index) => 
                <GameItem game={game} key={index} />
            )}
        </div>
    )
}