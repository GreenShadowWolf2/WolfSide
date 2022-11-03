import '../styles/globals.css'
import Footer from './component/Fooder'
import Header from './component/Header'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
