import  styled from 'styled-components'

import { thema } from '../../style/thema'

export const Header = styled.header `
    display:flex;
    justify-content: space-between;

    width:100%;
    height: 100px;

    background-color:${thema.darkfull};
    ul {
        margin: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:250px;
        height: auto;
        margin-right: 20px;

        color:white;
        

       
        li { 
           
            a {
                transition: all 100ms ease-in;
                font-size: 1.2rem;
                color:white;
            }
            a:hover {
                color:green;
            }
        }
      
    }
    h1 img {
        height:50px;
        width: 50px;
        padding: .3em;
    }
    section {
        margin: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:150px;
        height: auto;



        color:white;
        
       a {
        font-size: 1.2rem;
                color:white;
       }
        
    }
`

