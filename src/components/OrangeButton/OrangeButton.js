import React from 'react';
import styles from "./OrangeButton.module.scss"

const OrangeButton = ({children,onClick}) => {
    return (
        <div className={styles.btnBig} onClick={onClick}>
           <div className={styles.title} >{children}</div>
        </div>
    );
};

export default OrangeButton;