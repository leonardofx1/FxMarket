import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { MdOutlineAssignmentInd} from 'react-icons/md'

import Header from '../../components/Header'
import Input from '../../components/Input'
import useAuthStore from '../../store/authStore'

import * as S from './style'
import { schemaLoginUser } from '../../components/schemas/schemaUser';



const Cadastro = ()=> {
const { createUser } = useAuthStore(state => ({createUser: state.createUser}))


const data = async (dat) => {
  createUser(dat.email, dat.password)
}
  
    const {register, handleSubmit, formState:{errors}} = useForm({
      resolver:zodResolver(schemaLoginUser)
    })
    return (
     <>
        <Header />
        <S.Main>
   
     <S.LoginForm onSubmit={handleSubmit(data)}>
   <div>
   <Input 
        placeHolder='e-mail'
        register={register}
        name='email'
        type='email'
         />  
         {errors.email?.message && <span> {errors.email?.message}</span> }      </div>   
         <div>
         <Input 
         placeHolder='senha'
         register={register}
         name='password'
         type='password'
          />       {errors.password?.message && <span> {errors.password?.message}</span> }    
         </div>
            <div><Input 
          placeHolder='idade'
          register={register}
          name='age'
          type='number'
           /> </div>
      <button> <MdOutlineAssignmentInd />cadastre-se</button>
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Cadastro