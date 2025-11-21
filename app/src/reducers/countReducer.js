const actionHandlers = {
  inc: (state, _) => state + 1,
  dec: (state, _) => state - 1,
  set: (_, action) => action.payload,
};

const countReducer = (state, action) => {
  const handler = actionHandlers[action.type];

  if (handler) return handler(state, action);

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default countReducer;
