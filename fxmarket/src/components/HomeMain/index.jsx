import * as S from "./style";

import logo from "../../assets/img/logo.gif";
import adestramento from "../../assets/img/adestramento.png";

const HomeMain = () => {
  return (
    <>
      <S.Main>
        <S.ContainerLogo>
          <img src={logo} alt="" />
        </S.ContainerLogo>
        <S.ContainerProdutos>
          <img src={adestramento} alt="" />
          <img src={adestramento} alt="" />  <img src={adestramento} alt="" />  <img src={adestramento} alt="" />  <img src={adestramento} alt="" />  <img src={adestramento} alt="" />  <img src={adestramento} alt="" />
        </S.ContainerProdutos>
      </S.Main>
    </>
  );
};

export default HomeMain;
