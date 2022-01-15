import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";
import PreLoader from "../Components/PreLoader";
import SelectSection from "../Components/SelectSection";
import { AyatNumber, LeftArrow, Moslem } from "../SubComponents/AllSvg";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;

  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 480px) {
    & {
      height: auto;
      padding-bottom: 50px;
    }
  }
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  max-height: 550px;

  display: flex;
  justify-content: center;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  .back {
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    cursor: pointer;
    color: white;
    transition: 0.3s;
    svg {
      transition: 0.3s;
      fill: white;
    }
  }
  .back:hover {
    transform: scale(0.95);
    svg {
      transform: translateX(-5px);
      fill: black;
    }
  }

  @media (max-width: 360px) {
    & {
      max-height: 530px;
    }
  }

  @media (max-width: 560px) {
    & {
      flex-direction: column;
    }
    .back {
      left: auto;
      bottom: auto;
      right: 10px;
      top: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      max-height: 700px;
    }
  }
`;
const Nav = styled.div`
  color: white;
  width: 25vw;
  padding: 2vw;
  border-radius: 5px 0 0 5px;
  transition: 0.5s;

  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  h1 {
    font-family: "M PLUS 1 Code", sans-serif;
  }

  svg {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: none;
    transform: rotate(-90deg);
    :hover {
      fill: white;
    }
  }

  @media (max-width: 480px) {
    & {
      width: 100%;
    }
  }
  @media (max-width: 560px) {
    & {
      width: 100%;
      border-radius: 5px;
    }
    svg {
      display: block;
    }
  }
`;

const Book = styled.div`
  color: white;
  width: 70vw;
  /* background: red; */
  padding: 2vw 1vw;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    & {
      padding: 0;
    }
  }
  @media (max-width: 560px) {
    & {
      width: 100%;
    }
  }
`;
const Option = styled.div`
  margin-top: 30px;
  transition: 0.2s;

  .input {
    margin: 20px auto;

    label {
      display: block;
      margin: 5px;
    }

    input {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      width: 90%;
    }
    .alert {
      color: red;
      font-size: 14px;
    }
    .max-count {
      font-size: 14px;
    }
  }

  button {
    border: none;
    width: 10vw;
    height: 3vw;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: 0.3s;
    min-width: 100px;
    min-height: 30px;

    :hover {
      background: #3cb371;
      color: white;
    }
  }
  @media (max-width: 560px) {
    input {
      width: 50% !important;
    }
  }
`;
const Sheet = styled.div`
  .ident {
    display: flex;
  }
  .title {
    font-family: "M PLUS 1 Code", sans-serif;
    /* background: red; */
    padding: 5px 20px;
    .arti-title {
      font-weight: normal;
      font-size: 15px;
    }
  }
`;
const Ayat = styled.div`
  background: rgba(0, 0, 0, 0.1);
  margin: 20px;
  color: white;
  padding: 1vw 2vw;
  border-radius: 4px;
  position: relative;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 0%;
    position: absolute;
    height: 2px;
    right: 0;
    bottom: -5px;
    opacity: 0;
    background: rgba(255, 255, 255, 0.3);
    transition: 0.3s;
  }
  &:hover:before {
    width: 60%;
    opacity: 1;
  }
  .wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .ayat {
    text-align: right;
    font-weight: normal;
    font-family: "Noto Naskh Arabic", serif;
    font-size: 30px;
  }
  svg {
    width: 60px;
    height: 60px;
    fill: white;
  }
  .arti {
    font-style: italic;
  }

  .ayat-number {
    /* background: red; */
    left: 0;
    margin: auto 10px;
    position: relative;

    .number {
      position: absolute;
      left: 49%;
      top: 44%;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 360px) {
    .ayat {
      font-size: 23px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
    .number {
      font-size: 12px;
    }
  }
`;
const Hadits = () => {
  const [selected, setSelected] = useState(false);
  const [rawi, setRawi] = useState("");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [minInput, setMinInput] = useState(0);
  const [maxInput, setMaxInput] = useState(0);
  const [alertOn, setAlertOn] = useState(false);
  const [optionOn, setOptionOn] = useState(true);

  useEffect(() => {
    fetch(`https://api.hadith.sutanlab.id/books/${rawi}?range=${min}-${max}`)
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        setData(data);
        setLoad(false);
        console.log(data, "data");
      })
      .catch((err) => console.log(err));
  }, [rawi, min, max]);

  console.log(rawi);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (minInput < 0) {
      setAlertOn(true);
    } else if (minInput > maxInput) {
      setAlertOn(true);
    } else if (maxInput - minInput > 26) {
      setAlertOn(true);
    } else {
      setLoad(true);
      setMin(minInput);
      setMax(maxInput);
    }
  };

  return (
    <Div>
      <Container>
        {selected ? (
          <>
            {" "}
            <Nav style={{ height: `${optionOn ? "auto" : "80px"}` }}>
              <h1>Hadits</h1>

              <Option style={{ opacity: `${optionOn ? 1 : 0}` }}>
                <p>Tampilkan</p>
                <form>
                  <div className="input">
                    <label>Dari</label>
                    <input type="number" placeholder={min} onChange={(e) => setMinInput(e.target.value)} onClick={() => setAlertOn(false)} />
                  </div>
                  <div className="input">
                    <label>Sampai</label>
                    <input type="number" placeholder={max} onChange={(e) => setMaxInput(e.target.value)} onClick={() => setAlertOn(false)} />
                    <p style={{ display: `${alertOn ? "block" : "none"}` }} className="alert">
                      *Masukkan Input yang valid!
                    </p>
                    <p className="max-count">*Max tampil 25 Hadits</p>
                  </div>
                  <button className="submit" onClick={handleSubmit}>
                    Terapkan
                  </button>
                </form>
              </Option>
              <span
                onClick={() => {
                  setOptionOn(!optionOn);
                }}
              >
                {" "}
                <LeftArrow />
              </span>
            </Nav>
            <Book>
              {load ? (
                <PreLoader />
              ) : (
                <Sheet>
                  <span className="ident">
                    <h2 className="title">
                      {data.name}
                      <p className="arti-title">
                        {data.requested} dari {data.available} Hadits
                      </p>
                    </h2>
                  </span>

                  {data.hadiths.map((ayat, index) => {
                    return (
                      <Ayat key={index}>
                        <div className="wrapper">
                          <span className="ayat-number">
                            <AyatNumber />
                            <p className="number">{ayat.number}</p>
                          </span>
                          <h3 className="ayat">{ayat.arab}</h3>
                        </div>
                        <p className="arti">Artinya: "{ayat.id}"</p>
                      </Ayat>
                    );
                  })}
                </Sheet>
              )}
            </Book>
          </>
        ) : (
          <SelectSection setSelected={setSelected} setRawi={setRawi} setLoad={setLoad} />
        )}
        <span className="back" style={{ display: `${selected ? "flex" : "none"}` }} onClick={() => window.location.reload()}>
          <LeftArrow />
          <p>Kembali</p>
        </span>
      </Container>
    </Div>
  );
};

export default Hadits;
