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

const TypesSection = () => {
  const [type, setType] = useState("-"); // + 表示收入 - 表示支出

  return (
    <Wrapper>
      <ul>
        <li
          className={type === "-" ? "selected" : ""}
          onClick={() => {
            setType("-");
          }}
        >
          支出
        </li>
        <li
          className={type === "+" ? "selected" : ""}
          onClick={() => {
            setType("+");
          }}
        >
          收入
        </li>
      </ul>
    </Wrapper>
  );
};
export { TypesSection };
