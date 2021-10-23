import React from "react";
import styles from "./OrangeButton.module.scss";
import { Link } from "react-router-dom";
import Sound from "../../utils/audio";


const OrangeButton = ({ children, path }) => {

  return (
   <div onClick={() => Sound.playClick()} >
       <Link to={path} className={styles.btnBig}>
           <div className={styles.title}>{children}</div>
       </Link>
   </div>
  );
};

export default OrangeButton;
