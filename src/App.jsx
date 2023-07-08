import { Header } from "./components/Header";
import { About } from "./components/About";
import { Services } from "./components/Services";

function App() {
	return (
		<>
			<div style={{ backgroundColor: "#242424" }}>
				<Header />
			</div>
			<About />
			<Services />
		</>
	);
}

export default App;
