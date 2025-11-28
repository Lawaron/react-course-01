import Option from "./Option";

const Question = ({ question, dispatch, answer }) => {
  const onSelect = (index, isCorrect) => {
    dispatch({
      type: "newAnswer",
      payload: {
        index,
        point: isCorrect ? question.points : 0,
      },
    });
  };

  return (
    <div>
      <h4>{question.question}</h4>
      <ul className="options">
        {question.options.map((option, index) => (
          <Option
            {...{ option, index, answer, onSelect }}
            correctOption={question.correctOption}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Question;
