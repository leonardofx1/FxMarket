import {useForm} from 'react-hook-form'

import Header from '../../components/Header'
import Input from '../../components/Input'

import logo from '../../assets/img/logo.gif' 
import * as S from './style'



const Login = ()=> {
    const {register} = useForm()
    return (
     <>
        <Header />
        <S.Main>
         <img src={logo} alt="" />
     <S.LoginForm>
     <Input 
        placeHolder='usuário'
        register={register}
        name='nameUSer'
        type='text'
         /> <Input 
         placeHolder='senha'
         register={register}
         name='nameUSer'
         type='password'
          />
      <button>Entrar</button>
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Login