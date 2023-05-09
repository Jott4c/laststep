import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../providers/ModalContext";
import { motion } from "framer-motion";
import { Modal, ModalContent } from "./styles";

const MenuContext = () => {
  const { modal } = useContext(ModalContext);

  return modal ? (
    <motion.div
      className="motion"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Modal>
        <ModalContent>
          <Link to="/" className="link">
            Inicío
          </Link>
          <Link to="/About" className="link">
            Sobre nós
          </Link>
          <Link to="/contact" className="link">
            Contatos
          </Link>
          <Link to="/login" className="linkButton">
            Login
          </Link>
        </ModalContent>
      </Modal>
    </motion.div>
  ) : (
    <></>
  );
};

export default MenuContext;
