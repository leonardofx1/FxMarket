import * as S from "./style";

import SwiperHome from "./SwiperHome";

import logo from "../../../assets/img/logo.gif";
import Header from '../../../components/Header'

const HomeMain = () => {
  return (
    <>
    <Header />
      <S.Main>
        <S.Presentation>
          <S.ContainerLogo>
            <img src={logo} alt="" />
          </S.ContainerLogo>
            <p>
              Bem-vindo à nossa loja online! Aqui você encontrará uma seleção
              cuidadosamente selecionada de produtos de alta qualidade, todos
              com links de afiliados para que você possa comprar com confiança.
              Aproveite nossas ofertas exclusivas e comece a fazer compras
              agora!
            </p>
        </S.Presentation>
        <S.ContainerProdutos>
          <SwiperHome />
        </S.ContainerProdutos>
      </S.Main>
    </>
  );
};

export default HomeMain;
