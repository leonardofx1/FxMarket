import styled, { css } from "styled-components";

import { device, thema } from "../../style/thema";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: ${thema.darkfull};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    height: auto;

    color: white;

    li {
      a {
        display: flex;
        align-items: center;

        gap: 0.5rem;

        transition: all 100ms ease-in;
        font-size: 1.2rem;
        color: white;
      }
      a:hover {
        color: green;
      }
    }
  }
  a img {
    height: 100px;
    width: auto;
    padding: 0.3em;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    height: auto;

    color: white;

    a {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      transition: all 100ms ease-in;
      font-size: 1.2rem;
      color: white;
    }
    a:hover {
      color: green;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.mobile}) {
    ${(props) =>
      props.$isActiveMenu
        ? css`
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;

            flex-direction: column;
            justify-content: flex-start;

            width: 50%;
            padding: 2rem 0 0 0;

            background-color: black;
            z-index: 15;
            &::after {
              content: "";
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              z-index: -999;
              background-color: #00000053;
            }
          `
        : css`
            display: none;
          `}
    ul {
      flex-direction: column;
    }
    section {
      flex-direction: column;
    }
  }
`;

export const MenuIcon = styled.span`
  display: none;
  font-size: 3rem;
  color: white;
  @media screen and (max-width: ${device.mobile}) {
    display: inline-block;
  }
`;
export const CloseMenu = styled.section`
  ${(props) => props.$isActiveMenu ?
  css`
  position: absolute;
  font-size: 1rem;
  top:15px;
  right: 15px;
  background-color: white;
  border-radius: 50%;
  padding:5px;
  `
  : css`
  display: none;
  svg {
    display:none
  }
  `
  
} 
`;
