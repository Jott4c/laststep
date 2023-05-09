import { Container, Modal } from "./styles";
import { IMessage, UserContext } from "../../providers/UserContext";
import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { MeetingRoom } from "@mui/icons-material";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ModalShowMessage = () => {
  const { openShowModal, setOpenShowModal } = useContext(ModalContext);
  const { messages, room, user, socket } = useContext(UserContext);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="body-msg">
            {messages.map((message, index) => (
              <div key={index}>
                <li
                  className={
                    message?.user === user?.email
                      ? "message from"
                      : "message to"
                  }
                >
                  <p>{message?.text}</p>
                  <div ref={divRef} />
                </li>
                <span
                  className={
                    message?.user === user?.email ? "dateFrom" : "dateTo"
                  }
                >
                  {dayjs(message?.createDate).format("DD/MM/YYYY  HH:mm")}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-btn">
              <div>
                <textarea
                  id=""
                  cols={25}
                  rows={3}
                  className="area-response"
                  {...register("text")}
                ></textarea>
              </div>
              <button className="btn-response" type="submit">
                Responder
              </button>
            </div>
          </form>
        </Modal>
      </Container>
    );
  }
  return <></>;
};

export default ModalShowMessage;
