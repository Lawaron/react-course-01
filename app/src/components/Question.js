import clsx from "clsx";

const getClassNames = (hasAnswered, index, answer, correctOption) => {
  return clsx("btn", "btn-option", {
    answer: index === answer,
    correct: hasAnswered && index === correctOption,
    wrong: hasAnswered && index !== correctOption,
  });
};

const Question = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div>
      <h4>{question.question}</h4>
      <ul className="options">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              className={getClassNames(
                hasAnswered,
                index,
                answer,
                question.correctOption
              )}
              onClick={() => {
                const givenPoint =
                  question.correctOption === index ? question.points : 0;

                dispatch({
                  type: "newAnswer",
                  payload: { index, point: givenPoint },
                });
              }}
              disabled={hasAnswered}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
