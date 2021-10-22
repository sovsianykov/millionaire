import React from 'react';
import styles from "./GameOver.module.scss"
import handImg from "../../assets/hand/hand1.png";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import TotalScore from "./TotalScore";

const GameOver = () => {
    return (
        <main className={styles.container}>
            <section className={styles.leftSide}>
                <div className={styles.handImgWrapper}>
                    <img src={handImg} alt="hand" className={styles.handImg} />
                </div>
            </section>
            <section className={styles.rightSide}>
                <TotalScore>{"$8,000"} earned</TotalScore>
                <OrangeButton path='/game'>Try again</OrangeButton>
            </section>
        </main>
    );
};

export default GameOver;