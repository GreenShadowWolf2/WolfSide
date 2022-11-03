import '../styles/globals.css'
import Footer from './component/Fooder'
import Header from './component/Header'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wolfs Orginisation</title>
                <lang>eng</lang>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
