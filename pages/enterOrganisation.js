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
                            <select id="gender" name="gender" required className={styles.inputField}>
                                <option value="Women">Women</option>
                                <option value="Man">Man</option>
                                <option value="Other">Other</option>
                                <option selected disabled></option>
                            </select>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"firstname"}>First Name</label>
                            <input className={styles.inputField} name={"firstname"} type={"name"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"secondname"}>Second Name</label>
                            <input className={styles.inputField} name={"secondname"} type={"name"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"email"}>E-Mail</label>
                            <input className={styles.inputField} name={"email"} type={"email"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"adress"}>Adresse</label>
                            <input className={styles.inputField} name={"adress"} type={"adress"} required></input>
                        </div>
                        <div className={styles.flex}>
                            <label className={styles.lable} for={"tel"}>Telefon</label>
                            <input className={styles.inputField} name={"tel"} type={"tel"} required></input>
                        </div>
                        <input type={"submit"} ></input>
                    </div>
                </form>
            </article>
        </main>
    )
}