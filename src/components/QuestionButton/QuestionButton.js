import React from 'react';
import styles from "./QuestionButton.module.scss";

const QuestionButton = () => {
    return (
      <div className={styles.questionBtn}>
          <div className={styles.line}/>
          <div className={styles.main}>
              <div className={styles.up}/>
              <div className={styles.content}><span>A</span> Some Content</div>
              <div className={styles.down}/>
          </div>
          <div className={styles.line_right}/>
      </div>
    );
};

export default QuestionButton;
