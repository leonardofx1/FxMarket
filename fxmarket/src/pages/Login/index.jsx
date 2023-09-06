import {useForm} from 'react-hook-form'

import Header from '../../components/Header'
import Input from '../../components/Input'

import * as S from './style'



const Login = ()=> {
    const {register} = useForm()
    return (
     <>
        <Header />
        <S.Main>
     <S.LoginForm>
     <Input 
        placeHolder='usuario'
        register={register}
        name='nameUSer'
        type='text'
         /> <Input 
         placeHolder='usuario'
         register={register}
         name='nameUSer'
         type='text'
          />
         <p>oi</p>
     </S.LoginForm>
        </S.Main>
     </>

    )
}

export default Login