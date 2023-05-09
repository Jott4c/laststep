import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import * as yup from "yup";
import { Container, Modal } from "./styles";
import { ModalContext } from "../../providers/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IMessage, IUser, UserContext } from "../../providers/UserContext";

const ModalSendMessage = () => {
  const { user, socket, room } = useContext(UserContext);
  const { openModalSend, userReceived, modalMaisInfo } =
    useContext(ModalContext);

  const formSchema = yup.object().shape({
    text: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm<IMessage>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IMessage) => {
    if (data.text.trim().length > 0) {
      socket.emit("message", {
        text: data.text,
        roomId: room._id,
        user: user.email,
      });
    }
    reset();
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
              {userReceived.address?.city}/{userReceived.address?.state}
            </p>
            <h4 className="info-title">Data de nascimento</h4>
            <p className="info">{userReceived.date_of_birth}</p>
            <h4 className="info-title">
              {userReceived.user_type === "Patient"
                ? "condições"
                : "Especialidades"}
            </h4>
            <p className="info">
              {userReceived.skills || userReceived.diseases}
            </p>
          </div>
          <div className="text-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="msg-input"
                rows={4}
                cols={50}
                placeholder="envie sua mensagem"
                {...register("text")}
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
