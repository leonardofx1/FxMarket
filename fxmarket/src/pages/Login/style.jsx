import styled from 'styled-components'
import { thema } from '../../style/thema'

export const Main = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100Vh;


`

export const  LoginForm = styled.form `
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 340px;
    height:340px;
    box-shadow: .4px .4px 10px 1px  ${thema.darkfull};
    border-radius: 15px;


`