const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full flex justify-center bg-black py-12 md:py-24 lg:py-32 xl:py-48"
		>
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex items-center justify-center order-first lg:order-last">
						<div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-white">
							<img
								src="/me.webp"
								alt="Foto de Mateo"
								fetchPriority="high"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4 order-last lg:order-first">
						<div className="space-y-2">
							<h1 className="text-center md:text-start text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none mb-5">
								Programador Web
							</h1>
							<p className="text-center md:text-start max-w-[600px] text-gray-300 md:text-xl mb-5">
								Creando experiencias digitales hermosas, funcionales y fáciles
								de usar con 4 años de experiencia profesional.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<button className="w-full md:w-[130px] cursor-pointer bg-white rounded-md p-2 text-black hover:bg-gray-600 hover:text-white transition-all">
								Ver mi trabajo
							</button>
							<button className="w-full md:w-[130px] cursor-pointer text-white bg-gray-600 rounded-md p-2 border-white hover:bg-white hover:text-black transition-all">
								Contáctame
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Hero };
