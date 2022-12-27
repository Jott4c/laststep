import { Container, Modal } from "./styles";
import { IMessage } from "./../../providers/UserContext";
import { useContext } from "react";
import { ModalContext } from "./../../providers/ModalContext";
import { AiFillCloseCircle } from "react-icons/ai";

interface IProps {
  Message: IMessage | undefined;
  handleDeleteMsg: (id: number | undefined) => void;
  OpenModalInfo: (id: number | undefined) => void;
}

const ModalShowMessage = ({
  Message,
  handleDeleteMsg,
  OpenModalInfo,
}: IProps) => {
  const { openShowModal, setOpenShowModal } = useContext(ModalContext);
  if (openShowModal) {
    return (
      <Container>
        <Modal>
          <div className="card-modal-header">
            <h3>Mensagen</h3>
            <button
              className="close-btn"
              onClick={() => setOpenShowModal(false)}
            >
              <AiFillCloseCircle size={25} />
            </button>
          </div>
          <div className="body-msg">{Message?.message}</div>
          <div className="container-btn">
            <button
              className="btn-delete"
              onClick={() => handleDeleteMsg(Message?.id)}
            >
              Excluir
            </button>
            <button
              className="btn-response"
              onClick={() => OpenModalInfo(Message?.id)}
            >
              Responder
            </button>
          </div>
        </Modal>
      </Container>
    );
  }
  return <></>;
};

export default ModalShowMessage;
