const average = (array, property) => {
  if (!array || array.length === 0) {
    return 0;
  }
  const values = array.map((item) => item[property]);

  const sum = values.reduce((acc, value) => acc + value, 0);

  return sum / values.length;
};

const WatchedSummary = ({ watched }) => (
  <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{average(watched, "imdbRating")}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{average(watched, "userRating")}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{average(watched, "runtime")} min</span>
      </p>
    </div>
  </div>
);

export default WatchedSummary;
