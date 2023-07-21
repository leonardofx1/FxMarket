import React from "react";

import * as S from "./style";

import logoTransparente from "../../assets/img/logoTransparente.png";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

const Header = () => {
  return (
    <S.Header>
      <h1>
        <img src={logoTransparente} alt="logo.gif" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={Home}>Home</Link>
          </li>
          <li>
            <Link>Produtos</Link>
          </li>
          <li>
            <Link>Sobre</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
};

export default Header;
