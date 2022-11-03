import Article from './component/Article'
import Digit from './component/Digit'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <section className={styles.home} id="home">
                <article className={styles.article}>
                    <div className={styles.articleImg}><Image layout='fill' alt={'Tontracker fürs Wolfpack Tracken'} src={'/d3efc8.jpg'} ></Image></div>
                    <h2>Akustisches Wolfs-Monitoring</h2>
                    <p>Wo sich Wolfsrudel genau aufhalten, ist nicht immer einfach zu bestimmen. Studierende von der EPFL Lausanne haben ein digitales Akustik-Gerät entwickelt, mit dem Wolfsgeheul auf 500 Meter genau geortet werden kann</p>
                </article>
                <article className={styles.article}>
                    <h2>Zahlen 2021</h2>
                    <div className={styles.digits}>
                        <Digit digit="200" title="Member" />
                        <Digit digit="17" title="Welpen" />
                        <Digit digit="65" title="Weibchen" />
                        <Digit digit="107" title="Mänchen" />
                        <Digit digit="17" title="Rudel" />
                    </div>
                </article>
            </section>
            <section className={styles.articles} id="article">
                <Article title="WOLF SEMINAR 2022" alt="Wolf Bild" src="/08-2019_ParcAnimalierSainteCroix_06-2018_1DX_9591_424x259_300dpi.8c86f882.jpg" text="ÜBER WÖLFE UND HERDENSCHUTZ" />
                <Article title="UNSERE HERDEN-SCHUTZ-PROJEKTE 2022" alt="Hund und eine Geis auf einer Wise" src="/AlpCulmDaSterls_06-2021_1DX_8519_red50.8d6d6bf8.jpg" text="CHWOLF unterstützt jedes Jahr Herdenschutzmassnahmen auf diversen gefährdeten Alpen in der Schweiz. Die Projekte werden aktiv begleitet und es wird aktuell über die Alpsituation, die Massnahmen und Erfolge berichtet." />
                <Article title="WOLFAPRÄSENZ SCHWEIZ" alt="Rudel und Sichtungskarte Wölfe der Schweiz" src="/Bild_CH-Verbreitungskarte-2020_high-res_header-content.e473f6d9.jpg" text="CHWOLF führt eine jährliche Übersichtskarte und eine Liste der aktuellen und nachgewiesenen Wolfspräsenz in der Schweiz." />
            </section>
        </main>
    )
}
