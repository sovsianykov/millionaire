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
    const { questions, turn } = useSelector(state => state.answerReducer)
    console.log(questions, turn)
    return (
        <div className={styles.game}>
            <main className={styles.main}>
                <h1 className={styles.questionTitle}>{questions[turn].question}</h1>
                <AnswersBlock question={questions[turn].content} correct={questions[turn].correct}/>
            </main>
            <SideBar/>
        </div>
    );
};

export default Game;