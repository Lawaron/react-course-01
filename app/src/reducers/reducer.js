export const initialState = { count: 0, step: 1 };

const actionHandlers = {
  dec: (state) => ({ ...state, count: state.count - state.step }),
  inc: (state) => ({ ...state, count: state.count + state.step }),
  setCount: (state, { payload: count }) => ({ ...state, count }),
  setStep: (state, { payload: step }) => ({ ...state, step }),
  reset: () => initialState,
};

export const reducer = (state, action) => {
  const handler = actionHandlers[action.type];

  if (!handler) throw new Error(`Unhandled action type: ${action.type}`);

  return handler(state, action);
};
