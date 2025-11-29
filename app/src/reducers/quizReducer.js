export const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

const dataReceived = (state, payload) => ({
  ...state,
  questions: payload,
  status: "ready",
});

const dataFailed = (state) => ({ ...state, status: "error" });

const start = (state) => ({
  ...state,
  status: "active",
  secondsRemaining: state.questions.length * SECS_PER_QUESTION,
});

const newAnswer = (state, { index, point }) => ({
  ...state,
  answer: index,
  points: state.points + point,
});

const nextQuestion = (state) => ({
  ...state,
  index: state.index + 1,
  answer: null,
});

const finnish = (state) => ({
  ...state,
  status: "finnished",
  highScore: Math.max(state.points, state.highScore),
});

const restart = (state) => ({
  ...initialState,
  questions: state.questions,
  status: "ready",
});

const tick = (state) => ({
  ...state,
  secondsRemaining: state.secondsRemaining - 1,
  status: state.secondsRemaining === 1 ? "finnished" : state.status,
});

export const reducer = (state, action) =>
  ({
    dataReceived,
    dataFailed,
    start,
    newAnswer,
    nextQuestion,
    finnish,
    restart,
    tick,
  }[action.type]?.(state, action.payload) || state);
