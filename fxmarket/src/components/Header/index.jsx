import React from "react";
import {BiLogIn, BiHome} from 'react-icons/bi'
import {MdProductionQuantityLimits, MdOutlineApartment, MdOutlineAssignmentInd} from 'react-icons/md'

import * as S from "./style";

import logo from "../../assets/img/logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <img src={logo} />
      <nav>
        <ul>
          <li>
            <Link to="/"> <BiHome />Home</Link>
          </li>
          <li>
            <Link to="/produtos">  < MdProductionQuantityLimits />Produtos</Link>
          </li>
          <li>
            <Link> <MdOutlineApartment/>Sobre</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link to="/login"><BiLogIn />Login</Link>
        <Link to="/cadastro"> <MdOutlineAssignmentInd />Cadastro</Link>
      </section>
    </S.Header>
  );
};

export default Header;
