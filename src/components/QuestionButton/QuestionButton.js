import React from 'react';
import styles from "./QuestionButton.module.scss";

const QuestionButton = () => {
    return (
      <div className={styles.questionBtn}>
          <div className={styles.line}/>
          <div className={styles.main}>
              <div className={styles.up}/>
              <h3 className={styles.content}>Some Content</h3>
              <div className={styles.down}/>
          </div>
          <div className={styles.line_right}/>
      </div>
    );
};

export default QuestionButton;
