import { games } from '../config/config.json'
import { prise } from '../config/config.json'
import { CHECK_THE_ANSWER } from "./constants";

const initialState = {
    questions : games[0].questions,
    currentScore: prise[0],
    turn: 0
}
const answerReducer = (state= initialState, action ) => {
    switch (action.type) {
        case CHECK_THE_ANSWER :
            return {
                ...state,
                questions: state.questions.unshift(),currentScore: prise[state.turn],
                turn: state.turn + 1
            }
        default:
            return state
    }
}

export default answerReducer;