import React from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";
import Particle from "../SubComponents/Particle";

const Div = styled.div`
  width: 100%;
  height: 75vh;
  padding: 10vw 5vw;
  background: url(${bg});
  position: relative;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Box = styled.div`
  width: 96%;
  padding: 5vw;
  height: 98%;
  border-radius: 4px;
  margin: 20px auto;
  z-index: 4;

  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.07);

  .ayat {
    color: white;
    font-family: "Noto Naskh Arabic", serif;
    font-size: 40px;
    text-align: right;
    margin-bottom: 10px;
  }

  .arti {
    color: white;
    font-family: "Luxurious Roman", cursive;
    font-size: 20px;
    position: relative;
    padding: 5px 10px;
  }

  @media (max-width: 480px) {
    & {
      height: 300px;
      margin: 100px auto;
    }
  }
  @media (max-width: 360px) {
    & {
      height: 400px;
      margin: 60px auto;
    }
  }
`;
const Intro = () => {
  return (
    <Div>
      <Particle />
      <Box>
        <p className="ayat">اِنَّ اللّٰہَ مَعَ الَّذِیۡنَ اتَّقَوۡا وَّ الَّذِیۡنَ ہُمۡ مُّحۡسِنُوۡنَ</p>
        <p className="arti">"Sungguh, Allah beserta orang-orang yang bertakwa dan orang-orang yang berbuat kebaikan"</p>
      </Box>
    </Div>
  );
};

export default Intro;
