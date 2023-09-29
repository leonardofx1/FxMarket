import styled from "styled-components";
import { thema } from "../../style/thema";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  width: 100%;
  max-height: auto;

  margin: 0 auto;
  padding: 0.5rem;

  position: relative;
`;

export const ContainerProdutos = styled.section`
  width: 80%;
  min-height: 1000px;
  min-width: auto;


  margin: 0 auto;
  background-color: ${thema.cinzaMedium};
  h1 {
    color: ${thema.darkMedium};
  }
`;
export const Products = styled.section`
  width: 100%;
  height: auto;

  

  article div:has(h2) {
    width: 100%;
    min-height: 50px;
    margin-bottom: 1rem;
    
    font-family: "Libre Baskerville", serif;
    
    text-align: center;
    color: ${thema.priceColor};
  }
  article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap:.5rem;

    width: 100%;
    height: auto;
    margin: 1.5rem 0;
  }
`;

export const SideBar = styled.aside`
  display: flex;
  top: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: sticky;
  height: 100px;
  width: 15%;

  gap: 1rem;
  margin: 5px;

  background-color: ${thema.cinzaMedium};
  border-radius: 5px;
  box-shadow: 0.1px 0.1px 2px 0.1px green;
  & a {
    color: ${thema.priceColor};
    font-weight: 500;
    font-size: 1.2rem;
    &:focus {
      color: red;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
