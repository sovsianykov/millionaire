import React from "react";
import styles from "./GameOver.module.scss";
import handImg from "../../assets/hand/hand1.png";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import TotalScore from "./TotalScore";
import { useDispatch, useSelector } from "react-redux";
import { prise } from "../../config/config.json";
import { tryAgain } from "../../redux/actions";

const GameOver = () => {
  const dispatch = useDispatch();

  const { turn } = useSelector((state) => state.answerReducer);
  const onClickHandler = () => {
      console.log('try')
    dispatch(tryAgain());
  };

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <div className={styles.handImgWrapper}>
          <img src={handImg} alt="hand" className={styles.handImg} />
        </div>
      </section>
      <section className={styles.rightSide} onClick={onClickHandler}>
        <TotalScore>{prise[turn - 1]} earned</TotalScore>
        <OrangeButton  path="/game">Try again</OrangeButton>
      </section>
    </main>
  );
};

export default GameOver;
