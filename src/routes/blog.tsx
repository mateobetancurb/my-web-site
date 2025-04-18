import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Card } from "../components/ui/Card";
import { blogPosts } from "../data/blog";
import { blogTags } from "../data/blogTags";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 6;

	// filter and search funcionality
	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesCategories =
			selectedCategories.length === 0 ||
			post.categories.some((category) => selectedCategories.includes(category));

		return matchesSearch && matchesCategories;
	});

	// pagination
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

	const toggleCategory = (category: string) => {
		setCurrentPage(1);
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedCategories([]);
		setCurrentPage(1);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<section className="w-full bg-black py-12 md:py-16">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl mb-5 font-bold tracking-tighter text-white sm:text-5xl">
									Blog
								</h1>
								<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Reflexiones, tutoriales y benchmarks sobre desarrollo de
									software e inteligencia artificial
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* input and filters */}
				<section className="w-full bg-gray-100 py-6">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
							<div className="relative w-full md:max-w-sm ">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-search-icon lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
								>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
								<input
									type="search"
									placeholder="Buscar artículos..."
									className="pl-10 w-full bg-white rounded-md p-2 text-sm shadow-sm"
									value={searchQuery}
									onChange={(e) => {
										setSearchQuery(e.target.value);
										setCurrentPage(1);
									}}
								/>
							</div>

							{selectedCategories.length > 0 ? (
								<button
									onClick={clearFilters}
									className="flex items-center gap-2 h-8 text-xs bg-red-100 rounded-full px-2 cursor-pointer hover:bg-red-200 transition-all text-[#800000] w-fit"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#800000"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-trash-icon lucide-trash"
									>
										<path d="M3 6h18" />
										<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
										<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
									</svg>
									Borrar filtros
								</button>
							) : null}
						</div>

						{/* filters */}
						<div className="mt-4 flex flex-wrap gap-2">
							{blogTags.map((category) => (
								<span
									key={category}
									className={`cursor-pointer text-[12px] rounded-full px-2 font-medium ${
										selectedCategories.includes(category)
											? "bg-black hover:bg-gray-800 text-white"
											: "hover:bg-gray-200 border border-gray-200"
									}`}
									onClick={() => toggleCategory(category)}
								>
									{category}
								</span>
							))}
						</div>

						{/* results */}
						<div className="mt-4 text-sm text-gray-600">
							{filteredPosts.length}{" "}
							{filteredPosts.length === 1 ? "artículo" : "artículos"}
							{selectedCategories.length > 0 && (
								<span> en {selectedCategories.join(", ")}</span>
							)}
							{searchQuery && <span> coincide con "{searchQuery}"</span>}
						</div>
					</div>
				</section>

				{/* blog  */}
				<section className="w-full bg-white py-12">
					<div className="container mx-auto px-4 md:px-6">
						{filteredPosts.length > 0 ? (
							<>
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
									{currentPosts.map((post) => (
										<Card
											key={post.id}
											image={post.image}
											title={post.title}
											description={post.excerpt}
											categories={post.categories}
											buttonText="Leer artículo"
											styles={{
												container: "bg-white border border-gray-200 shadow",
												title: "text-black",
												description: "text-black",
											}}
										/>
									))}
								</div>

								{/* pagination */}
								{totalPages > 1 && (
									<div className="mt-8 flex items-center justify-center gap-2">
										<button
											onClick={() =>
												setCurrentPage(Math.max(1, currentPage - 1))
											}
											disabled={currentPage === 1}
											className="cursor-pointer"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className=" h-4 w-4 lucide lucide-chevron-left-icon lucide-chevron-left"
											>
												<path d="m15 18-6-6 6-6" />
											</svg>
										</button>
										{Array.from({ length: totalPages }, (_, i) => i + 1).map(
											(page) => (
												<button
													key={page}
													className={
														currentPage === page
															? "bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800"
															: "cursor-pointer"
													}
													onClick={() => setCurrentPage(page)}
												>
													{page}
												</button>
											)
										)}
										<button
											onClick={() =>
												setCurrentPage(Math.min(totalPages, currentPage + 1))
											}
											disabled={currentPage === totalPages}
											className="cursor-pointer"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="lucide lucide-chevron-right-icon lucide-chevron-right h-4 w-4"
											>
												<path d="m9 18 6-6-6-6" />
											</svg>
										</button>
									</div>
								)}
							</>
						) : (
							<div className="flex flex-col items-center justify-center py-12 text-center">
								<h3 className="text-xl font-bold">
									No se encontraron artículos
								</h3>
								<p className="mt-2 text-gray-600 mb-3">
									Elimina o modifica el filtro y vuelve a intentar
								</p>
								<button
									onClick={clearFilters}
									className="flex items-center gap-2 h-8 text-xs bg-red-100 rounded-full px-2 cursor-pointer hover:bg-red-200 transition-all text-[#800000]"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#800000"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-trash-icon lucide-trash"
									>
										<path d="M3 6h18" />
										<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
										<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
									</svg>
									Borrar filtros
								</button>
							</div>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
