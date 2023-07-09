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

  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, obj: { name: string }) => {
    // 获取你要改的tag的下标
    const index = findTagIndex(id);
    // vue:tags.splice(index,1,{id:id,name:obj.name})  react不推荐改原数组  react强调不可变数据
    // 深拷贝tags 得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把tagsClone的第 index 删掉，换成{id:id,name:obj.name}
    tagsClone.splice(index, 1, { id: id, name: obj.name });
    setTags(tagsClone);
  };

  const deleteTag = (id: number) => {
    const index = findTagIndex(id);

    // 深拷贝tags 得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把tagsClone的第 index 删掉，换成{id:id,name:obj.name}
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };

  return {
    tags,
    setTags,
    updateTag,
    findTag,
    deleteTag
  };
};

export { useTags };
