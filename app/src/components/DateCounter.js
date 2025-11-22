import useCounter from "../hooks/useCounter";

export default function DateCounter({
  defaultDate = "june 21 2027",
  defaultCount = 0,
  defaultStep = 1,
  maxStep = 10,
}) {
  const [{ count, step }, dispatch] = useCounter(defaultCount, defaultStep);

  // This mutates the date object.
  const date = new Date(defaultDate);
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max={maxStep}
          value={step}
          onChange={(e) => {
            dispatch({ type: "setStep", payload: Number(e.target.value) });
          }}
        />
        <span>{step}</span>
      </div>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "dec" });
          }}
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => {
            dispatch({ type: "setCount", payload: Number(e.target.value) });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "inc" });
          }}
        >
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
