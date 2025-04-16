import { Card } from "../ui/Card";

const Portfolio = () => {
	return (
		<>
			<section
				id="portfolio"
				className="w-full bg-black py-12 md:py-24 lg:py-32"
			>
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
								Mi portafolio
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-4">
								Explora una selección de mis proyectos recientes que muestran
								mis habilidades y experiencia
							</p>
						</div>
					</div>
					<p className="text-gray-300 text-center">
						Pronto pondré aquí algunos de los proyectos en que he trabajado como
						freelance
					</p>
					{/* <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<Card
								key={item}
								image="..."
								title="Proyecto cool"
								subtitle="App web"
								description="	Una aplicación web moderna construida con React y Next.js, con diseño
					      responsivo y una experiencia de usuario fluida"
								buttonText="Ver más"
								styles={{
									container: "bg-[#3C3C3C] rounded-lg shadow",
									button: "text-white",
								}}
							/>
						))}
					</div> */}
				</div>
			</section>
		</>
	);
};

export { Portfolio };
