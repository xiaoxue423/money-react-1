import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: red;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: green;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: pink;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: yellow;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: gray;
      }
      &:nth-child(12) {
        background: green;
      }
      &:nth-child(14) {
        background: red;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  const [output, setOutPut] = useState("0");
  const onClickNumber = (v: number) => {};
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    console.log(e.target);
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) {
      return;
    }
    switch (text) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (text === "0") {
          setOutPut(text);
        } else {
          setOutPut(output + text);
        }
        console.log(text);
        break;
      case ".":
        console.log("点");
        break;
      case "删除":
        console.log("删除");
        break;
      case "清空":
        console.log("清空");
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button onClick={() => onClickNumber(1)}>1</button>
        <button onClick={() => onClickNumber(2)}>2</button>
        <button onClick={() => onClickNumber(3)}>3</button>
        <button>删除</button>
        <button onClick={() => onClickNumber(4)}>4</button>
        <button onClick={() => onClickNumber(5)}>5</button>
        <button onClick={() => onClickNumber(6)}>6</button>
        <button>清空</button>
        <button onClick={() => onClickNumber(7)}>7</button>
        <button onClick={() => onClickNumber(8)}>8</button>
        <button onClick={() => onClickNumber(9)}>9</button>
        <button className="ok">OK</button>
        <button className="zero" onClick={() => onClickNumber(0)}>
          0
        </button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
