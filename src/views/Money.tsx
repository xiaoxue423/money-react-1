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
  return (
    <MyLayout>
      <TagsSection
        value={selected.tags}
        onChange={(tags) =>
          setSelected({
            ...selected,
            tags: tags,
          })
        }
      />
      <NoteSection
        value={selected.note}
        onChange={(note) =>
          setSelected({
            ...selected,
            note: note,
          })
        }
      />
      <TypesSection
        value={selected.type}
        onChange={(type) =>
          setSelected({
            ...selected,
            type: type,
          })
        }
      />
      <NumberPadSection
        onOk={() => {}}
        value={selected.amount}
        onChange={(amount) =>
          setSelected({
            ...selected,
            amount: amount,
          })
        }
      />
    </MyLayout>
  );
}

export default Money;
