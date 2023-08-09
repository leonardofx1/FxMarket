import React from "react";
import * as S from "./style";

import addProduct from "../../firebase/firebaseUtils/addDoc";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const Admin = () => {
  const { formState: erros, register, handleSubmit } = useForm();

  return (
    <S.Form onSubmit={handleSubmit}>
      <label htmlFor="">
        descrição do produto
        <textarea name="descrição do produto" cols="30" rows="5"></textarea>
      </label>
      <Input type="number"  register={register} name='valor do produto' />
       <Input type="number"  register={register} name='quantidade de parcelas' />
       <Input type="number"  register={register} name='valor das parcelas' />
      <Input type="text" register={register} name='dono do produto' />
      <Input type='file' register={register} name='imagem do produto'/>
    </S.Form>
  );
};

export default Admin;
