interface CardProps {
	image: string;
	title: string;
	subtitle: string;
	description: string;
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
	subtitle,
	description,
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
					{/* <img src="" alt="" /> */}
					<span className="text-gray-500">Imagen del Proyecto {image}</span>
				</div>
			</div>
			<div className={`p-6 ${styles.contentContainer || ""}`}>
				<div className="mb-2">
					<h3 className={`text-xl font-bold ${styles.title || ""}`}>{title}</h3>
					<p className={`text-gray-400 text-sm ${styles.subtitle || ""}`}>
						{subtitle}
					</p>
				</div>
			</div>
			<div className="px-6 pb-4 flex-grow">
				<p className={`text-gray-300 ${styles.description || ""}`}>
					{description}
				</p>
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
