import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";
import CardProduct from "../CardProduct";
import SwipperProduct from "../Swipper";
import * as S from "./style";

const Main = () => {
  const docs = useFetchDocs();

  return (
    <S.MainContainer>
      <S.ContainerProdutos>
        <h1>Produtos incriveis com os melhores preços do mercado </h1>
        {docs.length > 0 && <SwipperProduct docs={docs} /> }
        {console.log(docs)}
      </S.ContainerProdutos>
    </S.MainContainer>
  );
};

export default Main;
