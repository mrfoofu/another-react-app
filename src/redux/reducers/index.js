import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import bugsReducer from "./bugs";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  bugs: bugsReducer
});

export default allReducers;
