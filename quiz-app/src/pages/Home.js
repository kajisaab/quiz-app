import React, { useState } from "react";
import Quiz from "./Quiz";

function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const data = [
    {
      id: 1,
      question: "What is the capital city of Nepal ? ",
      answers: [
        {
          text: "Bhutan",
          correct: false,
        },
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Dhaka",
          correct: false,
        },
        {
          text: "Kathmandu",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "What is Rolex famous for ",
      answers: [
        {
          text: "Flower",
          correct: false,
        },
        {
          text: "Paint",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "laptops",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which Company make Iphone ? ",
      answers: [
        {
          text: "Apple",
          correct: true,
        },
        {
          text: "Samsung",
          correct: false,
        },
        {
          text: "LG",
          correct: false,
        },
        {
          text: "Motorola",
          correct: false,
        },
      ],
    },
  ];

  return (
    <div>
      <Quiz
        data={data}
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
      />
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import {
//   QuestionAnswerContainer,
//   QuestionContainer,
//   AnswerContainer,
//   Answers,
// } from "../css/quiz";
// import { SubmitButton } from "../css/home";
// import "../css/all.css";

// function Home() {
//   const [buttonname, setButtonName] = useState("Submit");

//   const HandleSubmit = () => {
//     setButtonName("Next");
//   };

//   return (
//     <>
//       <QuestionAnswerContainer>
//         <QuestionContainer>
//           asdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
//         </QuestionContainer>
//         <AnswerContainer>
//           <div className="answer wrong">random</div>
//           <div className="answer">random</div>
//           <div className="answer">random</div>
//           <div className="answer">random</div>
//         </AnswerContainer>
//         <SubmitButton left={30} top={0.2} onClick={HandleSubmit}>
//           {buttonname}
//         </SubmitButton>
//       </QuestionAnswerContainer>
//     </>
//   );
// }

// export default Home;
