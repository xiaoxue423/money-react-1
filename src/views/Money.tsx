import React, { useState } from "react";
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

type Type = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    type: "-" as Type,
    amount: 0,
  });

  type Selected = typeof selected;

  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  return (
    <MyLayout>
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <TypesSection
        value={selected.type}
        onChange={(type) => onChange({ type })}
      />
      <NumberPadSection
        onOk={() => {}}
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
      />
    </MyLayout>
  );
}

export default Money;
