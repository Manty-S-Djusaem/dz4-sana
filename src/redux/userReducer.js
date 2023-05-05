import { types } from "./types";

const initialState = {
  users: {
    name: "",
    age: 0,
    gender: "",
  },
};

export const userReducer = (state = initialState, action) => {
  if (action.type === types.CHANGE_NAME) {
    return { ...state, users: { ...state.users, name: action.payload } };
  } else if (action.type === types.CHANGE_AGE) {
    return { ...state, users: { ...state.users, age: action.payload } };
  } else if (action.type === types.CHANGE_GENDER) {
    return { ...state, users: { ...state.users, gender: action.payload } };
  }
  return state;
};
