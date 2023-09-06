import React from "react";

import * as S from "./style";

import logoTransparente from "../../../../assets/img/logoTransparente.png";
import logo  from '../../../../assets/img/logo.gif'
import { Link } from "react-router-dom";



const HeaderProduct = () => {
  return (
    <S.Header>
      <h1>
        <img src={logoTransparente} alt="logo.gif" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/produtos'>Produtos</Link>
          </li>
          <li>
            <Link>Sobre</Link>
          </li>
        </ul>
      </nav>
      <S.ImagenBackground src={logo} />
    </S.Header>
  );
};

export default HeaderProduct;
