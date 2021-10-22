import React from "react";
import styles from "./Game.module.scss";
import AnswersBlock from "./AnswersBlock";
import SideBar from "../../components/SideBar/SideBar";
import { useSelector } from "react-redux";
import GameOver from "../GameOver/GameOver";

const Game = () => {
  const { question, turn, gameOver } = useSelector(
    (state) => state.answerReducer
  );

  if (gameOver) {
    return <GameOver />;
  }

  return (
    <div className={styles.game}>
      <main className={styles.main}>
        <h1 className={styles.questionTitle}>{question.question}</h1>
        <AnswersBlock question={question.content} correct={question.correct} />
      </main>
      <SideBar turn={turn} />
    </div>
  );
};

export default Game;
