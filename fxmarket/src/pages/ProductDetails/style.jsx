import styled from 'styled-components'
import {thema} from '../../style/thema'
export const Main = styled.main `
    display:flex;
    min-height:100vh;
    width:90%;

    margin:0  auto;

    background-color: ${thema.cinzaMedium};

    
    @media screen and (max-width:800px) {
        width:100%;
    }
`



export const CardBody = styled.article `
    display:flex;
    
    padding:1rem 0 ;
    width:100%;
    min-height:500px;
    max-height: auto;

    @media screen and (max-width:800px) {

        flex-direction: column;
        align-items: center;
        section:has(img) {
        width:100%;
        display: flex;
        justify-content:center;

    }
        
    section:has(p) {
        width:100%;
    }
    button {
        width:100%;
    }
  }

`

export const CardImg = styled.section `
    width: 430px;
    height:100%;
    padding: 5px;

    min-width:auto;

    img {
        width:430px;
        height:430px;
        min-width: 300px;
        border-radius:50px;
    }

`

export const CardInfo = styled.section `
    width:50%;
    height: 100%;
    padding: 1rem;
    font-family: ${thema.fontFamily};

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin:0 0 15px 0;
      
    }
  h2 {
    color:rgb(102, 102, 102);
    font-size:1.1rem;
    font-weight: normal;
  }

 
`

export const Price = styled.p `
    color:green;
    font-weight: 800;
    font-size: 1.3rem;;
    font-family: 'Nunito',Arial,sans-serif,-apple-system,BlinkMacSystemFont,Helvetica,"Apple Color Emoji";
   margin: 15px 0;
`
export const PricePromotion = styled.p `
   color:green;
    font-size: small;
    font-family: 'Nunito',Arial,sans-serif,-apple-system,BlinkMacSystemFont,Helvetica,"Apple Color Emoji";  
    margin: 15px 0;
`

export const Button = styled.button `
    width:220px;
    height:50px;

    border:none;
    border-radius:5px;
    background-color:${thema.priceColor};
    margin: 15px 0;
    font-size: 1.5rem;
    color:white;
`