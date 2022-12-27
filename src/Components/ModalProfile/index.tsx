import { Container, Modal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { IUser, UserContext } from "../../providers/UserContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ModalProfile = () => {
    const { setOpenModalEditPerfil, openModalEditPefil } =
        useContext(ModalContext);

    const { user, setUser } = useContext(UserContext);

    const [isVisible, setIsVisible] = useState(false);

    const yup = require("yup");
    require("yup-password")(yup);

    const formSchema = yup.object().shape({
        name: yup.string(),
        cpf: yup.string(),
        phone: yup.string(),
        email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
        password: yup
            .string()
            .required("Digite uma senha")
            .min(6, "A senha deve conter no mínimo 8 caracteres"),
        type: yup.string(),
        state: yup.string(),
        city: yup.string(),
        age: yup.string(),
    });

    const { register, handleSubmit } = useForm<IUser>({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data: IUser) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            api
                .patch(`users/${user.id}`, data)
                .then((res) => {
                    setUser(res.data)
                }).catch((err) => console.log(err))
        }

    };
    if (openModalEditPefil) {
        return (
            <Container>
                <Modal>
                    <div className="card-modal-header">
                        <h3>Mensagen</h3>
                        <button
                            className="close-btn"
                            onClick={() => setOpenModalEditPerfil(false)}
                        >
                            <AiFillCloseCircle size={25} />
                        </button>
                    </div>
                    <div className="modal-main">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name">Nome completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="digite seu nome"
                                    defaultValue={user.first_name}
                                    {...register("first_name")}
                                />
                            </div>
                            <div>
                                <label htmlFor="cpf">Cpf</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    placeholder="999.999.999-99"
                                    defaultValue={user.cpf}
                                    {...register("cpf")}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="(00) 0 0000-0000"
                                    defaultValue={user.phone}
                                    {...register("phone")}
                                />
                            </div>
                            <div>
                                <label htmlFor="city">Cidade</label>
                                <input
                                    type="text"
                                    id="city"
                                    defaultValue={user.city}
                                    {...register("city")}
                                />
                            </div>
                            <div>
                                <label htmlFor="state">Estado</label>
                                <select
                                    id="state"
                                    defaultValue={user.state}
                                    {...register("state")}
                                >
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="age">Data de nascimento</label>
                                <input
                                    type="date"
                                    id="age"
                                    {...register("age")}
                                    defaultValue={user.age}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="exemplo@exemplo.com"
                                    defaultValue={user.email}
                                    {...register("email")}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Sou</label>
                                <select defaultValue={user.type} {...register("type")}>
                                    <option value="Paciente">Paciente</option>
                                    <option value="Cuidador">Cuidador</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="password">Senha</label>
                                <div className="inputPassword">
                                    <input
                                        autoComplete="off"
                                        type={isVisible ? "text" : "password"}
                                        {...register("password")}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Visibility /> : <VisibilityOff />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="conditions">
                                    {user.type === "Paciente" ? "Condição" : "Especialidade"}
                                </label>
                                <textarea id="conditions" cols={50} rows={4}></textarea>
                            </div>
                            <div className="container-info-btn">
                                <button className="btn-salve">Salvar alterações</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </Container>
        );
    }
    return <></>;
};

export default ModalProfile;
