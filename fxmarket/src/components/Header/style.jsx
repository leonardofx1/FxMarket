import  styled from 'styled-components'

import { thema } from '../../style/thema'

export const Header = styled.header `
    display:flex;
    justify-content: space-between;

    width:100%;
    height: 100vh;

    background-color:${thema.darkfull};
    ul {
        margin: 2rem;
        display: flex;
        flex-direction: row;
        gap:1rem;

        margin-right: 20px;
        width: auto;
        color:white;
        li { 
    
            a {
                font-size: 1.2rem;
                color:white;
            }
        }
    }
    h1 img {
        heigth:50px;
        width: 50px;
        padding: .3em;
    }

`

export const ImagenBackground = styled.img `
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left:0;

`