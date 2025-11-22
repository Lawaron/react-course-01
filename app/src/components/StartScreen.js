const StartScreen = ({ numQuestions }) => (
  <div className="start">
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => {}}>
        Let's start
      </button>
    </div>
  </div>
);

export default StartScreen;
