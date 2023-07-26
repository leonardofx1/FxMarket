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
          <p> você aprenderá como treinar o seu cão de maneira gentil e eficaz</p>
        </li>
        <li><h2>R$ 24,90</h2></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
