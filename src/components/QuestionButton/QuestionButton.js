import React from 'react';
import styles from "./QuestionButton.module.scss";

const QuestionButton = () => {
    return (
        <div className={styles.main}>
             <div className={styles.up}/>
              <h3 className={styles.content}>Some Content</h3>
             <div className={styles.down}/>
        </div>
    );
};

export default QuestionButton;