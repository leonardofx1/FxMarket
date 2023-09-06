import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
  width: 100%;
  max-height: auto;

  width: 100%;

  margin: 0 auto;
  background-color: ${thema.white};
`;

export const ContainerProdutos = styled.section`
  width: 1000px;
  min-height: 100vh;
  min-width: auto;
  height: auto;
  padding: 1rem;
  margin: 0 auto;

  background-color: ${thema.cinzaMedium};

  h1 {
    color: ${thema.darkMedium};
  }
`;
export const Products = styled.section`
  display: flex;
  justify-content: space-beteween;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  margin: 1.5rem;

  div:has(h2) {
    width: 100%;
    min-height: 50px;
    margin-bottom: 1rem;

    font-family: "Libre Baskerville", serif;

    text-align: center;
    color: ${thema.priceColor};
  }
`;
