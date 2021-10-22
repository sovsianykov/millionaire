import React from "react";
import styles from "./SideBar.module.scss";
import SideBarBtn from "./SideBarBtn";
import { prise } from "../../config/config.json";

const SideBar = ({ turn }) => {

  return (
    <div className={styles.sideBar}>
      {prise.map((p, i) => (
        <SideBarBtn children={p}
                    key={p}
                    wining={i === turn - 1}
                    passed = {i < turn -1   }
        />
      ))}
    </div>
  );
};

export default SideBar;
