import React from "react";
import * as S from "./style";

import adestramento from "../../assets/img/adestramento.jpg";

const CardProduct = () => {
  return (
    <>
      <S.CardBody>
        <li>
          <img src={adestramento} alt="" />
        </li>
        <li>
          <h2>Adestramento Canino em Casa</h2>
          </li>
        <li>  <p>por <h2>R$ 24,90</h2></p></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
