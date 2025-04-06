const Experience = () => {
	return (
		<>
			<section
				id="experience"
				className="w-full bg-black py-12 md:py-24 lg:py-32"
			>
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
								Experiencia Laboral
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Mi trayectoria profesional y logros destacados durante los
								últimos 4 años.
							</p>
						</div>
					</div>
					<div className="mx-auto max-w-5xl py-12">
						<div className="space-y-8">
							<div className="rounded-lg border  bg-[#3C3C3C] p-6">
								<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
									<div>
										<h3 className="text-xl font-bold text-white">
											Desarrollador Frontend Senior
										</h3>
										<p className="text-gray-400">TechCorp Inc.</p>
									</div>
									<div className="rounded-full bg-black px-3 py-1 text-sm text-gray-300">
										2023 - Presente
									</div>
								</div>
								<div className="mt-4">
									<p className="text-gray-300">
										Lideré el desarrollo de la aplicación web insignia de la
										empresa, mejorando el rendimiento en un 40% e implementando
										nuevas funcionalidades que aumentaron la participación de
										usuarios en un 25%.
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											React
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											Next.js
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											TypeScript
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											Tailwind CSS
										</span>
									</div>
								</div>
							</div>
							<div className="rounded-lg border bg-[#3C3C3C] p-6">
								<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
									<div>
										<h3 className="text-xl font-bold text-white">
											Desarrollador Frontend
										</h3>
										<p className="text-gray-400">WebSolutions Ltd.</p>
									</div>
									<div className="rounded-full bg-black px-3 py-1 text-sm text-gray-300">
										2021 - 2023
									</div>
								</div>
								<div className="mt-4">
									<p className="text-gray-300">
										Desarrollé y mantuve múltiples sitios web y aplicaciones
										para clientes. Colaboré con diseñadores y desarrolladores
										backend para entregar productos de alta calidad a tiempo y
										dentro del presupuesto.
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											JavaScript
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											React
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											CSS
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											Node.js
										</span>
									</div>
								</div>
							</div>
							<div className="rounded-lg border bg-[#3C3C3C] p-6">
								<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
									<div>
										<h3 className="text-xl font-bold text-white">
											Desarrollador Web Junior
										</h3>
										<p className="text-gray-400">Digital Creations Agency</p>
									</div>
									<div className="rounded-full bg-black px-3 py-1 text-sm text-gray-300">
										2019 - 2021
									</div>
								</div>
								<div className="mt-4">
									<p className="text-gray-300">
										Comencé mi carrera construyendo sitios web responsivos y
										soluciones de comercio electrónico. Adquirí valiosa
										experiencia en prácticas modernas de desarrollo web y
										comunicación con clientes.
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											HTML
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											CSS
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											JavaScript
										</span>
										<span className="rounded-full bg-black px-3 py-1 text-xs text-gray-300">
											WordPress
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { Experience };
