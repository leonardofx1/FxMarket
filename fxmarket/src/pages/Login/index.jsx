import {useForm} from 'react-hook-form'



import Header from '../../components/Header'
import Input from '../../components/Input'

import logo from '../../assets/img/logo.gif' 
import gmail from '../../assets/img/gmail.png' 
import * as S from './style'
import useAuthStore from '../../store/authStore'
import { useEffect } from 'react'



const Login = ()=> {

   const {signInGoogle} = useAuthStore((state) =>({signInGoogle: state.signInGoogle}))
   const {user} = useAuthStore((state) =>({user: state.user}))
    const {register, handleSubmit} = useForm()

   useEffect((()=> {
      console.log(user)
   }),[user])

    
    return (
     <>
        <Header />
        <S.Main>
         <img src={logo} alt="" />
     <S.LoginForm onSubmit={handleSubmit}>
     <Input 
        placeHolder='e-mail'
        register={register}
        name='email'
        type='text'
         /> <Input 
         placeHolder='senha'
         register={register}
         name='password'
         type='password'
          />
      <button>Entrar</button>
      <img src={gmail} alt="login com o google" onClick={handleSubmit(signInGoogle)} />
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Login