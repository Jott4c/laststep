import { Container, Modal } from "./styles";
import { useContext, useState } from "react";
import { ModalContext } from "./../../providers/ModalContext";
import { UserContext } from "../../providers/UserContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { AiFillCloseCircle } from "react-icons/ai";
import api from "./../../services/api";
import { IMessage } from "./../../providers/UserContext";
import ModalShowMessage from "../ModalShowMessage";

const ModalReceivedMessage = () => {
  const {
    openModalReceived,
    setOpenModalReceived,
    modalMaisInfo,
    setOpenShowModal,
  } = useContext(ModalContext);

  const [message, setMessage] = useState<IMessage | undefined>();

  async function OpenModalInfo(id: number | undefined) {
    const token = localStorage.getItem("authToken");
    await api
      .get(`users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => modalMaisInfo(res.data, true))
      .then(() => setOpenModalReceived(false));
  }

  async function handleDeleteMsg(id: number | undefined) {
    const token = localStorage.getItem("authToken");
    await api
      .delete(`message/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {

        setOpenShowModal(false);
      });
  }

  function handleShowMsg(id: number) {

    setOpenShowModal(true);
  }

  if (openModalReceived) {
    return (
      <Container>
        <ModalShowMessage
          Message={message}
          handleDeleteMsg={handleDeleteMsg}
          OpenModalInfo={OpenModalInfo}
        />
        <Modal>
          <div className="card-modal-header">
            <h3>Mensagens</h3>
            <button
              className="close-btn"
              onClick={() => setOpenModalReceived(false)}
            >
              <AiFillCloseCircle size={25} />
            </button>
          </div>
          <div className="body-msg">
            <ul>
              {/*  {newMessages.map((newMessage) => (
                <li key={newMessage.id}>
                  <div>
                    {" "}
                    <p>De:</p>
                    <button
                      className="btn-name"
                      onClick={() => OpenModalInfo(newMessage.sendId)}
                    >
                      {newMessage.userName}
                    </button>
                    <p>Mensagem:</p>
                    <button
                      className="btn-msg"
                      onClick={() => handleShowMsg(newMessage.id)}
                    >
                      {newMessage.message}
                    </button>
                  </div>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteMsg(newMessage.id)}
                  >
                    <DeleteOutlinedIcon />
                  </button>
                </li>
              ))} */}
            </ul>
          </div>
        </Modal>
      </Container>
    );
  }
  return <></>;
};

export default ModalReceivedMessage;
