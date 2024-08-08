import { useState } from "react";
import Answer from "../answer";
import StatusMsg from "../statusMsg";

function MathQuiz() {
  let a = randomNumber();
  let b = randomNumber();

  const [score, setScore] = useState(0);
  const [status, setStatus] = useState();

  function updateStatusMsg(statusMsg) {
    setStatus(statusMsg);
  }
  function updateScore(result) {
    setScore((prev) => prev + result);
  }
  function randomNumber() {
    let random = Math.floor(Math.random() * (100 - 1) + 1);
    return random;
  }

  return (
    <div>
      <p style={{ fontSize: "18px" }}>Your score: {score}</p>
      <p style={{ display: "inline", fontSize: "18px" }}>{`${a} + ${b} = ?`}</p>
      <Answer
        numbers={[a, b]}
        updateScore={updateScore}
        updateStatusMsg={updateStatusMsg}
      />
      <StatusMsg status={status} />
      {/* {score === 1 ? <p>Right answer</p> : <p>Wrong answer, try again!</p>} */}
    </div>
  );
}
export default MathQuiz;
