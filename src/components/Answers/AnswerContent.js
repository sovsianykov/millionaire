import React from 'react';
import styles from "./Answer.module.scss";


const AnswerContent = ({title,letter}) => {
    return (
        <div className={styles.question_content}>
           <div className={styles.question_content_letter}>{letter}</div>
           <div className={styles.question_content_title}>{title}</div>
        </div>
    );
};

export default AnswerContent;
