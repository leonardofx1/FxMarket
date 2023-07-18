import React from 'react'

import * as S from './style'

import logoTransparente from '../../assets/img/logoTransparente.png'

const  Header = () => {
  return (
    <S.Header>
        <h1><img src={logoTransparente} alt="logo.gif" /></h1>
    </S.Header>
  )
}

export default Header