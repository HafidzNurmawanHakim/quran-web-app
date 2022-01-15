import React, { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Moslem } from "../SubComponents/AllSvg";

const Div = styled.div`
  margin: auto;
  @media (max-width: 720px) {
    & {
      width: 80%;
    }
  }
  @media (max-width: 640px) {
    & {
      width: 90%;
    }
  }
`;
const CardWrap = styled.div`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;

  @media (max-width: 480px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const Card = styled.div`
  width: 20vw;
  height: 15vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  :hover {
    background: white;
  }
  svg {
    width: 5vw;
    height: 5vw;
  }
  .rawi {
    font-family: "M PLUS 1 Code", sans-serif;
    margin: 5px auto;
    font-size: calc(0.5vw + 1em);
  }
  .hadits {
    font-family: "Poppins", sans-serif;
  }

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  @media (max-width: 720px) {
    & {
      width: 22vw;
      height: 16vw;
    }
  }
  @media (max-width: 640px) {
    & {
      width: 25vw;
      height: 20vw;
    }
    .hadits {
      font-size: calc(0.6vw + 0.5em);
    }
  }
  @media (max-width: 540px) {
    .rawi {
      font-size: calc(0.5vw + 0.8em);
    }
  }
  @media (max-width: 480px) {
    & {
      width: 35vw;
      height: 25vw;
      margin: auto;
    }
    svg {
      width: 7vw;
      height: 7vw;
    }
    .rawi {
      font-size: calc(0.5vw + 0.9em);
    }
    .hadits {
      font-size: calc(0.6vw + 0.6em);
    }
  }
`;
const SelectSection = (props) => {
  const [hadits, setHadits] = useState([]);

  useEffect(() => {
    fetch("https://api.hadith.sutanlab.id/books")
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setHadits(data);
        console.log(res);
      });
  }, []);

  const handleClick = (e) => {
    let rawi = e.target.id;
    props.setSelected(true);
    props.setRawi(rawi);
    props.setLoad(true);

    if (e.target.id === "") {
      return props.setRawi(e.target.parentElement.id);
    }
  };
  return (
    <Div>
      <CardWrap>
        {hadits.map((rawi, index) => {
          return (
            <Card onClick={handleClick} id={rawi.id} key={index}>
              <Moslem id={rawi.id} />

              <h2 className="rawi" id={rawi.id}>
                {rawi.name}
              </h2>
              <p className="hadits" id={rawi.id}>
                {rawi.available} Hadits
              </p>
            </Card>
          );
        })}
      </CardWrap>
    </Div>
  );
};

export default SelectSection;
