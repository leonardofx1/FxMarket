import styled from "styled-components";
import { thema } from "../../style/thema";
export const CardBody = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 202px;
  height: 380px;
  overflow: hidden;

  box-shadow:.2px .2px 8px rgba(0, 0, 0, 0.37);
  cursor: pointer;
  
  border-radius: 15px;
  background-color: ${thema.white};


 

  &:hover {
    border:1px solid green;
  }
  li h2 {
    color:${thema.priceColor};
    font-size: 14px;
    text-transform: lowercase;
    text-align: center;
    font-weight: 700;
    line-height: 16px;
    height: 50px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;}

  li img {
    width: 100%;
    height: 350px;
    transition: all ease-in-out 200ms;

  }

  
  li p:hover {
    color: ${thema.priceColor};
  }

  li:not(:has(img)) {
    overflow: hidden;
    text-align: start;
    margin: 8px;
    height: 20%;
    width: 90%;
  }
  li:has(img) {
    align-self: start;
    overflow: hidden;
    width: 100%;
  }

`;


export const OldPrice = styled.span `
  font-size: small;
  color:${thema.priceColor};

`;

export const Price = styled.p `
  color:blue;
    width: 100%;
    color: ${thema.priceColor};
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    margin: 4px;
    text-align: center;


`
