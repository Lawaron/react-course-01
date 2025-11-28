const FinnishScreen = ({ points, maxPossiblePoints, highScore }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points (
        {percentage.toFixed(2)}%)
      </p>
      <p className="highscore">(highScore: {highScore} points)</p>
    </>
  );
};

export default FinnishScreen;
