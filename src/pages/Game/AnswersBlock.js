import React from "react";
import styles from "./Game.module.scss";
import Answer from "../../components/Answers/Answer";
import { useDispatch } from "react-redux";
import { checkoutAnswer, setGameOver } from "../../redux/actions";
import Claps from "../../assets/audio/winnerClaps.mp3";

const letters = ["A", "B", "C", "D"];

const AnswersBlock = ({ question, correct }) => {
  const dispatch = useDispatch();
  const audio = new Audio(Claps);
  const checkOut = (id) => {
    if (id !== correct) {
      return dispatch(setGameOver());
    }
    audio.play();
    setTimeout(() => {
      dispatch(checkoutAnswer());
    }, 1000);
  };
  return (
    <section className={styles.answersBlock}>
      {question.map((q, i) => (
        <Answer
          key={q}
          title={q}
          letter={letters[i]}
          id={i}
          onClick={checkOut}
          correct={correct}
        />
      ))}
    </section>
  );
};

export default AnswersBlock;
