import React, { memo, useCallback, useMemo, useState } from "react";
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

  let lineLeft = useMemo(
    () =>
      cn({
        [styles.line]: true,
        [styles.line_correct]: id === correct && active,
      }),
    [id, correct, active]
  );
  let lineRight = useMemo(
    () =>
      cn({
        [styles.line_right]: true,
        [styles.line_right_correct]: id === correct && active,
      }),
    [id, correct, active]
  );
  const onClickHandler = useCallback(() => {
    onClick(id);
    setActive(true);
  }, [id, setActive, onClick]);

  return (
    <div className={styles.question}>
      <div className={lineLeft} />
      <div className={classNames} onClick={onClickHandler}>
        <AnswerContent title={title} letter={letter} />
        <div className={lineRight} />
      </div>
    </div>
  );
};

export default memo(Answer);
