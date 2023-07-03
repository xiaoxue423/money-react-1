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
      <div>{tag === "" ? "" : tag.name}</div>
    </Layout>
  );
};

export { Tag };
