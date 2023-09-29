import React from "react";
import * as S from "./style";





const CardProduct = ({ quantidade, img, valorProduto, valorParcelas, descricao, id}) => {

  return (
    <>
      <S.CardBody id={id}>
       
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <h2>{descricao}</h2>
          </li>
  
        <li> <S.OldPrice> Em apenas <strong> {quantidade}x  R$ {valorParcelas}  no cartão </strong></S.OldPrice> <S.Price>{valorProduto}R$</S.Price></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
