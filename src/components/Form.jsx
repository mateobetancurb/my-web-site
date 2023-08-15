import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { Loader } from "./Loader";
import { Alert } from "./Alert";
import { services } from "../helpers/index";
import emailjs from "@emailjs/browser";
import "../styles/index.css";
import "../styles/form.css";

const Form = () => {
	const form = useRef();
	const [disableBtn, setDisableBtn] = useState(true);
	const [showAlert, setShowAlert] = useState(false);
	const [isSendingData, setIsSendingData] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
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
			formData.description.trim() !== "" &&
			formData.description.length > 9
		) {
			setDisableBtn(false);
		} else {
			setDisableBtn(true);
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

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					toast.success("Pronto me contactaré contigo");
				},
				(error) => {
					console.log(error.text);
					toast.error("Hubo un error al enviar el formulario");
				}
			);

		setShowAlert(false);
		setIsSendingData(true);
		setTimeout(() => {
			setIsSendingData(false);
		}, 1500);
		setFormData({
			name: "",
			email: "",
			service: "",
			description: "",
		});
		setTimeout(() => {
			setIsSubmitted(true);
		}, 1600);
		setTimeout(() => {
			setIsSubmitted(false);
		}, 6000);
	};

	return (
		<>
			<form ref={form} onSubmit={handleSubmit} className="container form">
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
					placeholder="Escribe una breve descripción del servicio seleccionado (escribe mínimo 10 caracteres)"
					className="form__input"
				></textarea>
				<button
					type="submit"
					className={
						disableBtn
							? "form__button--disable"
							: "form__button pageclip-form__submit"
					}
					disabled={disableBtn}
				>
					Enviar
				</button>
				<Toaster richColors position="bottom-center" duration={4000} />
			</form>
		</>
	);
};

export { Form };
