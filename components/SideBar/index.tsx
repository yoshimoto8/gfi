import * as React from "react";
import styled from "@emotion/styled";

export type SideBarProps = {
  titleList: Array<string>;
  updateTitleList: Array<string>;
  filterTitle: () => void;
};

export const SideBar: React.SFC<SideBarProps> = ({
  titleList,
  updateTitleList,
  filterTitle
}: SideBarProps) => {
  console.log(titleList, updateTitleList);
  return (
    <SideBarContainer>
      <form action="">
        <input type="text" placeholder="search" />
      </form>
      {searchTitle.map((title: String, index: number) => {
        return <List key={index}>{title}</List>;
      })}
    </SideBarContainer>
  );
};
const SideBarContainer = styled("div")`
  width: 200px;
  border-right: #ff0000 solid 1px;"
`;
const List = styled("li")`
  padding: 3px 15px;
  list-style: none;
`;

const searchTitle: Array<String> = [
  "React",
  "Typescript",
  "React Native",
  "Next",
  "Emotion"
];
