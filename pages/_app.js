import '../styles/globals.css'
import Footer from './component/Fooder'
import Header from './component/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wolfs Orginisation</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
