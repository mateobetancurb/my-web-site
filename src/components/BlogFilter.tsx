import React, { useState, useEffect } from "react";

interface Post {
	id: string;
	url: string;
	title: string;
	excerpt: string;
	date: string;
	categories: string[];
	image: string;
}

interface BlogFilterProps {
	posts: Post[];
	tags: string[];
}

const BlogFilter: React.FC<BlogFilterProps> = ({ posts, tags }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [filteredPostIds, setFilteredPostIds] = useState<string[]>(
		posts.map((p) => p.id)
	);
	const [showClearFilters, setShowClearFilters] = useState(false);

	useEffect(() => {
		let currentFilteredPosts = posts;

		if (searchTerm) {
			currentFilteredPosts = currentFilteredPosts.filter(
				(post: Post) =>
					post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (selectedCategories.length > 0) {
			currentFilteredPosts = currentFilteredPosts.filter((post: Post) =>
				selectedCategories.some((category: string) =>
					post.categories.includes(category)
				)
			);
		}

		const currentFilteredIds = currentFilteredPosts.map((p) => p.id);
		setFilteredPostIds(currentFilteredIds);
		setShowClearFilters(searchTerm !== "" || selectedCategories.length > 0);

		posts.forEach((post) => {
			const cardId = `post-${post.id.replace(/[^a-zA-Z0-9-_]/g, "-")}`;
			const cardElement = document.getElementById(cardId);
			if (cardElement) {
				cardElement.style.display = currentFilteredIds.includes(post.id)
					? ""
					: "none";
			}
		});

		const resultsSummary = document.getElementById("results-summary");
		if (resultsSummary) {
			if (searchTerm || selectedCategories.length > 0) {
				resultsSummary.textContent = `Mostrando ${currentFilteredIds.length} de ${posts.length} artículos.`;
			} else {
				resultsSummary.textContent = "";
			}
		}

		const noResultsDiv = document.getElementById("no-results");
		if (noResultsDiv) {
			noResultsDiv.style.display =
				currentFilteredIds.length === 0 &&
				(searchTerm !== "" || selectedCategories.length > 0)
					? "flex"
					: "none";
		}
	}, [searchTerm, selectedCategories, posts]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const toggleCategory = (category: string) => {
		setSelectedCategories((prev: string[]) =>
			prev.includes(category)
				? prev.filter((c: string) => c !== category)
				: [...prev, category]
		);
	};

	const clearFilters = () => {
		setSearchTerm("");
		setSelectedCategories([]);
	};

	useEffect(() => {
		const clearFiltersButton = document.getElementById("clear-filters-button");
		if (clearFiltersButton) {
			clearFiltersButton.style.display = showClearFilters ? "flex" : "none";
			clearFiltersButton.onclick = clearFilters;
		}

		const clearFiltersNoResultsButton = document.getElementById(
			"clear-filters-no-results-button"
		);
		if (clearFiltersNoResultsButton) {
			clearFiltersNoResultsButton.onclick = clearFilters;
		}
	}, [showClearFilters, clearFilters]);

	return (
		<>
			<section className="w-full bg-gray-100 py-6">
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div className="relative w-full md:max-w-sm">
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
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</svg>
							<input
								type="search"
								id="search-input"
								placeholder="Buscar artículos..."
								className="pl-10 w-full bg-white rounded-md p-2 text-sm shadow-sm"
								value={searchTerm}
								onChange={handleSearchChange}
							/>
						</div>
						<button
							id="clear-filters-button"
							style={{ display: showClearFilters ? "flex" : "none" }}
							className="flex items-center gap-2 h-8 text-xs bg-red-100 rounded-full px-2 cursor-pointer hover:bg-red-200 transition-all text-[#800000] w-fit"
							onClick={clearFilters}
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
								<path d="M3 6h18"></path>
								<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
								<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
							</svg>
							Borrar filtros
						</button>
					</div>

					{/* Filters */}
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag: string) => (
							<span
								key={tag}
								data-key={tag}
								className={`cursor-pointer text-[12px] rounded-full px-2 py-1 font-medium hover:bg-gray-200 border ${
									selectedCategories.includes(tag)
										? "bg-gray-300 border-gray-400"
										: "border-gray-200"
								}`}
								onClick={() => toggleCategory(tag)}
							>
								{tag}
							</span>
						))}
					</div>

					{/* Results summary */}
					<div id="results-summary" className="mt-4 text-sm text-gray-600">
						{/* Results summary will be populated by script */}
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogFilter;
