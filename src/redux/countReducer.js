import { types } from "./types";

const initialState = {
  count: -1,
};

export const countReducer = (state = initialState, action) => {
  if ((action.type = types.INCREMENT)) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if ((action.type = types.DECREMENT)) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

export const changeIncrementFN = () => ({ type: types.DECREMENT });
export const changeDecrementFN = () => ({ type: types.DECREMENT });
