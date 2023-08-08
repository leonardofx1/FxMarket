import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";
import CardProduct from "../CardProduct";
import SwipperProduct from "../Swipper";
import * as S from "./style";
import { useEffect } from "react";

const Main = () => {

  const docs =  useFetchDocs()
  useEffect(()=>{
    console.log(docs)
 
  }, [docs])
  return (
    <S.MainContainer>
      <S.ContainerProdutos>
        <h1>Produtos incriveis com os melhores preços do mercado </h1>
        <SwipperProduct>
          <CardProduct /> <CardProduct /> <CardProduct />
        </SwipperProduct>
      </S.ContainerProdutos>
    </S.MainContainer>
  );
};

export default Main;
