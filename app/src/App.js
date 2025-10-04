import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Step = ({ step, item, stepHandler }) => {
  const handleClick = () => {
    stepHandler(item);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      className={step >= item ? "active" : ""}
      onClick={handleClick}
    >
      {item}
    </div>
  );
};

const Button = ({ text, clickHandler }) => (
  <button
    style={{ backgroundColor: "#7950f2", color: "#fff" }}
    onClick={clickHandler}
  >
    {text}
  </button>
);

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => setStep((s) => Math.max(1, s - 1));

  const handleNext = () => setStep((s) => Math.min(3, s + 1));

  const handleStep = (s) => setStep(s);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, index) => (
              <Step
                step={step}
                item={index + 1}
                stepHandler={handleStep}
                key={index}
              />
            ))}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button text="Previous" clickHandler={handlePrevious} />
            <Button text="Next" clickHandler={handleNext} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
