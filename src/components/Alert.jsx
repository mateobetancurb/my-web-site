import PropTypes from "prop-types";
import "../styles/alert.css";

const Alert = ({ message }) => {
	return <div className="alert">{message}</div>;
};

Alert.propTypes = {
	message: PropTypes.string.isRequired,
};

export { Alert };
