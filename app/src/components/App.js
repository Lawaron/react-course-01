import { useEffect, useReducer } from "react";
// import DateCounter from "./DateCounter.js";
import { initialState, reducer } from "../reducers/quizReducer";
import {
  loading,
  error,
  ready,
  active,
  finnished,
} from "../utils/componentRenderers";
import Header from "./Header";
import Main from "./Main";

// const API_URL = "http://host.docker.internal/questions";

const renderContent = (state, dispatch) =>
  ({ loading, error, ready, active, finnished }[state.status]?.(
    state,
    dispatch
  ) || null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  const maxPossiblePoints = state.questions.reduce(
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
          {renderContent(
            { ...state, numQuestions, maxPossiblePoints },
            dispatch
          )}
        </Main>
      </div>
    </div>
  );
}
