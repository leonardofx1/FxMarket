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
          <h2>Adestramento Canino em Casa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, architecto accusamus officiis aspernatur repellendus quam? Architecto error om</h2>
          </li>
  
        <li> <S.OldPrice> Em apenas <strong> 7x  R$ 11,17  no cartão </strong></S.OldPrice> <p> R$ 24,90</p></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
