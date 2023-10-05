import React, { useState }  from "react";
import { BiLogIn, BiHome, BiMenu } from "react-icons/bi";
import{GrClose} from "react-icons/gr"
import {
  MdProductionQuantityLimits,
  MdOutlineAssignmentInd,
} from "react-icons/md";
import { GoSignOut } from "react-icons/go";

import * as S from "./style";

import useAuthStore from "../../store/authStore";
import logo from "../../assets/img/logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const toggleMenu = () => setIsActiveMenu(state => !state)

  const { signed } = useAuthStore((state) => ({ signed: state.signed }));
  const { signOut } = useAuthStore((state) => ({ signOut: state.signOut }));
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const handleSignOut = () => signOut();
  console.log(isActiveMenu)

  return (
    <S.Header>
      <img src={logo} />
      <S.Nav $isActiveMenu={isActiveMenu}>
        <ul>
          <li>
            <Link to="/">
              
              <BiHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              
              <MdProductionQuantityLimits />
              Produtos
            </Link>
          </li>
         <S.CloseMenu  $isActiveMenu={isActiveMenu} onClick={toggleMenu}>
         <GrClose />
         </S.CloseMenu>
          <li>
            {signed && (
              <>
                <a onClick={handleSignOut}>
                  <GoSignOut />
                  Sair
                </a>
              </>
            )}
          </li>
        </ul>
        {!signed && (
          <section>
            <Link to="/login">
              <BiLogIn />
              Login
            </Link>
            <Link to="/cadastro">
             
              <MdOutlineAssignmentInd />
              Cadastro
            </Link>
          </section>
        )}
        
      </S.Nav>
      <S.MenuIcon>
              < BiMenu onClick={toggleMenu}/>
            </S.MenuIcon>
    </S.Header>
  );
};

export default Header;
