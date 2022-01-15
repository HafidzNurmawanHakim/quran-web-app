import React from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;

  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Doa = () => {
  return <Div>Doa</Div>;
};

export default Doa;
