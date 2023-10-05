import styled from 'styled-components'
import { thema } from '../../../style/thema'

export const Main = styled.main `
    display: flex;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;

    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    background-color: ${thema.darkMedium};
`
export const Presentation = styled.section `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 40%;
    min-width: 320px;
    height: auto;
    padding: 1em;

    img {
        display: block;
        width: 100%;
        height:100%;
    }

    p {
        font-weight: bold;
        font-size: 1.2rem;
        color: white;
        text-align: justify;
        line-height: 1.5rem;
        font-family: sans-serif;
    }
`


export const ContainerLogo = styled.div `
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width: 320px;
    height: 320px;
    min-width: 320px;

    overflow: hidden;

    border-radius: 50%;
    border:2px solid  white;
`
export const ContainerProdutos = styled.section `
    display: flex;
    width: 90%;
    height: 400px;

    max-width:400px;

    flex-direction: row;
    flex-wrap: nowrap;

    background-color: ${thema.darkMedium};
    min-width:auto;
    img {
        width: 100%;
        height: 100%;
    }
`
