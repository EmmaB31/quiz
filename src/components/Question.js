import Answers from "./Answers";
import { useState } from "react";

const Question = ({ question, score, setScore, activeQuestion, setActiveQuestion, data }) => {

  const [showScore, setShowScore] = useState(false)
  const handleNextQuestion = () => {
    setActiveQuestion(activeQuestion + 1);
}
  return (
    <div className="question">
      <h2>Question {activeQuestion +1} of {data.length}</h2>
        {data[activeQuestion].question}

      <Answers question={data[activeQuestion]} score={score} setScore={setScore} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} data={data} handleNextQuestion={handleNextQuestion}/>
    </div>
  );
}

export default Question;