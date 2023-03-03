export default function Score({score}) {
    const progress = (score / 10) * 100;
    const circumference = 2 * Math.PI * 20;
    const offset = circumference - (progress / 100) * circumference;
    const color = score >= 8 ? "text-green-500" : score >= 7 ? "text-yellow-500" : score >= 5 ? "text-orange-500" : "text-red-500";

    return (
        <div className="relative inline-flex w-20 h-20">
            <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <p className={`text-sm ${color} font-bold`}>{`${score}`}</p>
            </div>
            <svg className="absolute w-20 h-20 transform rotate-180">
                <circle
                className={`${color} stroke-current stroke-4`}
                cx="50%"
                cy="50%"
                r="20"
                strokeWidth={5}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
                fill="transparent"
                />
            </svg>
        </div>
    );
}