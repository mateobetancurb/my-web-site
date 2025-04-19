interface CardProps {
	image: string;
	title: string;
	date: string;
	subtitle?: string;
	description: string;
	categories?: string[];
	buttonText: string;
	styles?: {
		container?: string;
		imageContainer?: string;
		contentContainer?: string;
		title?: string;
		subtitle?: string;
		description?: string;
		button?: string;
	};
}

const Card = ({
	image,
	title,
	date,
	subtitle,
	description,
	categories,
	buttonText,
	styles = {},
}: CardProps) => {
	return (
		<div
			className={`overflow-hidden rounded-lg bg-[#3C3C3C] text-white flex flex-col ${
				styles.container || ""
			}`}
		>
			<div
				className={`aspect-video w-full overflow-hidden ${
					styles.imageContainer || ""
				}`}
			>
				<div className="h-48 bg-white flex items-center justify-center">
					<img src={image} alt={title} />
				</div>
			</div>
			<div className={`p-6 ${styles.contentContainer || ""}`}>
				<div className="flex gap-2">
					{categories?.map((category) => (
						<span
							key={category}
							className="bg-[#F3F4F6] text-black  inline-block mb-3 text-[11px] rounded-full px-2 font-medium"
						>
							{category}
						</span>
					))}
				</div>
				<div className="mb-2">
					<h3 className={`text-xl font-bold ${styles.title || ""}`}>{title}</h3>
					<p className={`text-gray-400 text-sm ${styles.subtitle || ""}`}>
						{subtitle}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<svg
						width="15"
						height="15"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#71717A"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-calendar-icon lucide-calendar"
					>
						<path d="M8 2v4" />
						<path d="M16 2v4" />
						<rect width="18" height="18" x="3" y="4" rx="2" />
						<path d="M3 10h18" />
					</svg>
					<span className="text-[#71717A] text-sm">{date}</span>
				</div>
			</div>
			<div className="px-6 pb-4 flex-grow">
				<p className={`${styles.description || ""}`}>{description}</p>
			</div>

			<div className="px-6 pb-6">
				<button
					className={`cursor-pointer w-full rounded-md py-2 px-4 bg-black transition-all duration-200 transform hover:scale-105 hover:translate-y-[-1px] active:translate-y-[1px] ${
						styles.button || ""
					}`}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export { Card };
