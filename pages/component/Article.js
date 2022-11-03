import styles from './Article.module.css'
import Image from 'next/image'

export default function Article(props) {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{props.title}</h2>
            <Image alt={props.alt} src={props.src} className={styles.img}></Image>
            <p>{props.text}</p>
        </article>
    )
}