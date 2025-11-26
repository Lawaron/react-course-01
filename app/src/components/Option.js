import clsx from "clsx";

const Option = ({ option, index, answer, correctOption, onSelect }) => {
  const hasAnswered = answer !== null;
  const isSelected = index === answer;
  const isCorrect = index === correctOption;

  return (
    <li>
      <button
        className={clsx("btn", "btn-option", {
          answer: isSelected,
          correct: hasAnswered && isCorrect,
          wrong: hasAnswered && !isCorrect,
        })}
        onClick={() => {
          onSelect(index, isCorrect);
        }}
        disabled={hasAnswered}
      >
        {option}
      </button>
    </li>
  );
};

export default Option;
