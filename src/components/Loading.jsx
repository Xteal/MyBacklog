export default function Loading() {
    return (
        <div className="flex justify-center items-center w-full py-5 text-center flex-col">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-myPink"></div>
            <div className="text-4xl font-bold mt-5">Cargando...</div>
        </div>
    )
} 