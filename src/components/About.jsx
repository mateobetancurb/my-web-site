import "../styles/about.css";
import "../styles/index.css";

const About = () => {
	return (
		<>
			<main className="container about">
				<h2 className="about__h2">¿Quién soy?</h2>
				<p>
					Me gusta aprender y enseñar de lo que me apasiona: el desarrollo de
					software. Si tuviera que escoger una palabra para definir lo que hago
					sería: transparencia, me identifico con ella, con los proyectos
					transparentes y con la transparencia del código.
				</p>
				<p>
					Llevo 3 años desarrollando proyectos en la industria tecnológica para
					empresas, marcas y personas. Creer en los proyectos es ver más allá
					del código, es conectar con ellos y hacer de ellos algo que impacte.
				</p>
				<p>
					Me gusta crear con {""}
					<strong>
						JavaScript, TypeScript, React, Vue, Node, Express, MySQL y MongoDB.
					</strong>
				</p>
				<p>
					Puedes ver algunos de mis trabajos haciendo{" "}
					<a
						href="https://github.com/mateobetancurb/project-list"
						target="_blank"
						rel="noreferrer"
						className="about__link"
					>
						clic aquí
					</a>
				</p>
			</main>
		</>
	);
};

export { About };
