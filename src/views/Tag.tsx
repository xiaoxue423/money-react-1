import React from "react";
import Layout from "../components/Layout";
import { useTags } from "useTags";

function Tag() {
  useTags()
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

export default Tag;
