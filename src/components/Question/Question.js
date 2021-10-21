import React, {useCallback, useMemo, useState} from 'react';
import styles from "./Question.module.scss";
import cn from "classnames";
import QuestionContent from "./QuestionContent";

const Question = () => {
    const [selected, setSelected] = useState(false)
    const [correct , setCorrect] = useState(false)


    const classNames = useMemo(() => cn({
        [styles.question_inactive]:true,
        [styles.question_selected]: selected
    }),[selected])

     const onClickHandler = useCallback(() =>{
         setSelected(true)
     },[setSelected])

    return (
        <div className={styles.question}>
         <div className={styles.line}/>
             <div className={classNames} onClick={onClickHandler}>
              <QuestionContent title={"question"} letter={"A"}/>
             <div className={styles.line_right}/>
         </div>
        </div>
    );
};

export default Question;
