import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";
import PreLoader from "../Components/PreLoader";
import { AyatNumber } from "../SubComponents/AllSvg";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;

  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  max-height: 550px;

  display: flex;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  @media (max-width: 360px) {
    & {
      max-height: 530px;
    }
  }

  @media (max-width: 560px) {
    & {
      flex-direction: column;
      min-height: 500px;
    }
  }
`;
const Nav = styled.div`
  color: white;
  width: 25vw;
  padding: 2vw;

  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  @media (max-width: 480px) {
    & {
      width: 100%;
    }
  }
  @media (max-width: 560px) {
    & {
      width: 100%;
    }
  }
`;
// const Info = styled.div`
//   color: black;
//   margin: 20px auto;
//   width: 20vw;
//   padding: 1vw;
//   border-radius: 4px;
//   background: white;
// `;
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
  display: flex;
  flex-direction: column;

  label {
    margin: 15px 15px 15px 0;
  }

  select {
    /* color: white; */
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 8px 12px;
    outline: none;
    border-radius: 3px;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.01);

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    option {
      padding: 5px;
      cursor: pointer;

      background: rgba(255, 255, 255, 0.22);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5.7px);
      border: 1px solid rgba(255, 255, 255, 0.01);
    }
  }

  @media (max-width: 560px) {
    & {
      flex-direction: row;
      justify-content: space-around;
    }

    select {
      height: 40px;
      width: 70%;
      margin: auto 5px;
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
    &:first-child {
      border-right: 2px solid rgba(255, 255, 255, 0.3);
    }
    .type {
      display: inline;
      font-weight: normal;
      font-size: 15px;
      text-transform: capitalize;
    }
  }
  @media (max-width: 480px) {
    .title {
      font-size: calc(0.5vw + 1em);
      .arti-title {
        font-size: 14px;
      }
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
const Quran = () => {
  const [data, setData] = useState([]);
  const [surah, setSurah] = useState(1);
  const [detailSurah, setDetailSurah] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://api-alquranid.herokuapp.com/surah`)
      .then((result) => result.json())
      .then((result) => {
        setData(result.data);
        console.log(data, "result");
      })
      .catch((err) => console.log(err));
    fetch(`https://api-alquranid.herokuapp.com/surah/${surah}`)
      .then((result) => result.json())
      .then((result) => {
        setDetailSurah(result.data);
        // setLoad(false);
      })
      .catch((err) => console.log(err));

    return () => setLoad(false);
  }, [surah, data]);

  const handleChange = (e) => {
    setSurah(e.target.value);
    setLoad(true);
  };
  return (
    <Div>
      <Container>
        <Nav>
          <h1>Quran</h1>
          <Option>
            <label>Surah</label>
            <select onChange={handleChange}>
              <option defaultValue hidden>
                Surah
              </option>
              {data.map((ayat, index) => {
                return (
                  <option value={ayat.nomor} key={index}>
                    {ayat.number} {ayat.nama}
                  </option>
                );
              })}
            </select>
          </Option>
          {/* <Option> */}
          {/* <label>Ayat</label> */}
          {/* <select> */}
          {/* <option defaultValue hidden></option> */}
          {/* {data.map((ayat) => {
              return (
                <option value={ayat.asma.id.long}>
                  {ayat.number} {ayat.asma.id.long}
                </option>
              );
            })} */}
          {/* </select> */}
          {/* </Option> */}
          {/* 
          <Info>
            <p>{data[surah - 1].keterangan}</p>
          </Info> */}
        </Nav>
        <Book>
          {load ? (
            <PreLoader />
          ) : (
            <Sheet>
              <span className="ident">
                <h2 className="title">
                  {data[surah - 1].name} <p className="arti-title">{data[surah - 1].arti}</p>
                </h2>
                <h2 className="title">
                  {data[surah - 1].asma} <p className="type">{data[surah - 1].type}</p>
                </h2>
              </span>

              {detailSurah.map((ayat, index) => {
                return (
                  <Ayat key={index}>
                    <div className="wrapper">
                      <span className="ayat-number">
                        <AyatNumber />
                        <p className="number">{index + 1}</p>
                      </span>
                      <h3 className="ayat">{ayat.ar}</h3>
                    </div>
                    <p className="arti">Artinya: "{ayat.id}"</p>
                  </Ayat>
                );
              })}
            </Sheet>
          )}
        </Book>
      </Container>
    </Div>
  );
};

export default Quran;
