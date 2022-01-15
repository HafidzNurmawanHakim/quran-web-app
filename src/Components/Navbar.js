import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Book } from "../SubComponents/AllSvg";
import { NavLink } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  position: fixed;
  z-index: 5;
  overflow: hidden;
  transition: 0.3s;
  height: ${(props) => (props.active ? "235px" : "0%")};

  .glass {
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.11);
    border-bottom: none;
    border-top: none;
  }
`;
const Nav = styled.div`
  width: 100%;
  padding: 0 20px;
  position: fixed;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  .toggle {
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
    display: none;

    span {
      border-radius: 3px;
      display: block;
      background: white;
      width: 100%;
      height: 5px;
      margin-bottom: 7px;
      transition: 0.3s;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .active {
    span:first-child {
      transform: translateY(230%);
    }
    span:last-child {
      transform: translateY(-230%);
    }
  }

  .toggle:hover {
    span:first-child {
      transform: translateY(230%);
    }
    span:last-child {
      transform: translateY(-230%);
    }
  }

  @media (max-width: 480px) {
    .toggle {
      display: block;
    }
  }
`;
const Logo = styled.div`
  width: 180px;
  color: white;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-around;
  svg {
    width: ${(props) => (props.offsetY > 80 ? "30px" : "60px")};
    height: ${(props) => (props.offsetY > 80 ? "30px" : "60px")};
    background: white;
    border-radius: 10px;
    transition: 0.3s;
  }
  h2 {
    font-family: "M PLUS 1 Code", sans-serif;
  }
`;
const Menu = styled.ul`
  li {
    display: inline;

    .active {
      background: white;
      color: black;
    }
  }
  @media (max-width: 560px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    & {
      display: none;
    }
  }
`;
const SubMenu = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 2px;
  z-index: 4;
  transition: 0.3s;

  li {
    min-height: 30px;
    margin: 5px;
    line-height: 30px;
    border-radius: 3px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  li:hover {
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.11);
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: auto;
  height: 20px;
  padding: 5px 15px;
  margin-right: 20px;
  border-radius: 3px;
  transition: 0.3s;

  @media (max-width: 560px) {
    & {
      margin-right: 5px;
    }
  }
`;
const Navbar = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [active, setActive] = useState(false);

  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Div active={active} offsetY={offsetY}>
      <Nav className={offsetY > 80 || active ? "glass" : ""} style={{ height: `${offsetY > 80 ? "45px" : "80px"}` }}>
        <Logo offsetY={offsetY}>
          <Book />
          <h2>Grimoire</h2>
        </Logo>

        <Menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="quran">Quran</Link>
          </li>
          <li>
            <Link to="doa">Doa</Link>
          </li>
          <li>
            <Link to="hadits">Hadits</Link>
          </li>
        </Menu>

        <div className={active ? "toggle active" : "toggle"} onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Nav>
      <SubMenu style={{ bottom: `${offsetY > 80 ? "37px" : "2px"}` }} className={offsetY > 80 || active ? "glass" : ""}>
        <li onClick={() => setActive(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link to="quran">Quran</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link to="doa">Doa</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link to="hadits">Hadits</Link>
        </li>
      </SubMenu>
    </Div>
  );
};

export default Navbar;
