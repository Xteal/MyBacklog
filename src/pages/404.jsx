import Layout from "@/components/Layout"

export default function notFound() {
    return (
    <>
        <Layout title="Juegos">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl">Página no encontrada</p>
        </div>
        </Layout>
    </>
    )
}