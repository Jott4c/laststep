import { Link } from "react-router-dom";
import MenuContext from "../ModalLaningPage";
import { Content, Footer, Infos, MainContent } from "./styles";

import Img from "../../assets/imgs/Group-4.png";

const Main = () => {
  return (
    <>
      <Content>
        <div className="modal">
          <MenuContext />
        </div>
        <MainContent>
          <div className="content-info">
            <div className="infos-main">
              <h1>A sua saúde é a nossa prioridade!</h1>
              <p>
                Contrate Enfermeiras e Cuidadoras especialistas com anos de
                experiência no mercado.{" "}
              </p>
              <Link to="/register" className="linkButton">
                Conheça Nossos Especialistas
              </Link>
            </div>
            <div className="infos">
              <Infos>
                <p className="number">250+</p>
                <p>Pacientes Atendidos</p>
              </Infos>
              <Infos>
                <p className="number">96%</p>
                <p>Indice de Satisfação</p>
              </Infos>
              <Infos>
                <p className="number">50+</p>
                <p>Especialistas</p>
              </Infos>
            </div>
          </div>
          <img src={Img} alt="Médica Exemplo" />
        </MainContent>
      </Content>
      <Footer>
        <p>
          Copyright © 2022
        </p>
      </Footer>
    </>
  );
};

export default Main;
