import React from "react";
import * as S from "./style";

import adestramento from "../../assets/img/adestramento.png";

const CardProduct = () => {
  return (
    <>
      <S.CardBody>
        <li>
          <img src={adestramento} alt="" />
        </li>
        <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tempore non repellendus totam quae officiis dignissimos delectus labore porro? Assumenda vitae fuga distinctio illum sequi nam beatae deleniti in sapiente.</p></li>
        <li><button>Detalhes</button></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
