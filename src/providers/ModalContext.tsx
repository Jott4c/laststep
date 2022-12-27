import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "./UserContext";

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

  function modalMaisInfo(user: IUser, isOpen: boolean) {
    setOpenModalSend(isOpen);
    setUserReceived(user);
  }

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
