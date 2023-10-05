import styled from "styled-components";
import { device, thema } from "../../style/thema";

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 
 
  width: 100%;
  min-height: 100vh;
  max-height:auto;

  background-color: ${thema.darkMedium};

  img{
    width:320px;
  }

  @media screen and (max-width:${device.notebook}){
    & > img:first-child {
      display:none;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  min-width: 340px;
  min-height: 380px;
  max-height: auto;
  padding: 1rem;

  box-shadow: 0.4px 0.4px 10px 1px ${thema.darkfull};
  border-radius: 15px;
  border: 1px solid green;
  div {
    width:100%;

    span {
      display:block;
      color:red;
    }
  }
  label {
    color: white;
    font-family: ${thema.fontFamily};
    width: 90%;
  }

  label input {
    margin: 0.8rem 0;
    padding: 0.5rem;
    width: 90%;

    border-radius: 5px;
    border: none;
    box-shadow: 0.4px 0.4px 5px 1px ${thema.darkfull};

    &:focus {
      outline: 2px solid green;
    }

    &::placeholder {
      font-size: 1.1rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }
  }
`;

export const BtnLogin = styled.button`
  width: 90%;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  color: white;
  border: 1px solid green;

  font-size: 1.2rem;
  font-weight: bold;
  transition: all 100ms ease-in;

  &:hover {
    background-color: green;
    color: black;
  }
`;

export const LoginInGmail = styled(BtnLogin)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 50px;

  border: none;
  background-color: #ff0000bb;
  img {
    width:35px;
  }
`;
