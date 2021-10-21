import styled, { keyframes } from "styled-components";

export const QuestionAnswerContainer = styled.div`
  position: absolute;
  top: 30vh;
  left: 20vw;
  background-color: blue;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const QuestionContainer = styled.div`
  width: 50vw;
  background-color: black;
  text-align: center;
  justify-content: center;
  color: white;
  padding: 50px;
  margin: 10px;
  font-size: 2rem;
  border-radius: 20px;
`;

export const AnswerContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0 0 0;
`;
