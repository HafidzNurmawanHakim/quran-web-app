import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Hadits, Pray, Quran } from "../SubComponents/AllSvg";

const Div = styled.div`
  background: black;
  z-index: 4;
  height: 100vh;
  text-align: center;
  padding-top: 2vw;
  h1 {
    color: white;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 5vw;
  }

  @media (max-width: 480px) {
    & {
      height: auto;
      padding-top: 100px;
    }
    h1 {
      margin-bottom: 20px;
    }
  }
`;

const Menu = styled.div`
  padding: 5vw 5vw 10vw 5vw;
  display: flex;
  justify-content: space-around;

  @media (max-width: 480px) {
    & {
      flex-direction: column;
    }
  }
`;
const Card = styled.div`
  width: 25vw;
  height: 25vw;
  border-radius: 20px;
  color: black;
  background: white;
  text-align: center;
  cursor: pointer;
  z-index: 3;
  p {
    font-size: calc(0.5vw + 1em);
    font-family: "M PLUS 1 Code", sans-serif;
  }

  svg {
    width: 10vw;
    height: 10vw;
    margin: 5vw auto 2vw;
  }
  /* background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.07); */

  @media (max-width: 480px) {
    & {
      width: 60vw;
      height: 60vw;
      margin: 5px auto 10px;
    }
    p {
      font-size: calc(0.5vw + 1.5em);
      font-family: "M PLUS 1 Code", sans-serif;
    }
    svg {
      width: 25vw;
      height: 25vw;
      margin: 15vw auto 2vw;
    }
  }
`;

const Content = () => {
  return (
    <Div>
      <h1>Qur'an Starter Pack</h1>

      <Menu>
        <Card>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="quran">
            <Quran />
            <p>Quran</p>
          </NavLink>
        </Card>
        <Card onClick={() => alert("Masih Belom Ada Data Nya Gan")}>
          <Pray />
          <p>Doa-Doa</p>
        </Card>
        <Card>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="hadits">
            <Hadits />
            <p>Hadits</p>
          </NavLink>
        </Card>
      </Menu>
    </Div>
  );
};

export default Content;
