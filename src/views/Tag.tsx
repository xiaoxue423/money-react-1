import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

type Params = {
  id: string;
};

const InputWrapper = styled.div`
  background-color: white;
  padding: 16px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
  const { findTag,updateTag } = useTags();

  const { id:idString } = useParams<Params>();

  const tag = findTag(parseInt(idString));

  const TopBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    line-height: 20px;
    padding: 14px;
    background: white;
  `;
  return (
    <Layout>
      <TopBar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            // tag.name = e.target.value;
            // console.log("tag.name", tag.name);
            updateTag(tag.id,{name:e.target.value})
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
