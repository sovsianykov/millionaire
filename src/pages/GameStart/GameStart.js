import React from 'react';
import styles from "./GameStart.module.scss";
import handImg from "../../assets/hand/hand1.png"
import OrangeButton from "../../components/OrangeButton/OrangeButton";

const GameStart = () => {
    return (
        <main className={styles.container}>
            <section className={styles.leftSide}>
                <div className={styles.handImgWrapper}>
                    <img src={handImg} alt="hand" className={styles.handImg} />
                </div>
            </section>
            <section className={styles.rightSide}>
                <h1 className={styles.title}>
                    Who wants to be a millionaire ?
                </h1>
                <OrangeButton onClick={() =>{
                    console.log("start")}}>Start</OrangeButton>
            </section>
            <section className={styles.inner}>
            </section>
        </main>
    );
};

export default GameStart;