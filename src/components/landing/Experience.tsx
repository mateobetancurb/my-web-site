import { ExperienceCard } from "../ui/ExperienceCard";
import { experienceData } from "../../data/experience";

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
								Experiencia laboral
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Mi trayectoria profesional y logros destacados durante los
								últimos 4 años
							</p>
						</div>
					</div>
					<div className="mx-auto max-w-5xl py-12">
						<div className="space-y-8">
							{experienceData.map((item) => (
								<ExperienceCard
									id={item.id}
									key={item.id}
									title={item.title}
									company={item.company}
									description={item.description}
									dates={item.dates}
									skills={item.skills}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { Experience };
