import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import Logo from "../../assets/imgs/Logo.svg";
import background from "../../assets/imgs/background-register.jpg";
import { ContentBackground, ContentForm, Main } from "./styles";

import api from "../../services/api";
import { toast } from "react-toastify";

export interface IRegister {
  first_name: string;
  email: string;
  password?: string;
  last_name: string;
  username: string;
  date_of_birth: string;
  phone: string;
  user_type: string;
}

const Register = () => {
  const yup = require("yup");
  require("yup-password")(yup);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    first_name: yup.string().required("Digite seu nome"),
    last_name: yup.string().required("Digite seu sobrenome"),
    email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(8, "A senha deve conter no mínimo 8 caracteres"),
    user_type: yup.string().required(),
    username: yup.string().required("Digite seu username"),
    phone: yup.string().required("Digite seu telefone com DD"),
    date_of_birth: yup.string().required("Digite sua data de nascimento"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Aguarde...");

    try {
      const response = await api.post("users/", data);
      if (response.status === 201) {
        navigate("/login");
      }
      toast.update(toastId, {
        render: "Registro realizado com sucesso",
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } catch (error: any) {
      console.log(error);
      let msg = "Houve um erro, tente novamente";
      if (error.response.data.username) {
        msg = "Username já foi utilizado";
      } else if (error.response.data.email) {
        msg = "Email já foi utilizado";
      }

      toast.update(toastId, {
        render: msg,
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <Main>
      <ContentForm>
        <div>
          <img src={Logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <p>{errors.first_name?.message}</p>
            <input
              type="text"
              id="name"
              {...register("first_name")}
              placeholder="Digite seu nome"
            />

            <label htmlFor="lastname">Sobrenome</label>
            <p>{errors.last_name?.message}</p>
            <input
              type="text"
              id="lastname"
              {...register("last_name")}
              placeholder="Digite seu sobrenome"
            />

            <label htmlFor="username">Username</label>
            <p>{errors.username?.message}</p>
            <input
              type="text"
              id="username"
              {...register("username")}
              placeholder="Digite seu username"
            />

            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Digite seu email"
            />

            <label htmlFor="phone">Telefone</label>
            <InputMask
              mask={"(99)99999-9999"}
              alwaysShowMask={false}
              type={"text"}
              placeholder="Ex: (99) 99999-9999"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>

            <label htmlFor="age">Data de nascimento</label>
            <p>{errors.date_of_birth?.message}</p>
            <input type="date" id="age" {...register("date_of_birth")} />

            <label htmlFor="type">Sou</label>
            <select {...register("user_type")}>
              <option value="P">Paciente</option>
              <option value="N">Cuidador</option>
            </select>
            <label htmlFor="password">Senha</label>
            <div className="inputPassword">
              <input
                autoComplete="off"
                type={isVisible ? "text" : "password"}
                {...register("password")}
              />
              <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <Visibility /> : <VisibilityOff />}
              </button>
            </div>
            <p>{errors.password?.message}</p>
            <button type="submit">Cadastre-se</button>
          </form>
          <Link className="link" to="/login">
            Já possui uma conta? Faça o login
          </Link>
        </div>
      </ContentForm>
      <ContentBackground>
        <img src={background} alt="um idoso com terno preto" />
      </ContentBackground>
    </Main>
  );
};

export default Register;
