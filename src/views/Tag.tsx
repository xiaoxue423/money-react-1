import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";

type Params = {
  id: string;
};

const Tag: React.FC = () => {
  const { findTag } = useTags();

  const { id } = useParams<Params>();

  const tag = id !== undefined ? findTag(parseInt(id)) : "";
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
      </header>
      <div>{tag === "" ? "" : tag.name}
      <span>备注</span>
        <input
          type="text"
          placeholder="标签名"
        />
      </div>
    </Layout>
  );
};

export { Tag };
