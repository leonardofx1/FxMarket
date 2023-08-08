import styled from "styled-components";
import { thema } from "../../style/thema";
export const CardBody = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 1rem;
  width: 232px;
  height: 431px;
  overflow: hidden;

  box-shadow:.2px .2px 8px rgba(0, 0, 0, 0.37);
  cursor: pointer;
  border-radius: 15px;
  background-color: ${thema.white};
  li h2 {
    color: rgb(51, 51, 51);
    font-size: 14px;
    text-transform: lowercase;
    font-weight: 700;
    line-height: 16px;
    height: 32px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;}

  li img {
    width: 100%;
    height: 100%;
    transition: all ease-in-out 200ms;

  }
  li p {
    width: 100%;
    color: ${thema.priceColor};
    font-family: Nunito, sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 2px;
    text-align: start
    ;
}
  
  li p:hover {
    color: ${thema.priceColor};
  }
  li img:hover {
    transform: scale(1.2);
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
  color:${thema.priceColor}
`
