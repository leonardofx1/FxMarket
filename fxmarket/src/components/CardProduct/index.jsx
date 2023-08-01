import React from "react";
import * as S from "./style";

import adestramento from "../../assets/img/adestramento.jpg";

const CardProduct = () => {
  return (
    <>
      <S.CardBody>
        <li>
          <img src={adestramento} alt="" />
        </li>
        <li>
          <p>Você está cansado de lidar com comportamentos indesejados do seu cão? Aprenda a treiná-lo de maneira eficaz com o nosso novo ebook de adestramento canino! Com dicas e técnicas comprovadas, você pode ajudar o seu cão a se comportar melhor em qualquer situação.</p>
        </li>
        <li><h2>R$ 24,90</h2></li>
      </S.CardBody>
    </>
  );
};

export default CardProduct;
