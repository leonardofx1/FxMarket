import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
    width:100%;
    max-height: auto;

    width: 100%;

    margin: 0 auto;
    background-color:${thema.white};
`;

export const ContainerProdutos = styled.section `
    width: 1000px;
    min-height: 100vh;
    min-width: auto;
    height:auto;
    padding: 1rem;
    margin: 0 auto;

    background-color: ${thema.cinzaMedium};

    h1 {
        color: ${thema.darkMedium}
    }
`