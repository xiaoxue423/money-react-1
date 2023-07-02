import { useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (inputRef.current !== null) {
      console.log("note", inputRef.current.value);
      setNote(inputRef.current.value)
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};
export { NoteSection };
