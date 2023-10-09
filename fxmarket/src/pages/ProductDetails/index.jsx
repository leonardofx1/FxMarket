import Header from "../../components/Header";
import * as S from "./style";

import adestramento from "../../assets/img/adestramento.jpg";
import { useParams } from "react-router-dom";
import useDocCardDetail from "../../firebase/firebaseUtils/useDocCardDetail";
import { useEffect } from "react";


const formatCurrency = (value) => new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)



const ProductDetails = () => {
  const id = useParams();

  const { dataCard} = useDocCardDetail(id.id);
  console.log(id.id, dataCard)
  return (
    <>
      <Header />
     {dataCard.valorProduto > 0 ? ( <S.Main>
        <S.CardBody>
          <S.CardImg>
            <img src={dataCard.img} alt="" />
          </S.CardImg>
          <S.CardInfo>
            <div>
              <h1>{dataCard.titulo}</h1>
              <h2>
                {dataCard.descricao}
              </h2>

              <S.Price> R$ {formatCurrency(dataCard.valorProduto)}</S.Price>
              <S.PricePromotion>
                ou até {dataCard.quantidade} x de R$ {formatCurrency(dataCard.valorParcelas)} sem juros no Cartão de Crédito
              </S.PricePromotion>
            </div>

            <S.PageCompras href={dataCard.linkAfiliado}> Comprar</S.PageCompras>
          </S.CardInfo>
        </S.CardBody>
      </S.Main>):<p> carregando </p>}
    </>
  );
};

export default ProductDetails;
