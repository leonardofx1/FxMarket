import styled from "styled-components";

import { thema } from "../../style/thema";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;

  background-color: ${thema.darkfull};

  nav {
    display:flex;
    align-items: center;
  }
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

        gap: .5rem;

        transition: all 100ms ease-in;
        font-size: 1.2rem;
        color: white;
      }
      a:hover {
        color: green;
      }
    }
  }
  img {
    height: 100%;
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

      gap: .5rem;

      transition: all 100ms ease-in;
      font-size: 1.2rem;
      color: white;
    }
    a:hover {
      color: green;
    }
  }
`;
