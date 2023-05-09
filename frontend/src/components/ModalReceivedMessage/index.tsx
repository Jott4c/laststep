import { Container, Modal } from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { IRoom, UserContext } from "../../providers/UserContext";

import { AiFillCloseCircle } from "react-icons/ai";
import ModalShowMessage from "../ModalShowMessage";

const ModalReceivedMessage = () => {
  const { openModalReceived, setOpenModalReceived, setOpenShowModal } =
    useContext(ModalContext);

  const { rooms, user, socket } = useContext(UserContext);

  console.log(rooms);

  function handleShowMsg(room: IRoom) {
    const userA = room.userA;
    const userB = room.userB;
    const data = {
      userA,
      userB,
    };
    socket.emit("selectRoom", data);
    setOpenShowModal(true);
  }

  if (openModalReceived) {
    return (
      <Container>
        <ModalShowMessage />
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
              {rooms
                .sort(
                  (a, b) =>
                    (b.messages[0].createDate as any) -
                    (a.messages[0].createDate as any)
                )
                .map((room) => (
                  <li key={room._id}>
                    <div>
                      <p>De:</p>
                      <button
                        className="btn-name"
                        onClick={() => handleShowMsg(room)}
                      >
                        {user.email === room.userA ? room.userB : room.userA}
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </Modal>
      </Container>
    );
  }
  return <></>;
};

export default ModalReceivedMessage;
