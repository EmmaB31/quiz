import Question from "./Question";
import { useState } from "react";


const Quizz = ({ score, setScore, data }) => {

  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <div className="quizz">
      {!data ?
        <div>Loading...</div> :
        <Question question={data[activeQuestion]} score={score} setScore={setScore} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} data={data}/>
      }
    </div>

  );
}

export default Quizz;