import React, { useState, useEffect } from "react";

const Answers = ({ score, setScore, activeQuestion, setActiveQuestion, data, handleNextQuestion }) => {
  const [correct, setCorrect] = useState(null);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    setCorrect(null); // Reset correct state when active question changes
  }, [activeQuestion]);

  const answers = [...data[activeQuestion].incorrect_answers, data[activeQuestion].correct_answer];
  answers.sort(() => Math.random() - 0.5);

  const handlePoints = (selectedAnswer) => {
    if (selectedAnswer === data[activeQuestion].correct_answer) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
    }
  };

  const handleAnswerClick = (e) => {
    handlePoints(e.target.innerText);
  };

  const handleNextClick = () => {
    setActiveQuestion(activeQuestion + 1);
    setShowScore(false); // Reset showScore state when moving to the next question
  };

  return (
    <div className="answers">
      {answers.map((answer, index) => (
        <button key={index} onClick={handleAnswerClick}>
          {answer}
        </button>
      ))}

      {correct === true || correct === false ? (
        correct ? <div>Correct!</div> : <div>Incorrect!</div>
      ) : null}
      <br />
      {activeQuestion < data.length - 1 ? (
        <button onClick={handleNextClick}>Next Question</button>
      ) : (
        <div>Quiz Completed!</div>
      )}
    </div>
  );
};

export default Answers;
