import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import { services } from "../helpers/index";
import "../styles/index.css";
import "../styles/form.css";

const Form = () => {
	const [disableBtn, setDisableBtn] = useState(false);
	const [showOtherService, setShowOtherService] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [otherService, setOtherService] = useState("");
	const [description, setDescription] = useState("");

	//TODO: message when user finish correctly the form
	//TODO: clear form state

	useEffect(() => {
		if (
			name.trim() !== "" &&
			email.trim() !== "" &&
			service.trim() !== "" &&
			description.trim() !== ""
		) {
			setDisableBtn(false);
		}
	}, [name, email, service, description]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			name.trim() === "" ||
			email.trim() === "" ||
			service.trim() === "" ||
			description.trim() === "" ||
			(service === "Otro" && otherService.trim() === "")
		) {
			console.log("no se puede enviar");
			setShowAlert(true);
			setDisableBtn(true);
			return;
		}
		setShowAlert(false);
		sendData();
	};

	const sendData = () => {
		console.log("Enviando datos...");
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				name="contact"
				method="POST"
				className="container form"
				data-netlify="true"
			>
				<h2 className="form__h2">Contáctame</h2>
				<p className="form__p">Comencemos a crear eso que tienes en mente...</p>
				{showAlert && <Alert message="Todos los campos son obligatorios" />}
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					name="name"
					placeholder="Escribe tu nombre"
					className="form__input"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					placeholder="Escribe tu correo electrónico"
					className="form__input"
				/>
				<select
					onChange={(e) => {
						setService(e.target.value);
						setShowOtherService(e.target.value === "Otro");
					}}
					className="form__input round form__select"
					name="service"
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
				{showOtherService && (
					<input
						onChange={(e) => setOtherService(e.target.value)}
						type="text"
						name="otherService"
						placeholder="Escribe el tipo de servicio"
						className="form__input"
					/>
				)}
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					cols="30"
					rows="5"
					name="description"
					placeholder="Escribe una breve descripción del servicio seleccionado"
					className="form__input"
				></textarea>
				<button
					type="submit"
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
