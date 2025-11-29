import Error from "../components/Error";
import FinnishScreen from "../components/FinnishScreen";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import NextButton from "../components/NextButton";
import Progress from "../components/Progress";
import Question from "../components/Question";
import StartScreen from "../components/StartScreen";
import Timer from "../components/Timer";

export const loading = () => <Loader />;

export const error = () => <Error />;

export const ready = ({ numQuestions }, dispatch) => (
  <StartScreen {...{ numQuestions, dispatch }} />
);

export const active = (
  {
    index,
    numQuestions,
    points,
    maxPossiblePoints,
    answer,
    questions,
    secondsRemaining,
  },
  dispatch
) => (
  <>
    <Progress
      index={index}
      numQuestions={numQuestions}
      points={points}
      maxPossiblePoints={maxPossiblePoints}
      answer={answer}
    />
    {questions[index] && (
      <Question
        question={questions[index]}
        dispatch={dispatch}
        answer={answer}
      />
    )}
    <NextButton
      dispatch={dispatch}
      answer={answer}
      index={index}
      numQuestions={numQuestions}
    />
    <Footer>
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
    </Footer>
  </>
);

export const finnished = (
  { points, maxPossiblePoints, highScore },
  dispatch
) => (
  <FinnishScreen
    points={points}
    maxPossiblePoints={maxPossiblePoints}
    highScore={highScore}
    dispatch={dispatch}
  />
);
