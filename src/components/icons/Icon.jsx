import Discord from "./Discord";
import Instagram from "./Instagram";
import Twitch from "./Twitch";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import Link from "next/link";

export default function Icon({icon, color="#FFFFFF", size=24, link="" }) {
    return (
        <Link href={link} target="_blank" className="mx-1">
            {icon === "youtube" && <Youtube color={color} size={size} />}
            {icon === "twitch" && <Twitch color={color} size={size} />}
            {icon === "instagram" && <Instagram color={color} size={size} />}
            {icon === "discord" && <Discord color={color} size={size} />}
            {icon === "twitter" && <Twitter color={color} size={size} />}
        </Link>
    )
}