import { useReducer } from "react";
import { reducer } from "../reducers/reducer.js";

const init = (initial) => ({
  ...initial,
  _initialState: initial,
});

export default function useCounter(initialCount = 0, initialStep = 1) {
  const initialState = { count: initialCount, step: initialStep };

  const [state, dispatch] = useReducer(reducer, initialState, init);

  return [state, dispatch];
}
