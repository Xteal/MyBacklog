export default function Twitch(
    {
        color = "#ffffff",
        size=24
    }
) {
    return (
        <>
        <svg viewBox="0,0,256,256" width={`${size}px`} height={`${size}px`}><g fill={color} stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{"mixBlendMode?": "normal"}}><g transform="scale(8,8)"><path d="M6.5,5l-1.5,4v16h5.5v3h3l3,-3h4.5l6,-6v-14zM9,7h16v11l-3,3h-6l-3,3v-3h-4zM14,11v6h2v-6zM19,11v6h2v-6z"></path></g></g></svg>
        </>
    )
}