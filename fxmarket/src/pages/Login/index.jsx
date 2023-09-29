import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Input from "../../components/Input";

import logo from "../../assets/img/logo.gif";
import gmail from "../../assets/img/gmail.png";
import * as S from "./style";
import useAuthStore from "../../store/authStore";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaCreateUser } from "../../components/schemas/schemaUser";

const Login = () => {
  const { signInGoogle } = useAuthStore((state) => ({
    signInGoogle: state.signInGoogle,
  }));

  const handleLoginGmail = (e) => {
    e.preventDefault();
    signInGoogle();
  };

  const handleUserLogin = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCreateUser),
  });

  return (
    <>
      <Header />
      <S.Main>
        <img src={logo} alt="" />
        <S.LoginForm onSubmit={handleSubmit(handleUserLogin)}>
          <div>
            {" "}
            <Input
              placeHolder="e-mail"
              register={register}
              name="email"
              type="text"
            />
            {errors.email?.message && <span> {errors.email?.message}</span>}{" "}
          </div>
          <div>
            <Input
              placeHolder="senha"
              register={register}
              name="password"
              type="password"
            />
            {errors.password?.message && (
              <span> {errors.password?.message}</span>
            )}{" "}
          </div>
          <S.BtnLogin>entrar</S.BtnLogin>
          <S.LoginInGmail onClick={handleLoginGmail}>
            {" "}
            <img src={gmail} alt="" /> entrar com o Google
          </S.LoginInGmail>
        </S.LoginForm>
      </S.Main>
    </>
  );
};

export default Login;
