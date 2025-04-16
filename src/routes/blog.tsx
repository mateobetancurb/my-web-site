import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// import {
// 	Calendar,
// 	Clock,
// 	Search,
// 	ChevronLeft,
// 	ChevronRight,
// } from "lucide-react";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
// import { Card } from "../components/ui/Card";
import { blogPosts } from "../data/blog";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

export default function BlogPage() {}

function RouteComponent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 6;

	// Filter posts based on search query and selected categories
	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesCategories =
			selectedCategories.length === 0 ||
			post.categories.some((category) => selectedCategories.includes(category));

		return matchesSearch && matchesCategories;
	});

	// Pagination logic
	// const indexOfLastPost = currentPage * postsPerPage;
	// const indexOfFirstPost = indexOfLastPost - postsPerPage;
	// const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

	// Handle category selection
	// const toggleCategory = (category: string) => {
	// 	setCurrentPage(1); // Reset to first page when filtering
	// 	if (selectedCategories.includes(category)) {
	// 		setSelectedCategories(selectedCategories.filter((c) => c !== category));
	// 	} else {
	// 		setSelectedCategories([...selectedCategories, category]);
	// 	}
	// };

	// Clear all filters
	const clearFilters = () => {
		setSearchQuery("");
		setSelectedCategories([]);
		setCurrentPage(1);
	};
	// Sample blog data

	// Extract all unique categories
	// const allCategories = Array.from(
	// 	new Set(blogPosts.flatMap((post) => post.categories))
	// ).sort();

	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<main className="flex-1">
				{/* Blog Header */}
				<section className="w-full bg-black py-12 md:py-16">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
									Blog Articles
								</h1>
								<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Insights, tutorials, and thoughts on development, design, and
									technology.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Search and Filters */}
				<section className="w-full bg-gray-100 py-6">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
							<div className="relative w-full md:max-w-sm">
								{/* <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" /> */}
								<input
									type="search"
									placeholder="Search articles..."
									className="pl-10"
									value={searchQuery}
									onChange={(e) => {
										setSearchQuery(e.target.value);
										setCurrentPage(1);
									}}
								/>
							</div>

							<div className="flex items-center gap-2">
								<span className="text-sm font-medium">Filters:</span>
								{selectedCategories.length > 0 ? (
									<button onClick={clearFilters} className="h-8 text-xs">
										Clear All
									</button>
								) : null}
							</div>
						</div>

						{/* Category Filters */}
						{/* <div className="mt-4 flex flex-wrap gap-2">
							{allCategories.map((category) => (
								<Badge
									key={category}
									variant={
										selectedCategories.includes(category)
											? "default"
											: "outline"
									}
									className={`cursor-pointer ${
										selectedCategories.includes(category)
											? "bg-black hover:bg-gray-800"
											: "hover:bg-gray-200"
									}`}
									onClick={() => toggleCategory(category)}
								>
									{category}
								</Badge>
							))}
						</div> */}

						{/* Results summary */}
						<div className="mt-4 text-sm text-gray-600">
							Showing {filteredPosts.length}{" "}
							{filteredPosts.length === 1 ? "article" : "articles"}
							{selectedCategories.length > 0 && (
								<span> in {selectedCategories.join(", ")}</span>
							)}
							{searchQuery && <span> matching "{searchQuery}"</span>}
						</div>
					</div>
				</section>

				{/* Blog Posts Grid */}
				<section className="w-full bg-white py-12">
					<div className="container mx-auto px-4 md:px-6">
						{filteredPosts.length > 0 ? (
							<>
								{/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
									{currentPosts.map((post) => (
										<Card key={post.id} className="overflow-hidden">
											<div className="relative h-48 w-full">
												<img
													src={post.image}
													alt={post.title}
													className="h-full w-full object-cover"
												/>
											</div>
											<div className="p-4">
												<h2 className="text-lg font-bold">{post.title}</h2>
												<p className="mt-2 text-sm text-gray-600">
													{post.excerpt}
												</p>
												<div className="mt-4 flex items-center space-x-2 text-xs text-gray-500">
													<Calendar className="h-4 w-4" />
													<span>{post.date}</span>
													<Clock className="h-4 w-4" />
													<span>{post.readTime}</span>
												</div>
											</div>
										</Card>
									))}
								</div> */}

								{/* Pagination */}
								{totalPages > 1 && (
									<div className="mt-8 flex items-center justify-center gap-2">
										<button
											onClick={() =>
												setCurrentPage(Math.max(1, currentPage - 1))
											}
											disabled={currentPage === 1}
										>
											{/* <ChevronLeft className="h-4 w-4" /> */}
										</button>
										{Array.from({ length: totalPages }, (_, i) => i + 1).map(
											(page) => (
												<button
													key={page}
													className={
														currentPage === page
															? "bg-black hover:bg-gray-800"
															: ""
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
										>
											{/* <ChevronRight className="h-4 w-4" /> */}
										</button>
									</div>
								)}
							</>
						) : (
							<div className="flex flex-col items-center justify-center py-12 text-center">
								<h3 className="text-xl font-bold">No articles found</h3>
								<p className="mt-2 text-gray-600">
									Try adjusting your search or filter criteria to find what
									you're looking for.
								</p>
								<button
									className="mt-4 bg-black text-white hover:bg-gray-800"
									onClick={clearFilters}
								>
									Clear All Filters
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
