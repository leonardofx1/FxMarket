import styled from 'styled-components'
import { thema } from '../../style/thema'

export const Rodape = styled.footer `
    display: flex;
    align-items: center;
    
    width: 100%;
    height:50px;

    background-color:${thema.darkfull};

    padding:1rem;
    gap:1rem;
 
    a {
        display:flex;

        align-items: center;
        width:auto;
        
        color:white;
        gap:.5rem;

    }

`