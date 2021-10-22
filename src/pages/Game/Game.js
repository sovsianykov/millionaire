import React from 'react';
import styles from "./Game.module.scss";
import {games} from "../../config/config.json"
import AnswersBlock from "./AnswersBlock";
import SideBar from "../../components/SideBar/SideBar";
import {useDispatch, useSelector} from "react-redux";

// const question = games[0].questions[0]

const Game = () => {
    // console.log(question)
    const dispatch = useDispatch()
    const { question, turn } = useSelector(state => state.answerReducer)
    console.log(question, turn)
    return (
        <div className={styles.game}>
            <main className={styles.main}>
                <h1 className={styles.questionTitle}>{question.question}</h1>
                <AnswersBlock question={question.content} correct={question.correct}/>
            </main>
            <SideBar turn={turn}/>
        </div>
    );
};

export default Game;