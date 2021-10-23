import React from 'react';
import styles from "./Answer.module.scss";


const AnswerContent = ({title,letter}) => {
    return (
        <div className={styles.question_content}>
           <h5 className={styles.question_content_letter}>{letter}</h5>
           <h5 className={styles.question_content_title}>{title}</h5>
        </div>
    );
};

export default AnswerContent;
