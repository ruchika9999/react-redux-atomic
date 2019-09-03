import { VIEWPORT_SIZE } from "./actionType";

var initialState = {
  viewPortSizes: {}
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case VIEWPORT_SIZE:
      return {
        ...state,
        viewPortSizes: action.payload
      };
    default:
      return state;
  }
};

export default ui;
