import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import styles from './Header.module.css'
export default function Header() {
    const [oben, setOben] = useState(true)
    const router = useRouter()

    return (
        <header className={styles.header} onMouseLeave={() => setOben(false)}>
            <div className={styles.top}>
                <h1 className={styles.title} onClick={() => router.push("/")}>Wolfs Organisation</h1>
                <div className={styles.burger} onClick={() => setOben(!oben)}>
                    <div className={styles.hamburger}>
                        <span className={oben ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                        <span className={oben ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                        <span className={oben ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                    </div>
                </div>
            </div>

            <nav className={!oben ? `${styles.nav} ${styles.obenNav}` : `${styles.nav}`}>
                <a href='/#article'>Activitys</a>
                <a href='/history'>History from Wolfes</a>
                <a href='/galerie'>Galarie</a>
                <a href='/enterOrganisation'>Join Organisation</a>
            </nav>
        </header>
    )
}