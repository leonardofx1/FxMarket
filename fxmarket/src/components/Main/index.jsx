import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";
import CardProduct from "../CardProduct";

import NavTopics from "../NavTopics";

import SwipperProduct from "../Swipper";
import * as S from "./style";

const Main = () => {
  const docs = useFetchDocs();

  return (
    <S.MainContainer>
      <S.ContainerProdutos>
        <h1>Produtos incriveis com os melhores preços do mercado </h1>
        {docs.length > 0 && <SwipperProduct docs={docs} />}
        <NavTopics />
      <S.Products>
      {docs.length > 0 &&
          docs.map(
            ({ quantidade, img, valorProduto, valorParcelas, descricao }) => (
              <CardProduct
                img={img}
                valorParcelas={valorParcelas}
                quantidade={quantidade}
                valorProduto={valorProduto}
                descricao={descricao}
              />
            )
          )}
      </S.Products>
      </S.ContainerProdutos>
    </S.MainContainer>
  );
};

export default Main;
