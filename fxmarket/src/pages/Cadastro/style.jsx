import styled from "styled-components";
import { thema } from "../../style/thema";

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: ${thema.darkMedium};
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 340px;
  min-height: 340px;
  max-height: auto;
  box-shadow: 0.4px 0.4px 10px 1px ${thema.darkfull};
  border-radius: 15px;
  border: 1px solid green;
  padding:1rem 0;
  label {
    color: white;
    font-family: ${thema.fontFamily};
    width:80%;
  }

  label input {
    margin: 0.8rem;
    padding: 0.5rem;
    width:99%;

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

  button {
    min-width: 190px;
    border-radius: 5px;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;
    color: white;
    border: 1px solid green;

    font-size:1.2rem;
    font-weight:bold;

    transition: all 100ms ease-in;

    &:hover {
        background-color:green;
        color:black;
    }
  }
`;
