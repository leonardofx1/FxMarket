import Header from '../../components/Header'
import * as S from "./style"

import adestramento from '../../assets/img/adestramento.jpg'
const ProductDetails = () => {

    return (
   <>
   <Header />
    <S.Main>

<S.CardBody>
    <S.CardImg>
        <img src={adestramento} alt="" />   
    </S.CardImg>
    <S.CardInfo>
    <div>
    <h1>Adestramento canino</h1>
       <h2>Smartphone Motorola Moto E22 Preto 128GB, 4GB RAM, Tela de 6.5", Câmera Traseira Dupla, Android 12 e Processador Octa Core</h2>
   
    <S.Price> R$ 2000</S.Price>
       <S.PricePromotion>
       ou até 6x de R$ 166,48 sem juros no Cartão de Crédito
       </S.PricePromotion>

    </div>
       <S.Button> Comprar</S.Button>
    </S.CardInfo>
</S.CardBody>
</S.Main>       </>
        
    )
}

export default ProductDetails