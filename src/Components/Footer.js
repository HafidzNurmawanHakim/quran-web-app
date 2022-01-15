import React from "react";
import styled from "styled-components";
import earth from "../Assets/earth.jpg";

const Div = styled.div`
  position: relative;
  height: 100vh;
  color: white;
  background: url(${earth}) no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 560px) {
    padding-top: 50px;
  }
`;
const Caption = styled.div`
  text-align: center;
  h1 {
    font-family: "M PLUS 1 Code", sans-serif;
  }
`;
const Owner = styled.p`
  color: white;
  position: absolute;
  bottom: 5px;
  left: 5px;
`;
const Footer = () => {
  return (
    <Div>
      <Caption>
        <h1>Grimoire</h1>
        <p>Quran Web App</p>
      </Caption>
      <Owner>Development By HafidzNH - 2022</Owner>
    </Div>
  );
};

export default Footer;
