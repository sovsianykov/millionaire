import { games } from '../config/config.json'
import { prise } from '../config/config.json'
import {CHECK_THE_ANSWER, GAME_OVER, TRY_AGAIN} from "./constants";

const initialState = {
    question : games[0].questions[0],
    currentScore: prise[0],
    turn: 1,
    gameOver: false
}
const answerReducer = (state= initialState, action ) => {
    switch (action.type) {
        case CHECK_THE_ANSWER :
            return {
                ...state,
                question: games[0].questions[state.turn],
                turn: state.turn + 1
            };
        case GAME_OVER :
            return {
                ...state,
                gameOver: true
            };
        case TRY_AGAIN :
            return initialState;


        default:
            return state
    }
}

export default answerReducer;