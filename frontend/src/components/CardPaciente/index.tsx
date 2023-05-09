import { IUser } from "../../providers/UserContext";
import { Li } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";

interface Iprops {
  userData: IUser;
}

const CardPaciente = ({ userData }: Iprops) => {
  const { modalMaisInfo } = useContext(ModalContext);
  return (
    <Li>
      <img src={userData.url_image} alt={userData.first_name} />
      <div className="info-container">
        <h2>{userData?.first_name}</h2>
        <p>
          {userData.address?.city}/{userData.address?.state}
        </p>
        <span>
          <strong>
            {userData.user_type === "P" ? "Condição:" : "Especialidade:"}
          </strong>
          {userData.skills || userData.diseases}
        </span>
      </div>
      <div className="container-btn">
        <button
          className="info-btn"
          onClick={() => modalMaisInfo(userData, true)}
        >
          + Informações
        </button>
      </div>
    </Li>
  );
};

export default CardPaciente;
