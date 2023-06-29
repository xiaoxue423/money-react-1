import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
//require 一个目录/文件夹
type Props = {
  name: string;
};
// name=tag
// xlinkHref="#tag"
const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name}></use>
    </svg>
  );
};

export default Icon;
