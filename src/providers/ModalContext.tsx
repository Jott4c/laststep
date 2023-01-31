import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IUser, UserContext } from "./UserContext";

interface AuthProviderData {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  openModalSend: boolean;
  setOpenModalSend: Dispatch<SetStateAction<boolean>>;
  userReceived: IUser;
  setUserReceived: Dispatch<SetStateAction<IUser>>;
  modalMaisInfo: (user: IUser, isOpen: boolean) => void;
  openModalReceived: boolean;
  setOpenModalReceived: Dispatch<SetStateAction<boolean>>;
  openShowModal: boolean;
  setOpenShowModal: Dispatch<SetStateAction<boolean>>;
  openModalEditPefil: boolean;
  setOpenModalEditPerfil: Dispatch<SetStateAction<boolean>>;
  openModalProfilePic: boolean;
  setOpenModalProfilePic: Dispatch<SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as AuthProviderData);

export const ModalProvider = ({ children }: AuthProviderProps) => {
  const [modal, setModal] = useState(false);

  const [openModalSend, setOpenModalSend] = useState(false);
  const [openModalReceived, setOpenModalReceived] = useState(false);
  const [openShowModal, setOpenShowModal] = useState(false);
  const [userReceived, setUserReceived] = useState({} as IUser);
  const [openModalEditPefil, setOpenModalEditPerfil] = useState(false);
  const [openModalProfilePic, setOpenModalProfilePic] = useState(false);

  const { user, socket } = useContext(UserContext);

  const modalMaisInfo = (userReceived: IUser, isOpen: boolean) => {
    const userA = userReceived.email;
    const userB = user.email;
    const data = {
      userA,
      userB,
    };
    socket.emit("selectRoom", data);

    setOpenModalSend(isOpen);
    setUserReceived(userReceived);
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        openModalSend,
        setOpenModalSend,
        userReceived,
        setUserReceived,
        modalMaisInfo,
        openModalReceived,
        setOpenModalReceived,
        openShowModal,
        setOpenShowModal,
        openModalEditPefil,
        setOpenModalEditPerfil,
        openModalProfilePic,
        setOpenModalProfilePic,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
