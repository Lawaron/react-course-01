const FinnishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points (
        {percentage.toFixed(2)}%)
      </p>
      <p className="highscore">(highScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinnishScreen;
