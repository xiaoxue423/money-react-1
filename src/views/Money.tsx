import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const TagsSection = styled.section`
  background-color: #fff;
  padding: 0 16px;
  > ol {
    margin: 0 -12px;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
  }
`;

const NotesSection = styled.section`
  background-color: #f5f5f5;
  border: 1px solid green;
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

const TypesSection = styled.section``;

const NumberPadSection = styled.section``;
function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <TypesSection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </TypesSection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
