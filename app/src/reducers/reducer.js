const actionHandlers = {
  dec: (state) => ({ ...state, count: state.count - state.step }),
  inc: (state) => ({ ...state, count: state.count + state.step }),
  setCount: (state, { payload: count }) => ({ ...state, count }),
  setStep: (state, { payload: step }) => ({ ...state, step }),
  reset: (state) => state._initialState,
};

export const reducer = (state, action) =>
  actionHandlers[action.type]?.(state, action) || state;
