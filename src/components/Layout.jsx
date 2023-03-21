import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = 'Warmup' }) {
  return (
    <>
        <Head>
            <title>{`${title} | Xteal`}</title>
            <meta name="description"content="Juego a todo tipo de juegos porque me gusta y lo transmito para dejarlo guardado para la posteridad." />
            <meta name="keywords" content="gaming, twitch, xteal, streaming, gameplays, gameplay, youtube, streamer"/>
            <meta name="robots" content="index, follow" />
            <meta property="og:url" content="https://xteal.tv" />
            <meta property="og:image" content="" />
            <meta property="og:description" content="Juego a todo tipo de juegos porque me gusta y lo transmito para dejarlo guardado para la posteridad." />
            <meta  property="og:title" content={`${title} | Xteal`} />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/icon.png" />
        </Head>
        <Header />
        <main className='pt-20'>
            {children}
        </main>
        <Footer />
    </>
  )
}
