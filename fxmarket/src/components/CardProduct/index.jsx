import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";





const CardProduct = ({ quantidade, img, valorProduto, valorParcelas, descricao, id}) => {

  return (
    <>

     <Link to={`/produto/${id}`}>
     <S.CardBody id={id}>
       
       <li>
         <img src={img} alt="" />
       </li>
       <li>
         <h2>{descricao}</h2>
         </li>
 
       <li> <S.OldPrice> Em apenas <strong> {quantidade}x  R$ {valorParcelas}  no cartão </strong></S.OldPrice> <S.Price>{valorProduto}R$</S.Price></li>
     </S.CardBody>
     </Link>
    </>
  );
};

export default CardProduct;
