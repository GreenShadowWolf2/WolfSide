import { useState } from 'react'
import styles from './galerie.module.css'
import Image from 'next/image'

export default function Galerie() {
    const bilder = [
        {
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            bild: "/Fotokarte-Nr1_8738_red50.jpg",
            alt: "dummy alt"
        },
        {
            text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            bild: "/Fotokarte-Nr2_6604_red50.jpg",
            alt: "dummy alt"
        },
        {
            text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            bild: "/Fotokarte-Nr3_2106_red50.jpg",
            alt: "dummy alt"
        },
        {
            text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
            bild: "/Fotokarte-Nr5_2169_red50.jpg",
            alt: "dummy alt"
        },
    ]

    const slide = [
        styles.slide1,
        styles.slide2,
        styles.slide3,
        styles.slide4,
    ]

    const [index, setIndex] = useState(0)

    const incremend = (i) => {
        console.log("yes");
        if (index + i === 0) {
            setIndex(slide.length)
            return
        }
        if (index + i === slide.length + 1) {
            setIndex(1)
            return
        }
        setIndex(index + i)
    }

    return (
        <main>
            <article className={styles.galerie}>
                <h2 className={styles.title}>Galerie</h2>
                <button className={styles.buttonLeft} onClick={() => incremend(-1)}>{"<"}</button>
                <section className={`${styles.slideshow}`}>
                    <section className={`${styles.slides} ${slide[index]} `} >
                        {bilder.map((element, index) => {
                            return (
                                <div key={index} className={styles.object}>
                                    <div className={`${styles.img} ${styles.Image}`}><Image layout='fill' alt={element.alt} src={element.bild} ></Image></div>
                                    <p>{element.text}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>
                <button className={styles.buttonRight} onClick={() => incremend(1)}>{">"}</button>
                <section className={styles.buttons}>
                    {bilder.map((val, i) => {
                        return (
                            <button key={i} onClick={() => setIndex(i)} className={`${styles.button} ${index === i && styles.choosen}`}>{i + 1}</button>
                        )
                    })}
                </section>

            </article>
        </main>
    )
}