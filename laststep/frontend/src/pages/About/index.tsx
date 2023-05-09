import { Body, Text, Footer, Main } from "./style";

import Header from "../../components/HeaderLaningPage";

const About = () => {
	return (
		<>
			<Body>
				<Header />
				<Main>
					<Text>
						<h3 className="title">Last Step</h3>
						<p className="paragraph">
							Até 2050, a população com 85 anos ou mais deverá
							aumentar 351% no mundo, e o número global de
							centenários (aqueles com mais de 100 anos) deverá
							aumentar pelo menos dez vezes. Muitos precisarão de
							cuidados e assistência, e muitas dessas vezes em
							suas próprias casas.
						</p>
						<p className="paragraph">
							Nossa aplicação busca facilitar o acesso a
							enfermeiros e cuidadores de idosos, fazendo uma
							busca por região de profissionais da saúde
							disponíveis, além também de fazer com que o
							profissional possa encontrar uma fonte de renda
							encontrando idosos que necessitam de acompanhamento.
						</p>
						<p className="paragraph">
							Nosso planejamento na aplicação é criar um sistema
							de criação de profissionais da saúde ou de
							pacientes, armazenando eles na API e renderizando na
							dashboard.
						</p>
					</Text>
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

export default About;
