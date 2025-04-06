const About = () => {
	return (
		<>
			<section id="about" className="w-full bg-white py-12 md:py-24 lg:py-32">
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
								Sobre mí
							</h2>
							<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Con 4 años de experiencia en desarrollo de software, me
								especializo en crear aplicaciones web modernas y responsivas que
								ofrecen experiencias de usuario excepcionales.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
						{/* <img
							src="/placeholder.svg?height=600&width=600"
							width={600}
							height={600}
							alt="Imagen Sobre Mí"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
						/> */}
						<div className="flex flex-col justify-center space-y-4">
							<ul className="grid gap-6">
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold text-black">
											Desarrollo Frontend
										</h3>
										<p className="text-gray-600">
											Con experiencia en TypeScript, en React y Vue y sus
											ecosistemas y frameworks CSS para construir interfaces de
											usuario responsivas e interactivas
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold text-black">
											Desarrollo Backend
										</h3>
										<p className="text-gray-600">
											Competente en Node.js, Express, Docker y tecnologías de
											bases de datos como MySQL y PostgreSQL para crear
											aplicaciones robustas del lado del servidor
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold text-black">
											Diseño UI/UX
										</h3>
										<p className="text-gray-600">
											Hábil en la creación de experiencias de usuario intuitivas
											y diseños visualmente atractivos que captan a los usuarios
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { About };
