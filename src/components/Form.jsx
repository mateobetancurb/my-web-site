import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import { services } from "../helpers/index";
import "../styles/index.css";
import "../styles/form.css";

const Form = () => {
	const [disableBtn, setDisableBtn] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		service: "",
		description: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (
			formData.name.trim() !== "" &&
			formData.email.trim() !== "" &&
			formData.service.trim() !== "" &&
			formData.description.trim() !== ""
		) {
			setDisableBtn(false);
		}
	}, [formData.name, formData.email, formData.service, formData.description]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.name.trim() === "" ||
			formData.email.trim() === "" ||
			formData.service.trim() === "" ||
			formData.description.trim() === "" ||
			(formData.service === "Otro" && formData.otherService.trim() === "")
		) {
			setShowAlert(true);
			setDisableBtn(true);
			return;
		}
		setShowAlert(false);
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const sendData = async () => {
		try {
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: encode({ "form-name": "contact-form", ...formData }),
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				name="contact"
				data-netlify="true"
				className="container form"
			>
				<h2 className="form__h2">Contáctame</h2>
				<p className="form__p">Comencemos a crear eso que tienes en mente...</p>
				{showAlert && <Alert message="Todos los campos son obligatorios" />}
				<input
					type="text"
					name="name"
					id="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Escribe tu nombre"
					className="form__input"
				/>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Escribe tu correo electrónico"
					className="form__input"
				/>
				<select
					name="service"
					id="service"
					value={formData.service}
					onChange={handleChange}
					className="form__input round form__select"
				>
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
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					cols="30"
					rows="5"
					placeholder="Escribe una breve descripción del servicio seleccionado"
					className="form__input"
				></textarea>
				<button
					type="submit"
					onClick={sendData}
					className={disableBtn ? "form__button--disable" : "form__button"}
					disabled={disableBtn}
				>
					Enviar
				</button>
			</form>
		</>
	);
};

export { Form };

//TODO: message when user finish correctly the form
//TODO: clear form state
