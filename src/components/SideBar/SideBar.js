import React from 'react';
import styles from "./SideBar.module.scss"
import SideBarBtn from "./SideBarBtn";
import {prise} from "../../config/config.json"


const SideBar = () => {
    console.log(prise)
    return (
        <div className={styles.sideBar}>
            {prise.map(p => (<SideBarBtn wining={false} children={p} key={p}/>))}
        </div>
    );
};

export default SideBar;