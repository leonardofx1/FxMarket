import React from 'react'
import CardProduct from '../CardProduct'


const  SectionProducts = ({titulo, docs, id})=>  {
  return (
    <article>
    <div id={id} >
        <h2>{titulo}</h2>
    </div>
    {docs.length > 0 &&
          docs.map(
            ({ quantidade, img, valorProduto, valorParcelas, descricao, id }) => (
              <CardProduct
                img={img}
                id={id}
                valorParcelas={valorParcelas}
                quantidade={quantidade}
                valorProduto={valorProduto}
                descricao={descricao}
              />
            )
          )}
    </article>
  )
}

export default SectionProducts