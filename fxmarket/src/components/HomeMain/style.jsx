import styled from 'styled-components'
import { thema } from '../../style/thema'

export const Main = styled.main `
    display: flex;
    width: 100%;
    height: 100vh;

    justify-content: space-evenly;
    align-items: center;

    background-color: ${thema.darkMedium};
`

export const ContainerLogo = styled.div `
    width: 400px;
    height: 400px;

    overflow: hidden;

    border-radius: 50%;
    border:2px solid  white;
    img {
        display: block;
        width: 100%;
        height:100%;
    }
`
export const ContainerProdutos = styled.section `
    display: flex;
    width: 400px;
    height: 400px;

    flex-direction: row;

    overflow:auto;

    background-color: ${thema.darkMedium};

    img {
        width: 100%;
        height: 100%;
    }
`
