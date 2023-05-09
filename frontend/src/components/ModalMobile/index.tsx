import { Container, Nav } from "./style";
import { Link } from "react-router-dom";
import SimpleBadge from "../NotifyMessage";
import { ModalContext } from "../../providers/ModalContext";
import ModalMaisInfo from "../ModalMaisInfo";
import ModalReceivedMessage from "../ModalReceivedMessage";
import ModalProfilePic from "../ModalProfilePic";
import ModalProfile from "../ModalProfile";
import { useContext } from "react";

const ModalNav = () => {
  const {
    setOpenModalReceived,
    setOpenModalProfilePic,
    setOpenModalEditPerfil,
  } = useContext(ModalContext);

  return (
    <>
      <ModalMaisInfo />
      <ModalReceivedMessage />
      <ModalProfilePic />
      <ModalProfile />

      <Container>
        <Nav>
          <div className="nav-ancors">
            <Link to={"/"} className="ancors">
              Inicio
            </Link>
            <Link to="/about" className="ancors">
              Sobre nós
            </Link>
            <Link to="/contact" className="ancors">
              Contatos
            </Link>
          </div>
          <div className="nav-msg">
            <button
              className="msg-btn"
              onClick={() => setOpenModalReceived(true)}
            >
              Mensagens <SimpleBadge />
            </button>
          </div>
          <div className="nav-user">
            <div className="user-img-container">
              {/* <img src="" alt="" /> */}
            </div>
            <h3 className="user-name">Usuário</h3>
            <button
              onClick={() => setOpenModalProfilePic(true)}
              className="user-btn"
            >
              Mudar foto
            </button>
            <button
              onClick={() => setOpenModalEditPerfil(true)}
              className="user-btn"
            >
              Editar perfil
            </button>
            <button className="user-out-btn">Sair</button>
          </div>
        </Nav>
      </Container>
    </>
  );
};

export default ModalNav;
