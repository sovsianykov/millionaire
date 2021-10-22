import {createStore, combineReducers} from "redux"

import answerReducer from "./answerReduser";


export  const rootReducer = combineReducers({
    answerReducer,

})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store