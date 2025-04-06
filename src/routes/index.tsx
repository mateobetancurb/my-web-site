import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Blog } from "../components/Blog";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Portfolio />
				<Blog />
			</main>
		</>
	);
}
