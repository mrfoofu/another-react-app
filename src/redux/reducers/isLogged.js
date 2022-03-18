import * as actions from "../actions/actionTypes";

let loggedInDefault = false;

const loggedReducer = (state = loggedInDefault, action) => {
  switch(action.type) {
    case actions.LOGGED_IN:
      return !state;
    default:
      return state;
  }
}

export default loggedReducer
