import React from "react";
import styled from "styled-components";
import { Loading } from "../SubComponents/AllSvg";

const Div = styled.div`
  width: 75%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-top: 30px;

  svg {
    margin: auto;
    width: 10vw;
  }
  @media (max-width: 560px) {
    position: absolute;
    height: 75%;
    top: auto;
    width: 100%;
    bottom: 0;

    svg {
      width: 100px;
      height: 100px;
    }
  }
`;
const PreLoader = () => {
  return (
    <Div>
      <Loading />
    </Div>
  );
};

export default PreLoader;
