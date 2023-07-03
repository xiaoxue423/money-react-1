import React from "react";
import Layout from "../components/Layout";
import { useTags } from "useTags";
import styled from "styled-components";
import Icon from "components/Icon";

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 16px;
`;
function Tag() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <span className="oneLine">
              {tag}
              很长很长很长很长很长很长很长很长很长很长很长很长长很长很长很长很
            </span>
            <Icon name="right" />
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tag;
