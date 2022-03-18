import * as actions from './actionTypes';

export const increment = (nr) => {
  return {
    type: actions.COUNTER_INCREMENT,
    payload: nr
  }
}

export const decrement = () => {
  return {
    type: actions.COUNTER_DECREMENT
  }
}
