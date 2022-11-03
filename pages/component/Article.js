import styles from './Article.module.css'

export default function Article(props) {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{props.title}</h2>
            <img alt={props.alt} src={props.src} className={styles.img}></img>
            <p>{props.text}</p>
        </article>
    )
}