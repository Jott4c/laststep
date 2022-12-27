import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { UserContext } from "../../providers/UserContext";

import api from "./../../services/api";

import Logo from "../../Assets/img/Logo.svg";
import background from "../../Assets/img/tiazinha2.0.png"
import { Main, ContentForm, ContentBackground } from "./style";

import { toast } from 'react-toastify';

interface IData {
    username: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<IData>();

    const { setUser } = useContext(UserContext);

    const login = async (data: IData) => {
        const toastId = toast.loading("Aguarde...")
        try {
            const response = await api.post("users/login/", data)
            localStorage.setItem("authToken", JSON.stringify(response.data.access));
            const getUser = await api
                .get("users/1/", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${response.data.access}`,
                    },
                })
            toast.update(toastId, {
                render: "Login realizado com sucesso",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true
            })
            setUser(getUser.data)
            navigate("/dashboard");

        } catch (error: any) {
            const msg = "No active account found with the given credentials"
            if (error.response.data.detail === msg) {
                toast.update(toastId, {
                    render: "Email ou senha invalidos, tente novamente.",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true
                })

            }
        }
    }

    const [isVisible, setIsVisible] = useState(false);

    return (
        <Main>
            <ContentForm>
                <div>
                    <img src={Logo} alt="" />
                    <form onSubmit={handleSubmit(login)}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="exemplo@email.com"
                            {...register("username")}
                        />
                        <label htmlFor="password">Senha</label>
                        <div className="inputPassword">
                            <input
                                autoComplete="off"
                                id="password"
                                type={isVisible ? "text" : "password"}
                                {...register("password")}
                            />
                            <button
                                className="btnPassword"
                                type="button"
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Visibility /> : <VisibilityOff />}
                            </button>
                        </div>
                        <button>Entrar</button>
                    </form>
                    <Link to="/register" className="link">
                        Ainda não possui uma conta? Cadastre-se
                    </Link>
                </div>

            </ContentForm>
            <ContentBackground>
                <img src={background} alt="Foto de uma senhora sorrindo" />
            </ContentBackground>
        </Main >


    );
};

export default Login;
