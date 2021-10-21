import styled from "styled-components";

export const Container = styled.form`
  max-width: 100%;
  max-height: 100%;
  background-color: ${(props) => props.bgcolor};
  position: ${(props) => props.position};
  left: ${(props) => props.left}vw;
  top: ${(props) => props.top}vh;
  padding: ${(props) => props.padding}px;
  font-size: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  min-width: ${(props) => props.minwidth}vw;
  min-height: ${(props) => props.minheight}vh;
  position: relative;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 999;
`;

export const InputSection = styled.div`
  min-width: 2vw;
  min-height: 2vh;
  text-align: ${(props) => props.txtalign};
`;

export const Text = styled.div`
  color: ${(props) => props.color};
  align-items: center;
  justify-content: ${(props) => props.jtcontent};
  display: flex;
  font-size: ${(props) => props.ftsize}rem;
  font-weight: bold;
`;

export const TextBox = styled.div`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
  position: relative;
  left: 2vw;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 15em;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 15px;
  outline: 1px solid black;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  text-indent: 10px;
  font-size: 20px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #111;
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
`;

export const SubmitButton = styled.button`
  top: ${(props) => props.top}em;
  left: ${(props) => props.left}em;
  position: relative;
  padding: 11px 1.6em;
  width: ${(props) => props.width}em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(241, 196, 15, 1);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.05);
  }
  &:disabled {
    filter: contrast(0.7);
  }
`;
