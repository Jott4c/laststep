import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import * as yup from "yup";
import { Container, Modal } from "./styles";
import { ModalContext } from "./../../providers/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IMessage, IUser, UserContext } from "../../providers/UserContext";
import api from "../../services/api";

const ModalSendMessage = () => {
  const { user } = useContext(UserContext);
  const { openModalSend, userReceived, modalMaisInfo } =
    useContext(ModalContext);

  const formSchema = yup.object().shape({
    message: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<IMessage>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IMessage) => {
    data.sendId = user.id;
    data.userName = user.first_name;
    data.receivedId = userReceived.id;
    const token = localStorage.getItem("authToken");
    api
      .post("message", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .then(() => modalMaisInfo({} as IUser, false));
  };

  if (openModalSend) {
    return (
      <Container>
        <Modal>
          <div className="card-modal-header">
            <h3>Informações</h3>
            <button
              className="close-btn"
              onClick={() => modalMaisInfo({} as IUser, false)}
            >
              <AiFillCloseCircle size={25} />
            </button>
          </div>
          <figure className="card-modal-img">
            <img src={userReceived.url_image} alt={userReceived.first_name} />
          </figure>
          <div className="card-modal-info">
            <h4 className="info-title">Nome</h4>
            <p className="info">{userReceived.first_name}</p>
            <h4 className="info-title">Cidade</h4>
            <p className="info">
              {userReceived.city}/{userReceived.state}
            </p>
            <h4 className="info-title">Data de nascimento</h4>
            <p className="info">{userReceived.age}</p>
            <h4 className="info-title">
              {userReceived.type === "Paciente"
                ? "condições"
                : "Especialidades"}
            </h4>
            <p className="info">{userReceived.spec_or_cond}</p>
          </div>
          <div className="text-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="msg-input"
                rows={4}
                cols={50}
                placeholder="envie sua mensagem"
                {...register("message")}
              ></textarea>
              <button className="text-btn" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </Modal>
      </Container>
    );
  }
  return <></>;
};

export default ModalSendMessage;
