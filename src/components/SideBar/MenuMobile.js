import React from "react";
import styles from "./MenuMobile.module.scss";
import SideBarBtn from "./SideBarBtn";
import { prise } from "../../config/config.json";

const MenuMobile = ({ turn }) => {
    return (
        <section className={styles.menuMobile}>
            {prise.map((p, i) => (
                <SideBarBtn
                    children={p}
                    key={p}
                    wining={i === turn - 1}
                    passed={i < turn - 1}
                />
            ))}
        </section>
    );
};

export default MenuMobile;
