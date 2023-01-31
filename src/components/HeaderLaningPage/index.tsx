import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";

import { HeaderAll, HeaderContent } from "./styles";
import Logo from "../../assets/imgs/Logo.svg"

const Header = () => {
    const { modal, setModal } = useContext(ModalContext);

    return (
        <HeaderAll>
            <HeaderContent>
                <Link to="/"><img src={Logo} alt="" /></Link>
                <Link className="link" to="/">
                    Início
                </Link>
                <Link className="link" to="/about">
                    Sobre nós
                </Link>
                <Link className="link" to="/contact">
                    Contatos
                </Link>
                <div
                    className="icon"
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    <HiMenu id="burguer-menu" />
                </div>
                <Link to="/login" className="linkButton">
                    Entrar
                </Link>
            </HeaderContent>
        </HeaderAll>
    );
};

export default Header;
