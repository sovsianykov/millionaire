import React, {memo, useCallback, useMemo, useState} from "react";
import styles from "./Answer.module.scss";
import cn from "classnames";
import AnswerContent from "./AnswerContent";



const Answer = ({ title, letter, onClick, id, correct }) => {


  const [active, setActive] = useState(false);


  let classNames = useMemo(
    () =>
      cn({
        [styles.question_inactive]: true,
        [styles.question_wrong]: id !== correct && active,
        [styles.question_correct]: id === correct && active,
      }),
    [id, correct, active]
  );

  const onClickHandler = useCallback(() => {

    onClick(id);
    setActive(true);
  }, [id, setActive,onClick]);

  return (
    <div className={styles.question}>
      <div className={styles.line} />
      <div className={classNames} onClick={onClickHandler}>
        <AnswerContent title={title} letter={letter} />
        <div className={styles.line_right} />
      </div>
    </div>
  );
};

export default memo(Answer);
