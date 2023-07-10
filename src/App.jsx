import { Header } from "./components/Header";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Form } from "./components/Form";

function App() {
	return (
		<>
			<div style={{ backgroundColor: "#242424" }}>
				<Header />
			</div>
			<About />
			<Services />
			<div style={{ backgroundColor: "#242424" }}>
				<Form />
			</div>
		</>
	);
}

export default App;
