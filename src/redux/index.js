import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  countReducer: countReducer,
});
export const store = createStore(rootReducer);
