import React, { useEffect } from "react";
import {BiLogIn, BiHome} from 'react-icons/bi'
import {MdProductionQuantityLimits,  MdOutlineAssignmentInd} from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'

import * as S from "./style";

import useAuthStore from "../../store/authStore";
import logo from "../../assets/img/logo.gif";
import { Link } from "react-router-dom";

const Header = () => {


  const {signed} = useAuthStore((state)=>({signed:  state.signed }))
  const {signOut} = useAuthStore((state)=>({signOut:  state.signOut }))
  const {user} = useAuthStore((state) =>({user: state.user}))
 const handleSignOut = () => signOut()
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
            { signed && (<>
            <a onClick={handleSignOut}><GoSignOut />Sair</a>
            </>) }
          </li>
        </ul>
    {!signed && (  <section>
        <Link to="/login"><BiLogIn />Login</Link>
        <Link to="/cadastro"> <MdOutlineAssignmentInd />Cadastro</Link>
      </section>)}
      </nav>
    </S.Header>
  );
};

export default Header;
