import React from "react";
import * as S from "./style";


import cardData from "../../firebase/firebaseUtils/CardData";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const Admin = () => {
  const { formState: erros, register, handleSubmit } = useForm();
  
  return (
    <S.Form onSubmit={handleSubmit(cardData)}>
      <div>
      <label htmlFor="">
        descrição do produto
        <textarea placeHolder="descrição do produto" {...register('descricao')} cols="30" rows="5"></textarea>
      </label>
      <Input type="number" register={register} placeHolder="valor do produto" name='valorProduto' />
      <Input type="number" register={register} placeHolder="quantidade de parcelas" name='quantidade' />
      </div>
      <div>
        <Input type="number" register={register} placeHolder="valor das parcelas" name='valorParcelas'  />
        <Input type="text" register={register} placeHolder="criador do produto" name='criadorProduto'/>
        <Input type="file" register={register} placeHolder="imagem do produto" name='imagen' />
      </div>
      <button> Cadastrar</button>
    </S.Form>
  );
};

export default Admin;
