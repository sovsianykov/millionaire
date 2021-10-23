import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import thunk from "redux-thunk";
import answerReducer from "./answerReduser";


export  const rootReducer = combineReducers({
    answerReducer: answerReducer

})

const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store