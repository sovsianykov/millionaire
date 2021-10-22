import React from 'react';
import styles from "./OrangeButton.module.scss"
import { Link } from "react-router-dom";

const OrangeButton = ({children,path}) => {
    return (
        <Link to={path} className={styles.btnBig} >
           <div className={styles.title} >{children}</div>
        </Link>
    );
};

export default OrangeButton;