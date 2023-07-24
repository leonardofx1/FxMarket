import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
    width:100%;
    max-height: auto;

    width: 100%;
    height: 100vh;

    margin: 0 auto;
    background-color:${thema.cinzaMedium};
`;

export const CardContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    min-height: 100vh;
    min-width: auto;


    margin: 0 auto;

    background-color: ${thema.white};
`