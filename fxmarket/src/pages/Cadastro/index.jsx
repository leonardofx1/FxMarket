import {useForm} from 'react-hook-form'
import { MdOutlineAssignmentInd} from 'react-icons/md'

import Header from '../../components/Header'
import Input from '../../components/Input'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import logo from '../../assets/img/logo.gif' 
import * as S from './style'



const Cadastro = ()=> {

const auth = getAuth();

const data = async (dat) => {
  try {
    const createUser = await createUserWithEmailAndPassword(auth, dat.email, dat.password);
   
  } catch (error) {
 
    console.error(error.code);
  }
}
  
    const {register, handleSubmit} = useForm()
    return (
     <>
        <Header />
        <S.Main>
   
     <S.LoginForm onSubmit={handleSubmit(data)}>
     <Input 
        placeHolder='e-mail'
        register={register}
        name='email'
        type='email'
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
      <button> <MdOutlineAssignmentInd />cadastre-se</button>
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Cadastro