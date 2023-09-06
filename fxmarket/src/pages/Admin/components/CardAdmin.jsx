import React from "react";
import * as S from "./style";

import deleteDocCard from "../../firebase/firebaseUtils/deleteDoc";



const CardAdmin = ({ quantidade, img, valorProduto, valorParcelas, descricao, id}) => {
  const deleteDoc = () => deleteDocCard(id)

  return (
    <>
      <S.CardBody id={id}>
        <S.Delete onClick={deleteDoc}>
          X
        </S.Delete>
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <h2>{descricao}</h2>
          </li>
  
        <li> <S.OldPrice> Em apenas <strong> {quantidade}x  R$ {valorParcelas}  no cartão </strong></S.OldPrice> <p> {valorProduto}R$</p></li>
      </S.CardBody>
    </>
  );
};

export default CardAdmin;
