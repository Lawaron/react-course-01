const NextButton = ({ dispatch, answer, index }) =>
  answer !== null && (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );

export default NextButton;
