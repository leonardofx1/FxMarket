import CardProduct from '../CardProduct'
import * as S from './style'


const Main = () => {



    return (
        <S.MainContainer>
        <S.ContainerProdutos>
           < S.Bemvindos>
           <p>Seja bem-vindo à nossa loja online! Aqui você encontrará uma ampla variedade de produtos de alta qualidade, cuidadosamente selecionados para atender às suas necessidades. Nossa equipe está sempre em busca das últimas tendências e novidades para oferecer a você o melhor em moda, tecnologia, beleza e muito mais. Navegue pelos nossos cards de produtos e descubra tudo o que temos a oferecer. Compre agora e aproveite nossas ofertas exclusivas</p>
           </S.Bemvindos>
            <CardProduct/>
        </S.ContainerProdutos>
        </S.MainContainer>
    )
}

export default Main