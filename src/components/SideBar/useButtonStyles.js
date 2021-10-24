import { useMemo } from "react";
import styles from "./SideBarBtn.module.scss";
import cn from "classnames";


 const useButtonStyles = (wining, passed) => {
    const classNames = useMemo(
        () =>
            cn({
                [styles.moneyWin_inactive]: true,
                [styles.moneyWin_wining]: wining,
            }),
        [wining]
    );

    const cnLineLeft = useMemo(
        () =>
            cn({
                [styles.line_left]: true,
                [styles.line_left_wining]: wining,
            }),
        [wining]
    );

    const cnLineRight = useMemo(
        () =>
            cn({
                [styles.line_right]: true,
                [styles.line_right_wining]: wining,
            }),
        [wining]
    );

    const cnText = useMemo(
        () =>
            cn({
                [styles.money_content_title]: true,
                [styles.money_content_title_wining]: wining,
                [styles.money_content_title_passed]: passed,
            }),
        [passed, wining]
    );

    return {
        classNames,
        cnText,
        cnLineRight,
        cnLineLeft
    }
}
export default useButtonStyles;
