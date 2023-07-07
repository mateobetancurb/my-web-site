import { Header } from "./components/Header";
import { About } from "./components/About";

function App() {
	return (
		<>
			<div style={{ backgroundColor: "#242424" }}>
				<Header />
			</div>
			<div>
				<About />
			</div>
		</>
	);
}

export default App;
