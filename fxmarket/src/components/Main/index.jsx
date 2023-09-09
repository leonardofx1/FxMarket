import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";

import SectionProducts from "../SectionProducts";

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
          <SectionProducts
            titulo="E-books: a maneira mais fácil e acessível de expandir seus conhecimentos!"
            docs={docs}
          />
        </S.Products>
        <S.Products>
          <SectionProducts
            titulo="Não perca a chance de ter os tênis mais desejados do momento!"
            docs={docs}
          />
        </S.Products>
      </S.ContainerProdutos>
    </S.MainContainer>
  );
};

export default Main;
