import styled from "styled-components";
import { thema } from "../../style/thema";
export const CardBody = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  width: 200px;
  height: 320px;
  overflow: hidden;
  
  cursor: pointer;
  border-radius: 15px;
  background-color: ${thema.cinzaMedium};
  li p {
    width: 100%;
    font-size: 1.2rem;
    color: #665e5d;
  }

  li img {
    width: 200px;
    height: 200px;
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
`;
