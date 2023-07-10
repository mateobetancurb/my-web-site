import "../styles/index.css";
import "../styles/form.css";

const Form = () => {
	const services = [
		{ id: 1, name: "Sitios web" },
		{ id: 2, name: "Aplicaciones web" },
		{ id: 3, name: "Asesorías" },
		{ id: 4, name: "Optimización" },
		{ id: 5, name: "Diseño" },
		{ id: 6, name: "WordPress" },
		{ id: 7, name: "Otro" },
	];

	return (
		<>
			<form className="container form">
				<h2 className="form__h2">Contáctame</h2>
				<p className="form__p">Comencemos a crear eso que tienes en mente...</p>
				<input
					type="text"
					placeholder="Escribe tu nombre"
					className="form__input"
				/>
				<input
					type="number"
					placeholder="Escribe tu número de contacto"
					className="form__input"
				/>
				<select className="form__input round form__select">
					<option value="">-- Selecciona un servicio --</option>
					{services.map((service) => (
						<option
							key={service.id}
							value={service.name}
							className="form__select--option"
						>
							{service.name}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Escribe el tipo de servicio"
					className="form__input"
				/>
				<textarea
					cols="30"
					rows="5"
					placeholder="Escribe una breve descripción del servicio seleccionado"
					className="form__input"
				></textarea>
				<button className="form__button">Enviar</button>
			</form>
		</>
	);
};

export { Form };
