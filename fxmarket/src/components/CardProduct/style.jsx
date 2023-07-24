import styled from "styled-components";
import { thema } from "../../style/thema";
export const CardBody = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 150px;

  position: relative;

  border-radius: 15px;
  background-color: ${thema.cinzaMedium};
  li p {
    width: 100%;
    font-size: 1.2rem;
  }

  li img {
    width: 200px;
    height: auto;
  }
  li button {
    width: 100px;
    padding: 0.5rem;
    position: absolute;
    background-color: ${thema.darkMedium};
    color: white;
    border-radius: 5px;
    border: none;
    bottom: 15px;
    right: 10px;
  }
`;
