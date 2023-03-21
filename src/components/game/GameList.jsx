import GameItem from "./GameItem";
import { useState } from "react";
import GameFilters from "./GameFilters";

export default function GameList({games = []}) {
    const [filteredGames, setFilteredGames] = useState(games);

    return(
        <div className='relative container mx-auto my-5 px-10'>
            <GameFilters games={games} onChange={(e) => setFilteredGames(e)}/>
            <div className='relative grid gap-6 lg:grid-cols-2 xl:grid-cols-3 container mx-auto my-5 px-10'>
            {filteredGames.map((game,index) => 
                <GameItem game={game} key={index} />
            )}
            </div>
        </div>
    )
}