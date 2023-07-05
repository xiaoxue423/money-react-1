import { Button } from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

type Params = {
  id: string;
};

const Tag: React.FC = () => {
  const { findTag } = useTags();

  const { id } = useParams<Params>();

  const tag = id !== undefined ? findTag(parseInt(id)) : "";

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
      <div>
       
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export { Tag };
