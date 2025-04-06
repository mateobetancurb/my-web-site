interface CardProps {
	image: string;
	title: string;
	subtitle: string;
	description: string;
	buttonText: string;
}

const Card = ({
	image,
	title,
	subtitle,
	description,
	buttonText,
}: CardProps) => {
	return (
		<div className="overflow-hidden rounded-lg bg-[#3C3C3C] text-white border border-gray-800 flex flex-col">
			<div className="aspect-video w-full overflow-hidden">
				<div className="h-48 bg-white flex items-center justify-center">
					{/* <img src="" alt="" /> */}
					<span className="text-gray-500">Imagen del Proyecto {image}</span>
				</div>
			</div>
			<div className="p-6">
				<div className="mb-2">
					<h3 className="text-xl font-bold">{title}</h3>
					<p className="text-gray-400 text-sm">{subtitle}</p>
				</div>
			</div>
			<div className="px-6 pb-4 flex-grow">
				<p className="text-gray-300">{description}</p>
			</div>
			<div className="px-6 pb-6">
				<button className="cursor-pointer w-full rounded-md py-2 px-4 text-white bg-black transition-all duration-200 transform hover:scale-105 hover:translate-y-[-1px] active:translate-y-[1px]">
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export { Card };
