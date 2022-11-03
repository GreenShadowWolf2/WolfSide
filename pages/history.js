import Link from 'next/link'
import { useState } from 'react'
import styles from './history.module.css'

export default function History() {
    const texts = [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "
    ]

    const titles = [
        "Lorem Ipsum",
        "Duis autem",
        "Ut wisi enim",
        "Nam liber tempor"
    ]

    const [oben, setOben] = useState(false)

    return (
        <main className={styles.main}>
            {!oben && <div className={styles.button}><button className={styles.btext} onClick={() => setOben(!oben)}>{">"}</button></div>}
            <article className={oben ? `${styles.navigation} ${styles.oben}` : `${styles.navigation} ${styles.closed}`} onMouseLeave={() => setOben(false)}>
                <h3 className={styles.navTitle}>Navigation</h3>
                <nav className={styles.nav}>
                    {titles.map((element, index) => {
                        return (<Link key={index} href={`#${index}`}>{element}</Link>)
                    })}
                </nav>
            </article>
            <article className={styles.histories}>
                <h2>History</h2>
                {titles.map((val, index) => {
                    return (<section key={index} className={styles.part} id={index}>
                        <h3>{val}</h3>
                        <p>{texts[index]}</p>
                    </section>)
                })
                }
            </article>
        </main>
    )
}