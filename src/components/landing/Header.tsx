import { Link } from "@tanstack/react-router";

const Header = () => {
	return (
		<>
			<header className="flex justify-center sticky top-0 z-40 w-full border-b bg-black">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						{/* <Link to="/" className="text-xl font-bold text-white">
							DevPortfolio
						</Link> */}
					</div>
					<nav className="hidden md:flex gap-6">
						<Link
							to="/"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Inicio
						</Link>
						<a
							href="#about"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Sobre mí
						</a>
						<a
							href="#experience"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Experiencia
						</a>
						<a
							href="#portfolio"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Portafolio
						</a>
						<Link
							to="/blog"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Blog
						</Link>
						<a
							href="#contact"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Contacto
						</a>
					</nav>
					{/* <Button variant="outline" className="md:hidden" size="icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
					</Button> */}
				</div>
			</header>
		</>
	);
};

export { Header };
