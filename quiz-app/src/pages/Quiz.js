import React, { useState, useEffect } from "react";
import {
  QuestionAnswerContainer,
  QuestionContainer,
  AnswerContainer,
} from "../css/quiz";
import { SubmitButton } from "../css/home";
import "../css/all.css";

function Quiz({ data, questionNumber, setQuestionNumber }) {
  const [buttonname, setButtonName] = useState("Submit");
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const SelectAnswer = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      setScore(a.correct ? score + 1 : score);
      setButtonName(
        questionNumber === 3 ? "Restart" : a.id !== 3 ? "Next" : "Submit"
      );
    }, 30);
  };

  const HandleSubmit = () => {
    if (buttonname === "Next") {
      if (questionNumber < 3) {
        setQuestionNumber(questionNumber + 1);
        setButtonName("Submit");
      } else {
        setQuestionNumber(1);
      }
    } else if (buttonname === "Restart") {
      alert(score);
      setScore(0);
      setButtonName("Submit");
      setQuestionNumber(1);
    }
  };

  return (
    <>
      <QuestionAnswerContainer>
        <QuestionContainer>{question?.question}</QuestionContainer>
        <AnswerContainer>
          {question?.answers.map((a) => (
            <div
              onClick={() => SelectAnswer(a)}
              className={selectedAnswer === a ? className : "answer"}
            >
              {a.text}
            </div>
          ))}
        </AnswerContainer>
        <SubmitButton
          left={25}
          top={0.2}
          onClick={HandleSubmit}
          //   onClick={
          //     buttonname === "Next"
          //       ? HandleSubmit
          //       : buttonname === "Restart" && RestartButton
          //   }
        >
          {buttonname}
        </SubmitButton>
      </QuestionAnswerContainer>
    </>
  );
}

export default Quiz;
