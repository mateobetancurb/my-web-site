import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { About } from "../components/landing/About";
import { Experience } from "../components/landing/Experience";
import { Portfolio } from "../components/landing/Portfolio";
import { Blog } from "../components/landing/Blog";
import { Contact } from "../components/landing/Contact";
import { Footer } from "../components/landing/Footer";

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
				<Contact />
			</main>
			<Footer />
		</>
	);
}
