import {useForm} from 'react-hook-form'

import Header from '../../components/Header'
import Input from '../../components/Input'

import logo from '../../assets/img/logo.gif' 
import * as S from './style'



const Cadastro = ()=> {
    const {register} = useForm()
    return (
     <>
        <Header />
        <S.Main>
   
     <S.LoginForm>
     <Input 
        placeHolder='nome de usuário'
        register={register}
        name='nameUSer'
        type='text'
         />  <Input 
         placeHolder='senha'
         register={register}
         name='password'
         type='password'
          />  <Input 
          placeHolder='idade'
          register={register}
          name='age'
          type='number'
           /> 
      <button>cadastre-se</button>
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Cadastro