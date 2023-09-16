import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";

import SectionProducts from "../SectionProducts";

import NavTopics from "../NavTopics";

import SwipperProduct from "../Swipper";
import * as S from "./style";
import ProductLink from "./ProductLink";

const Main = () => {
  const docs = useFetchDocs();

  return (
    <S.MainContainer>
      <S.SideBar>
       <ProductLink id='ebooks' descript='E-books' />
       <p>leo</p>
      </S.SideBar>
      <S.ContainerProdutos>
        <S.Products>
          <NavTopics />
          <h1>Produtos incriveis com os melhores preços do mercado </h1>
          {docs.length > 0 && <SwipperProduct docs={docs} />}
        </S.Products>

        <S.Products>
          <SectionProducts
          id='ebooks'
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
