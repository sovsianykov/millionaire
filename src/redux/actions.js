import { CHECK_THE_ANSWER } from "./constants";


 export const checkoutAnswer = (i) => {

    return dispatch  =>   {
        dispatch({
        type: CHECK_THE_ANSWER,
        payload: i
        })
    }

}