import * as React from "react";
import { SideBar } from "../components/SideBar";
import { css } from "@emotion/core";
const Index = () => (
  <div style={container}>
    <SideBar />
    <p>Hello Next.js</p>
  </div>
);

const container = css`
  display: flex;
  flex-direction: row;
`;
export default Index;
