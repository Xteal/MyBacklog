import Link from "next/link"
import Score from '@/components/Score';
import Image from 'next/image';
import { slugify } from '@/utils/slugify';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function GameItem({game}) {  
    return (
        <Link href={`/juego/${slugify(game.name)}`}>
            <div className={`shadow-lg rounded-lg overflow-hidden ease-in-out duration-300 hover:scale-105 bg-[#0a0a0a] border-2 border-transparent hover:border-myPink`}>
            <div className='relative'>
                {game.state==="SI" && 
                    <div className='absolute flex justify-end pt-2 pr-2 top-0 right-0 h-16 w-16 z-20' style={{'background':"linear-gradient(to top right, transparent 0%, transparent 50%, #FF3F60 50%, #FF3F60 100%)"}}>
                        <CheckBadgeIcon className=" h-6 w-6 text-white" />
                    </div>
                }
                <Image src={game.imageUrl} layout="responsive" className="relative" width={460} height={215} alt="" />
            </div>
            <div className='flex items-center p-5 text-2xl'>{game.score && <Score score={game.score} /> } {game.name}</div>
            </div>
        </Link>
    )
}