import "../styles/about.css";

const About = () => {
	return (
		<>
			<main className="container about">
				<h2 className="about__h2">¿Quién soy?</h2>
				<p>
					Tengo más de 3 años en la industria tecnológica, he desarrollado
					productos para clientes y también para empresas. Puedes ver algunos de
					mis trabajos{" "}
					<a
						href="https://github.com/mateobetancurb/project-list"
						target="_blank"
						rel="noreferrer"
						className="about__link"
					>
						aquí
					</a>
				</p>
				<h3 className="about__skills">Especialidades</h3>
				<p>
					Soy un apasionado por las tecnologías y la ingeniería de software
					enfocada a la web. Me gusta trabajar con:{" "}
					<strong>
						JavaScript, TypeScript, React, Vue, Node, Express, MySQL y MongoDB
					</strong>
				</p>
			</main>
		</>
	);
};

export { About };
