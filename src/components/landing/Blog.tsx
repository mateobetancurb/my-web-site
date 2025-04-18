import { Link } from "@tanstack/react-router";
import { Card } from "../ui/Card";

const Blog = () => {
	return (
		<section id="blog" className="w-full bg-white py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
							Últimos artículos
						</h2>
						<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Ideas, tutoriales y reflexiones sobre desarrollo, diseño y
							tecnología
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3].map((item) => (
						<Card
							key={item}
							image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							title="Técnicas Modernas de Desarrollo Web"
							subtitle="1 de abril, 2025 - 5 min de lectura"
							description="Explorando las últimas tendencias y mejores prácticas en desarrollo web moderno para construir aplicaciones más rápidas y eficientes."
							buttonText="Leer Más"
							styles={{
								container: "bg-white rounded-lg shadow border border-gray-200",
								contentContainer: "p-4",
								imageContainer:
									"bg-gray-300 h-48 flex items-center justify-center",
								title: "text-xl font-semibold text-gray-800",
								subtitle: "text-gray-500 text-sm",
								description: "text-gray-600",
								button:
									"bg-white text-black border border-gray-200 py-2 px-4 rounded hover:bg-black hover:text-white",
							}}
						/>
					))}
				</div>
				<div className="flex justify-center">
					<Link to="/blog" className="bg-black rounded-md py-2 px-5 text-white">
						Ir al blog
					</Link>
				</div>
			</div>
		</section>
	);
};

export { Blog };
