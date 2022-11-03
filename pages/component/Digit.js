import styles from './Digit.module.css'

export default function Digit(props) {
    return(
        <div className={styles.side}>
            <h3 className={styles.digit}>{props.digit}</h3>
            <p className={styles.title}>{props.title}</p>
        </div>
    )
}