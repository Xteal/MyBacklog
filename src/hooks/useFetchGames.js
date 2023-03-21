import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import gameAdapter from "@/adapters/game.adapter";
import { slugify } from "@/utils/slugify";

export default function useFetchGames(slug=null) {
    const [ games, setGames ] = useState([]);
    const [ game, setGame ] = useState(null);
    const { readString } = usePapaParse();
    const [ isLoading, seIsLoading ] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            const request = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKEHI4_ABRrHExUSWLNM6S9WqU8UeEYCPljTjYJOYaT-XbRuoM0XE9VNaN5GoV2tTvDphPFGLjuifi/pub?output=csv');
            const result = await request.text()
            
            readString(result, {
                complete: async (results) => {
                    const gamesAdapted = await gameAdapter(results)
                    setGames(gamesAdapted)

                    if(slug) {
                        const game = gamesAdapted.find((game) => slugify(game.name) === slug)
                            if(game) setGame(game)
                    }
                    seIsLoading(false)
                },
            });
        }
        
        fetchGames();
    }, []);
    
    return { games, game, isLoading };
}