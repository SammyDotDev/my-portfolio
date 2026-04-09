// @ts-ignore
import React, { useState } from "react";
import { WorkItem } from "../../types/types";
import {
	X,
	Github,
	ExternalLink,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const mountElement = document.getElementById("overlay");
const WorkCard = ({ work }: { work: WorkItem }) => {
	const [showModal, setShowModal] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	// if (mountElement) {
	// 	mountElement.addEventListener("click", () => setShowModal(false));
	// }
	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === work.subImages.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? work.subImages.length - 1 : prev - 1,
		);
	};
	return (
		<>
			<div
				className="group relative shadow-lg border-dashed border-4
            border-[#fff]
            //   hover:border-[#aceeb4]
              transition-all duration-300 flex flex-col justify-between lg:w-[23%] sm:w-full md:w-[48%] min-h-[500] rounded-3xl p-4 work-card hover:rotate-3 hover:scale-90"
			>
				{/* Main Image */}
				<div className="relative overflow-hidden rounded-[47px]">
					<img
						src={work.image}
						alt={work.title}
						loading={"lazy"}
						className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300 rounded-[48px]"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
				</div>

				{/* Card Content */}
				<div className="p-6">
					<h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-[#aceeb4] transition-colors">
						{work.title}
					</h3>

					<p className="text-gray-400 text-sm mb-4 line-clamp-3">
						{work.description}
					</p>

					{/* Tech Stack */}
					<div className="flex flex-wrap gap-2 mb-4">
						{work.techStack.slice(0, 4).map((tech, index) => (
							<span
								key={index}
								className="px-2 py-1 bg-[#383838] text-gray-100 text-xs rounded-full font-medium"
							>
								{tech}
							</span>
						))}
						{work.techStack.length > 4 && (
							<span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full font-medium">
								+{work.techStack.length - 4} more
							</span>
						)}
					</div>

					{/* Sub-images preview */}
					<div className="flex gap-2 mb-4 overflow-x-auto">
						{work.subImages.slice(0, 3).map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`${work.title} preview ${index + 1}`}
								loading={"lazy"}
								className="w-16 h-12 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
								onClick={() => setShowModal(true)}
							/>
						))}
						{work.subImages.length > 3 && (
							<div
								className="bg-[#343a40] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#6c757d] transition-colors flex-shrink-0 ml-auto px-5"
								onClick={() => setShowModal(true)}
							>
								<span className="text-m text-[#e9ecef] font-medium">
									+{work.subImages.length - 3}
								</span>
							</div>
						)}
					</div>

					{/* Action Buttons */}
					<div className="flex gap-3 mt-auto">
						<button
							onClick={() => setShowModal(true)}
							className="flex-1 bg-[#aceeb4] text-[#141d1d] py-2 px-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
						>
							View Details
						</button>

						<a
							href={work.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-[#343a40] rounded-full hover:bg-gray-700 transition-colors"
						>
							<Github size={20} className="text-[#e9ecef]" />
						</a>

						{work.liveLink && (
							<a
								href={work.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
							>
								<ExternalLink size={20} className="text-gray-200" />
							</a>
						)}
					</div>
				</div>
			</div>

			{/* Modal */}
			{showModal &&
				createPortal(
					<div
						className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[99999] p-4"
						onClick={() => setShowModal(false)}
					>
						<motion.div
							className="bg-black max-w-4xl max-h-[90vh] overflow-y-auto w-full rounded-3xl border-2 border-[#aceeb4]"
							onClick={(event) => event.stopPropagation()}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ ease: "easeInOut", duration: 0.5 }}
						>
							{/* Modal Header */}
							<div className="flex justify-between items-center p-6 border-b border-[#555555]">
								<h2 className="text-2xl font-bold text-gray-100">
									{work.title}
								</h2>
								<button
									onClick={() => setShowModal(false)}
									className="p-1 rounded-xl"
								>
									<X size={24} className="text-red-300" />
								</button>
							</div>

							{/* Modal Content */}
							<div className="p-6">
								{/* Image Gallery */}
								<div className="relative mb-6 p-5 bg-[#000000] rounded-2xl">
									<img
										src={work.subImages[currentImageIndex]}
										alt={`${work.title} - Image ${currentImageIndex + 1}`}
										className="w-full h-64 md:h-80 object-contain rounded-lg"
									/>

									{work.subImages.length > 1 && (
										<>
											<button
												onClick={prevImage}
												className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
											>
												<ChevronLeft size={20} />
											</button>
											<button
												onClick={nextImage}
												className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
											>
												<ChevronRight size={20} />
											</button>
										</>
									)}

									{/* Image indicators */}
									<div className="flex justify-center gap-2 mt-4">
										{work.subImages.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImageIndex(index)}
												className={`w-3 h-3 rounded-full transition-all ${
													currentImageIndex === index
														? "bg-gray-300"
														: "bg-[#383838]"
												}`}
											/>
										))}
									</div>
								</div>

								{/* Description */}
								<div className="mb-6">
									<h3 className="text-lg font-semibold text-gray-100 mb-2">
										About this project
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{work.description}
									</p>
								</div>

								{/* Tech Stack */}
								<div className="mb-6">
									<h3 className="text-lg font-semibold text-gray-100 mb-3">
										TECHNOLOGIES
									</h3>
									<div className="flex flex-wrap gap-2">
										{work.techStack.map((tech, index) => (
											<span
												key={index}
												className="px-3 py-2 bg-[#aceeb4] text-black text-sm rounded-full font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links */}
								<div className="flex gap-4">
									<a
										href={work.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-2xl font-medium hover:bg-gray-200 transition-all"
									>
										<Github size={20} />
										View Codebase
									</a>

									{work.liveLink && (
										<a
											href={work.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
										>
											<ExternalLink size={20} />
											Live Demo
										</a>
									)}
								</div>
							</div>
						</motion.div>
					</div>,
					mountElement,
				)}
		</>
	);
};

export default WorkCard;
