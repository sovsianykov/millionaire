import React from "react";
import styles from "./Game.module.scss";
import Answer from "../../components/Answers/Answer";
import { useDispatch } from "react-redux";
import { checkoutAnswer, setGameOver } from "../../redux/actions";
import Sound from "../../utils/audio";
import { letters } from "../../config/config.json";

const AnswersBlock = ({ question, correct }) => {
  const dispatch = useDispatch();
  const checkOut = (id) => {
    if (id !== correct) {
      return dispatch(setGameOver());
    }
    Sound.playWinner();
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
