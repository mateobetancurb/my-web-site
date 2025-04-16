import { ExperienceProps } from "../../types/experience";

const ExperienceCard = ({
	title,
	company,
	dates,
	description,
	skills,
}: ExperienceProps) => {
	return (
		<div className="rounded-lg border  bg-[#3C3C3C] p-6">
			<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
				<div>
					<h3 className="text-xl font-bold text-white">{title}</h3>
					<p className="text-gray-400">{company}</p>
				</div>
				<div className="rounded-full bg-black px-3 py-1 text-sm text-gray-300">
					{dates}
				</div>
			</div>
			<div className="mt-4">
				<p className="text-gray-300">{description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span
							key={skill}
							className="rounded-full bg-gray-600 px-3 py-1 text-sm text-gray-300"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export { ExperienceCard };
