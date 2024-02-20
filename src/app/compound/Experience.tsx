import React from "react";
import style from "./experience.module.scss";

const cards = [
    {
        heading: "Piercing",
        img: "/e1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
    },
    {
        heading: "Piercing",
        img: "/e1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
    },
    {
        heading: "Piercing",
        img: "/e1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
    },
];

export default function Experience() {
    return (
        <div className={style.experience}>
            <h2 className={style.heading}>Experience Art as Never before!</h2>

            <div className={style.cards}></div>
        </div>
    );

    return (
        <div className={style.experience}>
            <div className={style.heading}>
                <p>Experience Art as Never before!</p>
            </div>
            <div className={style.card}>
                <div className={style.card1}>
                    {/* <img src="/e1.png" alt="image" /> */}
                    <div>
                        <p>Piercing</p>
                        <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div className={style.card2}>
                    <img src="/e2.png" alt="image" />
                    <div>
                        <p>Piercing</p>
                        <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div className={style.card3}>
                    <img src="/e3.png" alt="image" />
                    <div>
                        <p>Detailed Tattoos </p>
                        <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
