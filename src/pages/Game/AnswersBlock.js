import React from "react";
import styles from "./Game.module.scss";
import Question from "../../components/Question/Question";
import { useDispatch } from "react-redux";
import {checkoutAnswer} from "../../redux/actions";

const letters = ["A", "B", "C", "D"];
const AnswersBlock = ({ question,correct }) => {
    const dispatch = useDispatch()
  // console.log(question);
  const checkOut = (id) => {
      console.log(id,correct)
  };
  return (
    <section className={styles.answersBlock}>
      {question &&
        question.map((q, i) => (
          <Question key={q} title={q} letter={letters[i]} id={i} onClick={checkOut} correct={correct} />
        ))}
    </section>
  );
};

export default AnswersBlock;
