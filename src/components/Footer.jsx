import SocialLinks from "./SocialLinks"

export default function Footer() {
    return (
        <>
        <div className="bg-myPink">
            <div className="container mx-auto p-10 text-white text-2xl xl:text-6xl font-black flex flex-col items-center justify-center">
                TENGO UN DISCORD TAMBIÉN
                <div className="mx-auto inline-flex bg-white text-myPink text-4px px-32 py-4 font-bold hover:bg-myGray hover:text-white cursor-pointer mt-5">ÚNETE</div>
            </div>
            
        </div>
        <footer className="container mx-auto p-10 grid grid-cols-2">
            <div className="">
                twitch.tv/xteal
            </div>
            <div className="flex justify-end">
                <SocialLinks />
            </div>
        </footer>
        </>
    )
}