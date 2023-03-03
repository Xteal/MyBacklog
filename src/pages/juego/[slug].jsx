import Layout from '@/components/Layout';
import Score from '@/components/Score';
import Image from 'next/image';
import { slugify } from '@/utils/slugify';
import { usePapaParse } from 'react-papaparse';
import { useState, useEffect } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';

export default function Slug() {
    const { readString } = usePapaParse();
    const [ video, setVideo ] = useState(null);
    const [ game, setGame ] = useState(null);
    const router = useRouter()
    const slug = router.query.slug

    const parseVideo = (game) => {
        if(game.video) {
            const video = game.video.split('list=');
            const videoIdList = video[1];
            setVideo(videoIdList);
        }
    }

    useEffect(() => {
        const getGame = async () => {
            const request = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKEHI4_ABRrHExUSWLNM6S9WqU8UeEYCPljTjYJOYaT-XbRuoM0XE9VNaN5GoV2tTvDphPFGLjuifi/pub?output=csv', { next: { revalidate: 10 } });
            const result = await request.text()
 
            readString(result, {
                complete: (results) => {
                    const parseData = results.data;
                    const gamesParsed = parseData.slice(2, results.data.length)
                    const array = []
                    gamesParsed.forEach((game) => {
                        let tags = [];
                        const tagRow = game[10];
                        if(tagRow.includes(",")) {
                        tags = tagRow.split(',');
                        } 
                        array.push({
                            name: game[1],
                            state: game[2],
                            image: game[3],
                            imageUrl: game[4],
                            score: game[5],
                            best: game[6],
                            worst: game[7],
                            video: game[8],
                            review: game[9],
                            tags: tags
                        })
                    })
                    
                    const game = array.find((game) => slugify(game.name) === slug)

                    if(!game) {
                        router.push('/404');
                        return false;
                    }

                    parseVideo(game);
                    setGame(game)
                },
            });
      
        }
        

        getGame();
    })

  return (
    <>
    {game && (
        <Layout title={game.name}>
            <div className='relative mt-5 container mx-auto rounded-lg overflow-hidden px-10 xl:px-0'>
                <Image src={game.imageUrl} layout="responsive" width={460} height={215} alt="" />
            </div>
            <div className='relative mt-5 container mx-auto'>
                <div className='flex items-center text-4xl font-bold px-10'>{game.score && <Score score={game.score} /> } {game.name}</div>
                <div className='flex items-center px-10'>
                    {game.tags.map((tag,index) => 
                        <div key={index} className='bg-myGray text-white text-sm font-bold px-4 py-2 rounded-full mr-5'>{tag}</div>
                    )}
                </div>
                {game.review &&
                    <div className='flex flex-col p-10'>
                        {game.review}
                    </div>
                }
                <div className='grid xl:grid-cols-2 gap-6'>
                    {game.best &&
                        <div className='flex flex-col p-10 text-green-500 border-b-2 border-r-0 xl:border-r-2 border-[#0a0a0a]'>
                            <div className='text-2xl font-bold flex items-center mb-5'><HandThumbUpIcon className=" h-12 w-12 mr-5" /> Lo Mejor</div>
                            {game.best}
                        </div>
                    }
                    {game.worst &&
                        <div className='flex flex-col p-10 text-red-500'>
                            <div className='text-2xl font-bold flex items-center mb-5'><HandThumbDownIcon className=" h-12 w-12 mr-5" /> Lo Peor</div>
                            {game.worst}
                        </div>
                    }
                </div>
            </div>
            {video && (               
                <div className='bg-myGray'>
                    <div className='container mx-auto xl:py-10'>
                        <div className='flex flex-col xl:p-10 relative'>
                            <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/videoseries?list=${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>                
                </div>
            )}
        </Layout>
    )}
    </>
  )
}