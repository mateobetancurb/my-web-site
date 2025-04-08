import { Link } from "@tanstack/react-router";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="flex justify-center sticky top-0 z-40 w-full border-b bg-black">
				<div className="container flex h-16 items-center justify-end px-4">
					{/* <div className="flex items-center gap-2">
						<Link to="/" className="text-xl font-bold text-white">
                            DevPortfolio
                        </Link>
					</div> */}
					<nav className="hidden md:flex gap-6">
						<a
							href="#hero"
							className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
						>
							Inicio
						</a>
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
					<button
						onClick={toggleMenu}
						className="md:hidden pr-5  text-white focus:outline-none"
						aria-label="Toggle menu"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-9 w-9 transition-transform duration-300 ease-in-out"
						>
							{isMenuOpen ? (
								<>
									<line
										x1="18"
										y1="6"
										x2="6"
										y2="18"
										className="transition-all duration-300"
									/>
									<line
										x1="6"
										y1="6"
										x2="18"
										y2="18"
										className="transition-all duration-300"
									/>
								</>
							) : (
								<>
									<line
										x1="4"
										x2="20"
										y1="12"
										y2="12"
										className="transition-all duration-300"
									/>
									<line
										x1="4"
										x2="20"
										y1="6"
										y2="6"
										className="transition-all duration-300"
									/>
									<line
										x1="4"
										x2="20"
										y1="18"
										y2="18"
										className="transition-all duration-300"
									/>
								</>
							)}
						</svg>
					</button>
				</div>
			</header>

			<div
				className={`md:hidden fixed inset-0 z-30 bg-black bg-opacity-90 transition-all duration-200 ease-in-out ${
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-full pointer-events-none"
				}`}
			>
				<button
					onClick={toggleMenu}
					className="absolute top-4 right-4 text-white focus:outline-none"
					aria-label="Close menu"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-6 w-6 hover:text-gray-300 transition-colors"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				<div className="flex flex-col items-center pt-20 h-full">
					<a
						href="#hero"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Inicio
					</a>
					<a
						href="#about"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Sobre mí
					</a>
					<a
						href="#experience"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Experiencia
					</a>
					<a
						href="#portfolio"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Portafolio
					</a>
					<Link
						to="/blog"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Blog
					</Link>
					<a
						href="#contact"
						className="w-full text-center py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
						onClick={toggleMenu}
					>
						Contacto
					</a>
				</div>
			</div>
		</>
	);
};

export { Header };
