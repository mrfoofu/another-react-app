import * as actions from "../actions/actionTypes";

let lastId = 0;

const counterReducer = (state = lastId, action) => {
  switch(action.type) {
    case actions.COUNTER_INCREMENT:
      return state + action.payload;
    case actions.COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
