import React from "react";
import styles from "./Game.module.scss";
import Question from "../../components/Question/Question";

const letters = ["A", "B", "C", "D"];
const AnswersBlock = ({ question,correct }) => {
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
