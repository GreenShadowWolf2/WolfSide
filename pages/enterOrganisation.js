import styles from './enterOrganisation.module.css'

export default function EnterOrganisation() {
    return (
        <main className={styles.main}>
            <article>
                <h2>Beitrits Formular</h2>
                <form className={styles.form} onSubmit={() => alert("Thank you for the Message. We will process it as soon as Possible")}>
                    <div className={styles.flexColum}>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"gender"}>Gender</label>
                            <select id="gender" name="gender" required className={styles.inputField} size="3" >
                                <option value="Women">Women</option>
                                <option value="Man">Man</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"firstname"}>First Name</label>
                            <input className={styles.inputField} name={"firstname"} id="firstname" type={"text"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"secondname"}>Second Name</label>
                            <input className={styles.inputField} name={"secondname"} id="secondname" type={"text"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"email"}>E-Mail</label>
                            <input className={styles.inputField} name={"email"} type={"email"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"adress"}>Adresse</label>
                            <input className={styles.inputField} name={"adress"} id="adress" type={"text"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"tel"}>Telefon</label>
                            <input className={styles.inputField} name={"tel"} id="tel" type={"tel"} required></input>
                        </div>
                        <input type={"submit"} ></input>
                    </div>
                </form>
            </article>
        </main>
    )
}