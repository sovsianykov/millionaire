import React from 'react';
import styles from "./GameStart.module.scss";

const GameStart = () => {
    return (
        <main className={styles.container}>
            <section className={styles.leftSide}></section>
            <section className={styles.rightSide}></section>
            <section className={styles.inner}>
            </section>
        </main>
    );
};

export default GameStart;