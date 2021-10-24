import React, { useState } from "react";
import styles from "./Game.module.scss";
import AnswersBlock from "./AnswersBlock";
import SideBar from "../../components/SideBar/SideBar";
import { useSelector } from "react-redux";
import GameOver from "../GameOver/GameOver";
import MenuIcon from "../../assets/Menu.png";
import CloseMenuIcon from "../../assets/Union.png";
import MenuMobile from "../../components/SideBar/MenuMobile";

const Game = () => {
  const [active, setActive] = useState(false);
  const { question, turn, gameOver } = useSelector(
    (state) => state.answerReducer
  );

  if (gameOver) {
    return <GameOver />;
  }

  return (
    <div className={styles.game}>
      <main className={styles.main}>
        <div
          className={styles.menuIconWrapper}
          onClick={() => setActive(!active)}
        >
          {active ? (
            <img src={CloseMenuIcon} alt="CloseMenu" className={styles.icon} />
          ) : (
            <img src={MenuIcon} alt="menu" className={styles.icon} />
          )}
        </div>
        {active ? (
          <MenuMobile turn={turn} />
        ) : (
          <>
            <h1 className={styles.questionTitle}>{question.question}</h1>
            <AnswersBlock
              question={question.content}
              correct={question.correct}
            />
          </>
        )}
      </main>
      <SideBar turn={turn} />
    </div>
  );
};

export default Game;
