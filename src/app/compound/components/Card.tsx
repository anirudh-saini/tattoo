import React from "react";
import styles from "./card.module.scss";

interface CardProps {
    data: {
        heading: string;
        img: string;
        data: string;
    };
}

export default function Card({ data }: CardProps) {
    return (
        <div className={styles.card}>
            <div className=""></div>
            <div></div>
        </div>
    );
}
