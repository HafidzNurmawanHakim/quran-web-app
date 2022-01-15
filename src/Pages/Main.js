import React from "react";
import styled from "styled-components";
import Content from "../Components/Content";
import Intro from "../Components/Intro";

const Div = styled.div`
  width: 100%;
`;
const Main = () => {
  return (
    <Div>
      <Intro />
      <Content />
    </Div>
  );
};

export default Main;
