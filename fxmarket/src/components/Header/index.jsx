import React, { useEffect } from "react";
import {BiLogIn, BiHome} from 'react-icons/bi'
import {MdProductionQuantityLimits, MdOutlineApartment, MdOutlineAssignmentInd} from 'react-icons/md'

import * as S from "./style";

import useAuthStore from "../../store/authStore";
import logo from "../../assets/img/logo.gif";
import { Link } from "react-router-dom";

const Header = () => {


  const {signed} = useAuthStore((state)=>({signed:  state.signed }))
  const {user} = useAuthStore((state) =>({user: state.user}))
 
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
    {!signed && (  <section>
        <Link to="/login"><BiLogIn />Login</Link>
        <Link to="/cadastro"> <MdOutlineAssignmentInd />Cadastro</Link>
      </section>)}
    </S.Header>
  );
};

export default Header;
