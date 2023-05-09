import { Container } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { useForm } from "react-hook-form";
import { IUser } from "../../providers/UserContext";
import api from "../../services/api";
import { UserContext } from "../../providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalProfilePic = () => {
  const { openModalProfilePic, setOpenModalProfilePic } =
    useContext(ModalContext);

  const { user, setUser } = useContext(UserContext);

  const yup = require("yup");
  require("yup-password")(yup);

  const formSchema = yup.object().shape({
    url_image: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: IUser) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const newUser = await api.patch(`users/${user.id}/`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });

        setUser(newUser.data);
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (openModalProfilePic) {
    return (
      <Container>
        <div className="modal-box-patient">
          <div className="modal-header-patient">
            <h2>Mudar foto</h2>
            <button
              onClick={() => setOpenModalProfilePic(false)}
              className="close-btn"
            >
              <AiFillCloseCircle size={25} />
            </button>
          </div>
          <div className="modal-main">
            <div className="change-img-container">
              <img src={user.url_image} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>URL da foto</label>
              <input
                className="modal-inputs"
                type="text"
                id="url_image"
                {...register("url_image")}
              />
              <button className="save-info-btn" type="submit">
                Salvar alterações
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
  return <></>;
};

export default ModalProfilePic;
