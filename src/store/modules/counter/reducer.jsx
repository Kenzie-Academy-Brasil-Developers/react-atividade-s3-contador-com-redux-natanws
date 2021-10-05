import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

const reducerCounter = (state = 0, { type, count }) => {
  switch (type) {
    case ADD_COUNTER:
      return count;
    case SUB_COUNTER:
      return count;
    default:
      return state;
  }
};

export default reducerCounter;
