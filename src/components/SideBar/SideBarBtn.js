import React, { memo } from "react";
import styles from "./SideBarBtn.module.scss";
import useButtonStyles from "./useButtonStyles";

const SideBarBtn = ({ wining, children, passed }) => {
  const {
      classNames,
      cnLineLeft,
      cnText,
      cnLineRight
  } = useButtonStyles(
    wining,
    passed
  );

  return (
    <div className={styles.moneyWin}>
      <div className={cnLineLeft} />
      <div className={classNames}>
        <div className={styles.money_content}>
          <h5 className={cnText}>{children}</h5>
        </div>
        <div className={cnLineRight} />
      </div>
    </div>
  );
};

export default memo(SideBarBtn);
