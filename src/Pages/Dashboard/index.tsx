import { Container, Main, Menu } from "./styles";
import Logo from "../../Assets/img/Logo.svg";
import { SearchOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import CardPaciente from "../../Components/CardPaciente";

import { useContext } from "react";

import { UserContext } from "../../providers/UserContext";
import SimpleBadge from "../../Components/NotifyMessage";
import ModalMaisInfo from "./../../Components/ModalMaisInfo";
import { ModalContext } from "./../../providers/ModalContext";
import ModalReceivedMessage from "../../Components/ModalReceivedMessage";
import ModalProfilePic from "../../Components/ModalProfilePic";

import NavMenu from "../../Components/NavMenu";

import ModalProfile from "../../Components/ModalProfile";

const Dashboard = () => {
  const { user, filteredUsers, handleSearch } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    setOpenModalReceived,
    setOpenModalEditPerfil,
    setOpenModalProfilePic,
  } = useContext(ModalContext);

  function handleExit() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    < Main >
      <>
        <ModalMaisInfo />
        <ModalReceivedMessage />

        <NavMenu />
        <ModalProfilePic />
        <ModalProfile />

        <Menu>
          <nav>
            <div className="top-menu">
              <img src={Logo} alt="logo" />
              <div className="inputSearch">
                <input
                  autoComplete="off"
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button>
                  <SearchOutlined className="search-icon" />
                </button>
              </div>
            </div>
            <div className="nav-menu">
              <ul className="">
                <li>
                  <Link to={"/"} className="ancors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="ancors">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="ancors">
                    Contatos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="create-menu">
              <div className="div-line"></div>
              <li>
                <button
                  className="msg-btn"
                  onClick={() => setOpenModalReceived(true)}
                >
                  Mensagens <SimpleBadge />
                </button>
              </li>
              <div className="div-line"></div>
            </div>
            <div className="user-nav">
              <div className="user-img-container">
                <img src={user.url_image} alt="" />
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
              <button className="user-out-btn" onClick={() => handleExit()}>
                Sair
              </button>
            </div>
          </nav>
        </Menu>
        <Container>
          <ul>
            {filteredUsers.map((userData) => (
              <CardPaciente key={userData.id} userData={userData} />
            ))}
          </ul>
        </Container>
      </>
    </Main >
  );
};

export default Dashboard;
