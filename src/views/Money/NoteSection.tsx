import { Input } from "components/Input";
import { useState, useRef, ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = { value: string; onChange: (v: string) => void };

const NoteSection: React.FC<Props> = (props) => {
  // const [note, setNote] = useState("");
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        type="text"
        label="备注"
        placeholder="在这里添加备注"
        value={note}
        onChange={onChange}
      />
    </Wrapper>
  );
};
export { NoteSection };
