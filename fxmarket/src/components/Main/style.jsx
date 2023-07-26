import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
    width:100%;
    max-height: auto;

    width: 100%;

    margin: 0 auto;
    background-color:${thema.cinzaMedium};
`;

export const ContainerProdutos = styled.section `
    width: 900px;
    min-height: 100vh;
    min-width: auto;
    height:auto;
    padding: 1rem;
    margin: 0 auto;

    background-color: ${thema.white};
`

export const Bemvindos = styled.section `
   width: 80%;
   box-shadow: 10px 10px 5px grey;
   margin: 1rem auto;
    font-family: sans-serif;
    p {
        font-size: 1.5rem;
    }
`