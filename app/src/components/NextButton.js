const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return;

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finnish" })}
      >
        Finish
      </button>
    );

  return (
    index < numQuestions - 1 && (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    )
  );
};

export default NextButton;
