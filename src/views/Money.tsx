import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { TypesSection } from "./Money/TypesSection";
import { NumberPadSection } from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout className="hi">
      <TagsSection />
      <NoteSection />
      <TypesSection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;
