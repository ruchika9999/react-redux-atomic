import { VIEWPORT_SIZE } from "./actionType";

export function getViewPortSize(size) {
  return function(dispatch) {
    dispatch({ type: VIEWPORT_SIZE, payload: size });
  };
}
