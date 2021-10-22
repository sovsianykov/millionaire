import React from 'react';
import styles from "./GameOver.module.scss"

const TotalScore = ({children}) => {
    return (
        <>
            <h5 className={styles.subTitle}>Total score</h5>
            <h4 className={styles.title}>{children}</h4>
        </>
    );
};

export default TotalScore;