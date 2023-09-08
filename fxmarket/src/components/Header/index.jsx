import React from "react";

import * as S from "./style";


import logo  from '../../assets/img/logo.gif'
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <S.Header>
      <img src={logo} />
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
      <section>
        <Link to='/login'>Login</Link>        <Link to='/cadastro'>Cadastro</Link>
      </section>
    </S.Header>
  );
};

export default Header;
