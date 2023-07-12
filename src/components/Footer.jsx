import "../styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<p>
				<strong>Mateo</strong> &copy; Derechos Reservados -{" "}
				{new Date().getFullYear()}
			</p>
		</footer>
	);
};

export { Footer };
