import React, { useState } from "react";
import { createId } from "lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];
interface Tag {
  id: number;
  name: string;
}
const useTags = () => {
  // 封装一个自定义Hook
  const [tags, setTags] = useState(defaultTags);

  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0];
  };

  return {
    tags,
    setTags,
    findTag,
  };
};

export { useTags };
