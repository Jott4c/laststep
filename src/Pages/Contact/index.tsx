import { Body, Dev, Footer, Main } from "./style";
import Header from "../../Components/HeaderLaningPage";
import Giovani from "../../Assets/imgs/Giovani.png";
import Gabs from "../../Assets/imgs/Gabs.png";
import Jasmyne from "../../Assets/imgs/Jasmyne.png";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
	return (
		<>
			<Body>
				<Header />
				<Main>
					<Dev>
						<figure>
							<img className="dev-photo" src={Gabs} alt="Gabs" />
						</figure>
						<h3 className="dev-name">Gabs Ghidini</h3>
						<div className="dev-bio">
							<h4>Quality Assurance & UI Designer</h4>
							Atuando como QA e UI Designer, Gabs projetou a parte
							visual do site além de ter colaborado com análise de
							códigos para garantir sempre escalabilidade e
							qualidade.
						</div>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/gabsghidini/"
						>
							<BsLinkedin size={25} />
						</a>
					</Dev>
					<Dev>
						<figure>
							<img
								className="dev-photo"
								src={Jasmyne}
								alt="Jasmyne Leandro"
							/>
						</figure>
						<h3 className="dev-name">Jasmyne Leandro</h3>
						<div className="dev-bio">
							<h4>Product Owner</h4>
							Atuando como uma representante do cliente, Jasmyne
							ficou responsável pela gestão do que a Last Steps
							ofereceria aos seus usuários finais.
						</div>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/jasmynelsx/"
						>
							<BsLinkedin size={25} />
						</a>
					</Dev>
					<Dev>
						<figure>
							<img
								className="dev-photo"
								src="https://ca.slack-edge.com/TQZR39SET-U035HRV95R9-7057e270805a-512"
								alt="Junior Alencar"
							/>
						</figure>
						<h3 className="dev-name">Junior Alencar</h3>
						<div className="dev-bio">
							<h4>Tech Leader</h4>
							Responsável por tomar decisões técnicas e
							estratégicas para garantir o sucesso do projeto,
							Junior liderou a equipe de desenvolvimento,
							garantindo que estivessem sempre alinhados com as
							necessidades do cliente.
						</div>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
						>
							<BsLinkedin size={25} />
						</a>
					</Dev>
					<Dev>
						<figure>
							<img
								className="dev-photo"
								src={Giovani}
								alt="Giovani Salvador"
							/>
						</figure>
						<h3 className="dev-name">Giovani Salvador</h3>
						<div className="dev-bio">
							<h4>Scrum Master</h4>
							Responsável por garantir que o Time Scrum se
							orientasse pelos valores e práticas do Scrum, além
							de garantir que os objetivos estavam claros e
							conforme o tempo esperado de desenvolvimento.
						</div>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/giovani-salvador/"
						>
							<BsLinkedin size={25} />
						</a>
					</Dev>
				</Main>
			</Body>
			<Footer>
				<p>
					Copyright © 2022 | Trabalho de Conclusão de Módulo Grupo 2 -
					Kenzie Academy Brasil
				</p>
			</Footer>
		</>
	);
};

export default Contact;
