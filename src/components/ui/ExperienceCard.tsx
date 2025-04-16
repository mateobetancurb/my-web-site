import { ExperienceProps } from "../../types/experience";

const ExperienceCard = ({
	title,
	company,
	dates,
	description,
	highlights,
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
				<p className="text-gray-300 mb-5">{description}</p>
				<div>
					{highlights.map((item) => (
						<div key={item} className="flex mb-3 gap-2 text-gray-300">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-check-icon lucide-check"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							{item}
						</div>
					))}
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span
							key={skill}
							className="rounded-full bg-black px-3 py-1 text-sm text-gray-300"
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
