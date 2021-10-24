import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import thunk from "redux-thunk";
import answerReducer from "./answerReduser";


export  const rootReducer = combineReducers({
    answerReducer: answerReducer

})

const store = createStore(rootReducer, compose( applyMiddleware(thunk)))

export default store