import { styled } from "styled-components";
import { thema } from "../../style/thema";

export const Form = styled.form`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 90vh;
  width: 90%;

  max-height:auto;
  min-width: auto;
  margin: 0 auto;

  background-color: ${thema.cinzaMedium};
  div {
    width: 50%;
    min-width: 350px
  }
 
  label {
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 80%;
    height: auto;
    min-height: 50px ;

    margin: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  label input{
    width:100%;
    border: none;
    padding: 15px;
    box-shadow: .1px .1px 11px  rgb(0,0,0,0.5);
    border-radius: 5px;
  }
  label input[type='file']{
    display: block;
    height: 20px;
    box-shadow: none;
    width: 200px;
    border: 1px solid black;
    background-color: white;
  }
button {
  width: 80%;
  height: 50px;
  margin:1rem;

  background-color: green;
  border: none;

  font-size: 1.2rem;
  font-weight: bold;
  color:white;
  border-radius: 15px;


  &:hover {
    box-shadow: 2px 2px 15px black;
    cursor: pointer;
  }
}`;

export const Topicos = styled.section `
    width:90%;
    margin:0 1rem; 
    justify-self: end;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `