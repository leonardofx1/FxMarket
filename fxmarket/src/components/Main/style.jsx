import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 100%;
  max-height: auto;

  margin: 0 auto;
  padding: 0.2rem;
`;

export const ContainerProdutos = styled.section`
  width: 85%;
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
  height: auto;
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

export const SideBar = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-color: ${thema.cinzaMedium};
  border-radius: 5px;
`;
