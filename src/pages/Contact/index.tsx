import { Body, Dev, Footer, Main } from "./style";
import Header from "../../components/HeaderLaningPage";

import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Body>
        <Header />
        <Main>
          <Dev>
            <figure>
              <img className="dev-photo" src="" alt="Junior Alencar" />
            </figure>
            <h3 className="dev-name">Junior Alencar</h3>
            <div className="dev-bio">
              <h4>Tech Leader</h4>
              Responsável por tomar decisões técnicas e estratégicas para
              garantir o sucesso do projeto, Junior liderou a equipe de
              desenvolvimento, garantindo que estivessem sempre alinhados com as
              necessidades do cliente.
            </div>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
            >
              <BsLinkedin size={25} />
            </a>
          </Dev>
        </Main>
      </Body>
      <Footer>
        <p>
          Copyright © 2022 | Trabalho de Conclusão de Módulo Grupo 2 - Kenzie
          Academy Brasil
        </p>
      </Footer>
    </>
  );
};

export default Contact;
