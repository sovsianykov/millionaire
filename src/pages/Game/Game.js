import React from 'react';
import styles from "./Game.module.scss";
import {games} from "../../config/config.json"
import AnswersBlock from "./AnswersBlock";
import SideBar from "../../components/SideBar/SideBar";

const question = games[0].questions[0]

const Game = () => {
    console.log(question)
    return (
        <div className={styles.game}>
            <main className={styles.main}>
                <h1 className={styles.questionTitle}>{question.question}</h1>
                <AnswersBlock question={question.content}/>
            </main>
            <SideBar/>
        </div>
    );
};

export default Game;