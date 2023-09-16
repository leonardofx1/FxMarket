import React from 'react'

const  ProductLink = ({id, descript}) => {
  return (
    <a href={`#${id}`}> {descript}</a>
  )
}

export default ProductLink