import { CHECK_THE_ANSWER } from "./constants";


function checkAnswer(i) {

    return dispatch  =>   {
        dispatch({
        type: CHECK_THE_ANSWER,
        payload: i
        })
    }

}