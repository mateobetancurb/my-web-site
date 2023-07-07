import Logo from "../assets/img/logo.svg";
import Photo from "../assets/img/mateo.webp";

import "../styles/index.css";
import "../styles/header.css";

function Header() {
	return (
		<>
			<header className="header container">
				<img src={Logo} alt="Logo de sitio web" className="header__logo" />
				<nav className="header__nav">
					<ul className="header__ul">
						<a
							className="header__social--media"
							href="https://twitter.com/MateoBetancurB"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter mt-4"></i>
						</a>
						<a
							className="header__social--media"
							href="https://www.instagram.com/mateobetancurb/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-instagram mt-4"></i>
						</a>
						<a
							className="header__social--media"
							href="https://github.com/mateobetancurb"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github mt-4"></i>
						</a>
						<a
							className="header__social--media"
							href="https://www.linkedin.com/in/mateobetancurb"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin mt-4"></i>
						</a>
					</ul>
				</nav>
			</header>
			<div className="container header__text">
				<img src={Photo} alt="Fotografía de Mateo Betancur" className="header__img" />
				<div>
					<h1 className="header__text--h1">
						Hola! Soy Mateo... programador de software
					</h1>
					<h2 className="header__text--p">De tu imaginación a la realidad</h2>
					<button className="header__text--contact">Contáctame</button>
				</div>
			</div>
		</>
	);
}

export { Header };
