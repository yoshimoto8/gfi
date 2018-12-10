import * as React from "react";
import { css, jsx } from "@emotion/core";

export const SideBar = () => {
  return (
    <div>
      {searchTitle.map((title: String, index: number) => {
        return <div key={index}>{title}</div>;
      })}
    </div>
  );
};

const searchTitle: Array<String> = [
  "React",
  "Typescript",
  "React Native",
  "Next"
];
