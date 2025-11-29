import { useEffect, useReducer } from "react";
// import DateCounter from "./DateCounter.js";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import NextButton from "./NextButton";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinnishScreen from "./FinnishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

// const API_URL = "http://host.docker.internal/questions";

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

const reducer = (state, action) =>
  ({
    dataReceived: (payload) => ({
      ...state,
      questions: payload,
      status: "ready",
    }),
    dataFailed: () => ({ ...state, status: "error" }),
    start: () => ({
      ...state,
      status: "active",
      secondsRemaining: state.questions.length * SECS_PER_QUESTION,
    }),
    newAnswer: ({ index, point }) => ({
      ...state,
      answer: index,
      points: state.points + point,
    }),
    nextQuestion: () => ({
      ...state,
      index: state.index + 1,
      answer: null,
    }),
    finnish: () => ({
      ...state,
      status: "finnished",
      highScore: Math.max(state.points, state.highScore),
    }),
    restart: () => ({
      ...initialState,
      questions: state.questions,
      status: "ready",
    }),
    tick: () => ({
      ...state,
      secondsRemaining: state.secondsRemaining - 1,
      status: state.secondsRemaining === 0 ? "finnished" : state.status,
    }),
  }[action.type]?.(action.payload) || state);

export default function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      {/* <DateCounter />
      <DateCounter defaultDate="2025. 11. 22." maxStep={20} />
      <DateCounter defaultCount={13} defaultStep={3} /> */}
      <div className="app">
        <Header />
        <Main>
          {{
            loading: <Loader />,
            error: <Error />,
            ready: <StartScreen {...{ numQuestions }} dispatch={dispatch} />,
            active: (
              <>
                <Progress
                  {...{
                    index,
                    numQuestions,
                    points,
                    maxPossiblePoints,
                    answer,
                  }}
                />
                {questions[index] && (
                  <Question
                    question={questions[index]}
                    dispatch={dispatch}
                    answer={answer}
                  />
                )}
                <NextButton
                  {...{
                    dispatch,
                    answer,
                    index,
                    numQuestions,
                  }}
                />
                <Footer>
                  <Timer {...{ dispatch, secondsRemaining }} />
                </Footer>
              </>
            ),
            finnished: (
              <FinnishScreen
                {...{ points, maxPossiblePoints, highScore, dispatch }}
              />
            ),
          }[status] || null}
        </Main>
      </div>
    </div>
  );
}
