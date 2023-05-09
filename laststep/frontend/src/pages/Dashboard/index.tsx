import { Container, Main, Menu } from "./styles";
import Logo from "../../assets/imgs/Logo.svg";
import { SearchOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import CardPaciente from "../../components/CardPaciente";
import ModalMaisInfo from "../../components/ModalMaisInfo";
import ModalProfilePic from "../../components/ModalProfilePic";
import ModalProfile from "../../components/ModalProfile";
import ModalReceivedMessage from "../../components/ModalReceivedMessage";
import NavMenu from "../../components/NavMenu";

import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { UserContext } from "../../providers/UserContext";

import SimpleBadge from "../../components/NotifyMessage";

import { toast } from "react-toastify";

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
  useEffect(() => {
    if (!user.address?.city || !user.address.state) {
      toast.warn("Complete seu cadastro", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setOpenModalEditPerfil(true);
    }
  }, []);
  return (
    <Main>
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
              <h3 className="user-name">{user.first_name}</h3>
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
    </Main>
  );
};

export default Dashboard;
