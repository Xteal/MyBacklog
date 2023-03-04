import Layout from '@/components/Layout';
import Score from '@/components/Score';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';
import useFetchGames from '@/hooks/useFetchGames';
import Loading from '@/components/Loading';

export default function Slug() {
    const router = useRouter()
    const slug = router.query.slug
    const { game, isLoading } = useFetchGames(slug)

  return (
    <Layout title={game ? game.name : "Cargando..."}>
    {isLoading ? 
        <Loading /> :
        <>
            {game!=null && (
            <>
                <div className='relative mt-5 container mx-auto overflow-hidden px-10 xl:px-0'>
                    <Image src={game.imageUrl} className="rounded-lg" layout="responsive" width={460} height={215} alt="" />
                </div>
                <div className='relative mt-5 container mx-auto'>
                    <div className='flex items-center text-4xl font-bold px-10'>{game.score && <Score score={game.score} /> } {game.name}</div>
                    <div className='flex items-center px-10'>
                        {game.tags !="" && game.tags.map((tag,index) => 
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
                {game.video && (               
                    <div className='bg-myGray'>
                        <div className='container mx-auto xl:py-10'>
                            <div className='flex flex-col xl:p-10 relative'>
                                <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/videoseries?list=${game.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>                
                    </div>
                )}
            </>
        )}
        </>
    } 
    
    </Layout>
  )
}