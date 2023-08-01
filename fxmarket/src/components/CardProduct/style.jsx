import styled from "styled-components";
import { thema } from "../../style/thema";
export const CardBody = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  width: 100%;
  height: auto;
  overflow: hidden;

  cursor: pointer;
  border-radius: 15px;
  background-color: ${thema.white};
  li p {
    text-align: start;

    width: 100%;
    height: auto;
    font-size: small;
    color: black;
    overflow: auto;
    margin: 0 5px;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  li img {
    width: 100%;
    height: 250px;
    transition: all ease-in-out 200ms;
  }
  li h2 {
    width: 100%;
    text-align: start;
    color: #3a5cb7;
  }
  li p:hover {
    color: #3a5cb7;
  }
  li img:hover {
    transform: scale(1.2);
  }
  li {
    overflow: hidden;
  }
  li {}
`;
