import Image from "next/image"
import Link from "next/link"
import SocialLinks from "./SocialLinks"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-30 h-20 bg-black px-10">
            <div className="container mx-auto h-full grid grid-cols-2 items-center justify-center">
                <div className="relative text-left h-full flex items-center text-xl font-bold">
                    <Link href="/" className="flex">
                        <Image src="/logo.svg" width={20} height={20} className="mr-5" alt=""/> 
                        <div className="flex flex-col leading-3">
                            <span className="font-bold text-lg">Xteal</span>
                            <span className="text-xs text-gray-500">twitch.tv/xteal</span>
                        </div>
                    </Link>
                    
                </div>
                <div className="flex justify-end">
                    <SocialLinks />
                </div>
            </div>
        </header>
    )
}