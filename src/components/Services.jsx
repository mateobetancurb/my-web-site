import "../styles/index.css";
import "../styles/services.css";

const Services = () => {
	return (
		<section className="container services">
			<h2 className="services__h2">¿Qué puedo hacer por ti?</h2>
			<div className="grid__services">
				<div className="services__card">
					<h3>Sitios web</h3>
					<p>
						Diseño y desarrollo de sitios web personalizados que se ajustan a
						las necesidades y objetivos de tu negocio. Crearemos un sitio web
						atractivo y funcional utilizando tecnologías web modernas.
					</p>
				</div>
				<div className="services__card">
					<h3>Aplicaciones web</h3>
					<p>
						Desarrollo de aplicaciones web interactivas y dinámicas que brinden
						una experiencia fluida a los usuarios. Creamos aplicaciones a medida
						para satisfacer tus necesidades específicas y mejorar la interacción
						con tus clientes.
					</p>
				</div>
				<div className="services__card">
					<h3>Asesorías</h3>
					<p>
						Brindo asesoramiento experto en el desarrollo web y la
						implementación de soluciones digitales. Te guiaré en la toma de
						decisiones estratégicas para garantizar el éxito de tus proyectos en
						línea.
					</p>
				</div>
				<div className="services__card">
					<h3>Optimización</h3>
					<p>
						Actualización y modernización de proyectos web existentes.
						Evaluaremos tu sitio web actual y realizaremos mejoras
						significativas para optimizar su rendimiento, seguridad y
						experiencia de usuario.
					</p>
				</div>
				<div className="services__card">
					<h3>Diseño</h3>
					<p>
						Diseño gráfico y de interfaz de usuario (UI) atractivo y moderno
						para tus aplicaciones y sitios web. Crearemos una identidad visual
						única y atractiva que represente la esencia de tu marca.
					</p>
				</div>
				<div className="services__card">
					<h3>WordPress</h3>
					<p>
						Desarrollo y personalización de sitios web utilizando WordPress, uno
						de los sistemas de gestión de contenido más populares. Te ayudaré a
						crear un sitio web dinámico y fácil de administrar con
						funcionalidades personalizadas.
					</p>
				</div>
			</div>
		</section>
	);
};

export { Services };
