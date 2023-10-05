import useFetchDocs from "../../firebase/firebaseUtils/useFetchDocs";

import SectionProducts from "../SectionProducts";
import ProductLink from "./ProductLink";

import SwipperProduct from "../Swipper";
import * as S from "./style";

const Main = () => {
  const docs = useFetchDocs();

  return (
    <S.MainContainer>
      <S.SideBar>
       <ProductLink id='ebooks' descript='E-books' />
       <ProductLink id='receitas' descript='Receitas' />

      </S.SideBar>
      <S.ContainerProdutos>
      
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
