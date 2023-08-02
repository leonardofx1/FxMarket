import  styled from 'styled-components'

import { thema } from '../../style/thema'

export const Header = styled.header `
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: auto;
    background-color:${thema.darkfull};
    ul {
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