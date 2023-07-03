import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;

type Props = { value: "-" | "+"; onChange: (v: "-" | "+") => void };

const TypesSection: React.FC<Props> = (props) => {
  const typeMap = { "-": "支出", "+": "收入" };
  type Keys = keyof typeof typeMap;
  const [typeList] = useState<Keys[]>(["-", "+"]);
  const type = props.value

  return (
    <Wrapper>
      <ul>
        {typeList.map((c) => (
          <li
            key={c}
            className={type === c ? "selected" : ""}
            onClick={() => {
              props.onChange(c)
            }}
          >
            {typeMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export { TypesSection };
