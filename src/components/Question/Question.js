import React, {useCallback, useMemo, useState} from 'react';
import styles from "./Question.module.scss";
import cn from "classnames";
import QuestionContent from "./QuestionContent";
import {useDispatch} from "react-redux";
import {checkoutAnswer} from "../../redux/actions";

const Question = ({title,letter,onClick,id,correct}) => {
    const dispatch = useDispatch()
    const [isCorrect , setIsCorrect] = useState(0)


    const classNames = useMemo(() => cn({
        [styles.question_inactive]:true,
        [styles.question_correct]: isCorrect === 1
    }),[isCorrect])

     const onClickHandler = useCallback(() =>{
         onClick(id)
         if (id === correct) {
             setIsCorrect(1)
         }
         setTimeout(() =>{dispatch(checkoutAnswer(id))},1000)

     },[id])

    return (
        <div className={styles.question}>
         <div className={styles.line}/>
             <div className={classNames} onClick={onClickHandler}>
              <QuestionContent title={title} letter={letter}/>
             <div className={styles.line_right}/>
         </div>
        </div>
    );
};

export default Question;
