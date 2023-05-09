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

  const yup = require("yup");
  require("yup-password")(yup);

  const formSchema = yup.object().shape({
    first_name: yup.string(),
    last_name: yup.string(),
    phone: yup.string(),
    email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
    state: yup.string(),
    city: yup.string(),
    skills: yup.string(),
    diseases: yup.string(),
    password: yup.string(),
  });

  const { register, handleSubmit } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const typeRegister = user.user_type === "Patient" ? "diseases" : "skills";

  const onSubmit = async (data: IUser) => {
    console.log(data);
    const token = localStorage.getItem("authToken");
    try {
      if (token) {
        const updateUser = await api.patch(`users/${user.id}/`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });

        setUser(updateUser.data);
        setOpenModalEditPerfil(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

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
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="digite seu nome"
                  defaultValue={user.first_name}
                  {...register("first_name")}
                />
              </div>
              <div>
                <label htmlFor="name">Sobrenome</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="digite seu nome"
                  defaultValue={user.last_name}
                  {...register("last_name")}
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
                  defaultValue={user.address?.city}
                  {...register("address.city")}
                />
              </div>
              <div>
                <label htmlFor="state">Estado</label>
                <select
                  id="state"
                  defaultValue={user.address?.state}
                  {...register("address.state")}
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
                  {...register("date_of_birth")}
                  defaultValue={user.date_of_birth}
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
                  {user.user_type === "Patient" ? "Condição" : "Especialidade"}
                </label>
                <textarea
                  id="conditions"
                  cols={50}
                  rows={4}
                  {...register(typeRegister)}
                ></textarea>
              </div>
              <div className="container-info-btn">
                <button className="btn-salve" type="submit">
                  Salvar alterações
                </button>
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
