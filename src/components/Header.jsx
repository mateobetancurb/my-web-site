import Logo from "../assets/img/logo.svg";
import "../styles/index.css";
import "../styles/header.css";

function Header() {
	return (
		<>
			<header className="header container">
				<img src={Logo} alt="Logo de sitio web" className="header__img" />
				<nav className="header__nav">
					<ul className="header__ul">
						<li className="header__li">
							<a href="#about" className="header__a">
								Sobre mí
							</a>
						</li>
						<li className="header__li">
							<a href="#services" className="header__a">
								Servicios
							</a>
						</li>
						<li className="header__li">
							<a href="#contact" className="header__a">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className="container header__text">
				<h1 className="header__text--h1">
					Hola! Soy Mateo... programador de software
				</h1>
				<h2 className="header__text--p">De tu imaginación a la realidad</h2>
				<button className="header__text--contact">Contáctame</button>
			</div>
		</>
	);
}

export { Header };
