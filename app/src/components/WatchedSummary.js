import { meanBy } from "lodash";

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
        <span>{meanBy(watched, "imdbRating")}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{meanBy(watched, "userRating")}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{meanBy(watched, "runtime")} min</span>
      </p>
    </div>
  </div>
);

export default WatchedSummary;
