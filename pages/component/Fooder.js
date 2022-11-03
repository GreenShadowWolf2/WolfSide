import { useState } from 'react'
import styles from './Fooder.module.css'

export default function Footer() {
    const [showModal, setShowModal] = useState(false)
    return (
        <footer className={styles.footer}>
            <section className={showModal ? styles.modal : styles.none}>
                <button className={styles.button} onClick={() => setShowModal(false)}>X</button>
                <div className={styles.values}>
                    <h2>Impressum</h2>
                    <p>GIBB Berufsschule</p>
                    <p>Lorrainestrasse 1, 3013 Bern</p>
                    <p>Silvan Flückiger</p>
                    <p>sfl132385@iet-gibb.ch</p>
                </div>

            </section>
            <div className={styles.footercontent}>
                <a><h3 onClick={() => setShowModal(!showModal)}>Impressum</h3></a>
                <form onSubmit={() => alert("Thank you for the Message. We will process it as soon as Possible")}>
                    <h3>Kontaktieren Sie uns</h3>
                    <div className={styles.flexColum}>
                        <div className={styles.flex}>
                            <label for={"email"}>E-Mail</label>
                            <input className={styles.inputField} name={"email"} type={"email"} id="email"></input>
                        </div>
                        <div className={styles.flex}>
                            <label for={"texta"}>Text</label>
                            <textarea className={styles.inputField} name={"texta"} id="texta"></textarea>
                        </div>
                        <input type={"submit"} ></input>
                    </div>
                </form>
            </div>
        </footer>
    )
}