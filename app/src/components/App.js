import { useEffect, useReducer } from "react";
// import DateCounter from "./DateCounter.js";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import NextButton from "./NextButton";
import StartScreen from "./StartScreen";
import Question from "./Question";

// const API_URL = "http://host.docker.internal/questions";

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) =>
  ({
    dataReceived: (payload) => ({
      ...state,
      questions: payload,
      status: "ready",
    }),
    dataFailed: () => ({ ...state, status: "error" }),
    start: () => ({ ...state, status: "active" }),
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
    finish: () => ({ ...state, status: "finished" }),
  }[action.type]?.(action.payload) || state);

export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
                <Question
                  question={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                />
                <NextButton
                  {...{
                    dispatch,
                    answer,
                    index,
                  }}
                />
              </>
            ),
          }[status] || null}
        </Main>
      </div>
    </div>
  );
}
