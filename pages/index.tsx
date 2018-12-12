import * as React from "react";
import SideBar from "../container/SideBar";
import styled from "@emotion/styled";

const Index = () => (
  <Home>
    <SideBar />
    <p>Hello Next.js</p>
  </Home>
);

const Home = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default Index;
