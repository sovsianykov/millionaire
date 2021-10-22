import { games } from '../config/config.json'
import { prise } from '../config/config.json'
import { CHECK_THE_ANSWER } from "./constants";

const initialState = {
    question : games[0].questions[0],
    currentScore: prise[0],
    turn: 1
}
const answerReducer = (state= initialState, action ) => {
    switch (action.type) {
        case CHECK_THE_ANSWER :
            return {
                ...state,
                question: games[0].questions[state.turn],
                // currentScore: prise[state.turn],
                 turn: state.turn + 1
            }
        default:
            return state
    }
}

export default answerReducer;