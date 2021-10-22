import { CHECK_THE_ANSWER, GAME_OVER, TRY_AGAIN } from "./constants";

export const checkoutAnswer = (counter) => {
  return (dispatch) => {
    dispatch({
      type: CHECK_THE_ANSWER,
      payload: counter,
    });
  };
};

export const setGameOver = () => {
  return (dispatch) => {
    dispatch({
      type: GAME_OVER,
    });
  };
};

export const tryAgain = () => {
  return (dispatch) => {
    dispatch({
      type: TRY_AGAIN,
    });
  };
};
