import { styled } from "styled-components";
import { thema } from "../../style/thema";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 90vh;
  width: 940px;
  min-width: auto;
  margin: 0 auto;

  background-color: ${thema.cinzaMedium};
`;
