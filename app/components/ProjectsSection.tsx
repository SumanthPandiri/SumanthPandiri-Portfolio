'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ProjectsSection() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const skills = {
		"Programming Languages": ["Python", "C#", "C", "C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Java"],
		"Frameworks & Libraries": ["ASP.NET (C#)", "Svelte", "React", "Next.js", "Node.js", "Bootstrap CSS", "Tailwind CSS", "Wix"],
		"Infrastructure & DevOps": [
			"Amazon Web Services",
			"Google Cloud Platform",
			"Git",
			"Linux",
			"Oracle",
			"SQL Server",
			"REST API Development",
			"Serverless Architecture",
			"Vercel"
		],
		"Robotics": [
			"ROS2",
			"ROS",
			"Raspberry Pi",
			"Arduino",
			"Turtlebot",
			"Computer Vision",
			"Motion Planning"
		],
		"Artificial Intelligence & Machine Learning": [
			"TensorFlow",
			"PyTorch",
			"TensorFlow.js",
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Scikit-learn",
			"CNN",
			"LSTM",
			"RNN",
			"Deep Learning",
			"Reinforcement Learning",
			"Model Interpretability",
			"Transfer Learning",
			"Computer Vision"
		],
		"Soft / Leadership Skills": [
			"Leadership & Initiative",
			"Cross-Functional Collaboration", 
			"Communication",
			"Project Ownership",
			"Agile",
			"Technical Writing",
			"Consulting",
			"Solutions Architecture",
			"System Design"
		]
	};

	const getCategoryColor = (categoryIndex: number) => {
		const colors = [
			'bg-blue-500/20 text-blue-400 border-blue-500/30',
			'bg-purple-500/20 text-purple-400 border-purple-500/30',
			'bg-green-500/20 text-green-400 border-green-500/30',
			'bg-orange-500/20 text-orange-400 border-orange-500/30',
			'bg-pink-500/20 text-pink-400 border-pink-500/30',
			'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
		];
		return colors[categoryIndex % colors.length];
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.4
			}
		}
	};

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 20
		},
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.4
			}
		}
	};

	const modalVariants = {
		hidden: { 
			opacity: 0,
			scale: 0.8
		},
		visible: { 
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3
			}
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.2
			}
		}
	};

	const projects = [
		{
			id: 1,
			title: "IDEA Lab ML Application",
			description: "As the sole developer as part of the Clemson IDEA Lab (now Vanderbilt), I created a web application for elementary students to learn AI concepts, such as image recognition, data biases, hyperparameter tuning, and train/test phases. This application was built using MobileNet, with the machine learning done entirely on the client side using TensorFlow.js. Students can train and test in live time, use their live camera or upload files, download and reuse models, and customize training parameters.",
			image: "/IDEA-Lab-Demo.png",
			imageAlt: "IDEA Lab ML Project",
			skills: ["JavaScript", "Svelte", "Tailwind CSS", "TensorFlow.js", "Image Recognition", "Transfer Learning", "Convolutional Neural Networks"],
			achievements: [
				"99%+ Model Accuracy, Live Testing",
				"Minimal Training Data Required",
				"Real-time, Speedy Processing",
				"Customizable Features"
			],
			githubUrl: "https://github.com/SumanthPandiri/IDEALabMLTool",
			layout: "image-left"
		},
		{
			id: 2,
			title: "Amazon Web Services Capstone Project",
			description: "As part of a team of 6, I architected an integrated user system using AWS Cloud Computing Services in a consulting project for our client, Clemson Makerspace. This system unified scattered means of data collection into a centralized data hub, eliminated lengthy, preliminary forms for their users, reduced costs, and collected valuable user demographics for client stakeholders. We incorporated a 3D printing digital interface using Raspberry Pis and OctoPrint, allowing for virtual printing and control, live machine monitoring and management, and automated data collection and storage through Webhooks, APIs, and AWS API Gateway, Lambda, and DynamoDB.",
			image: "/aws-diagram.png",
			imageAlt: "AWS Architecture Diagram",
			skills: ["Amazon Web Services", "Data Architecture", "Automation", "REST APIs", "Cloud Computing Architecture", "Raspberry Pi", "Python", "Consulting", "Solutions Architecture"],
			achievements: [
				"Significant Cost Reductions",
				"Automated Data Collection",
				"Live Machine Monitoring and Control",
				"Centralized Data Hub",
				"Simplified User Experience"
			],
			layout: "image-right"
		},
		{
			id: 3,
			title: "Human-Inspired Multi-Agent Navigation using Knowledge Distillation",
			description: "Developed during Summer 2023, this project is a kinematic, differential drive implementation of KDMA for multi-agent navigation. It implements a neural network trained on human movement patterns, as well as a reinforcement learning policy that minimizes colisions and maximizes efficiency. This was applied to TurtleBot4 with HTC Vive 2 trackers for real-time location and orientation tracking, using ROS/ROS2. The system demonstrates the potential for human-inspired navigation in multi-agent settings.",
			image: "/KDMA.gif",
			imageAlt: "KDMA Analytics Platform",
			skills: ["Python", "ROS2", "ROS", "TurtleBot4", "HTC Vive 2", "Autonomous Navigation", "Machine Learning", "Reinforcement Learning", "Robotics"],
			achievements: [
				"Autonomous Navigation on TurtleBot4",
				"Real-Time Location Tracking with HTC Vive 2",
				"Kinematic Differential Drive Implementation",
				"ROS2 Integration",
				"Simulated Real-World Environment"
			],
			githubUrl: "https://github.com/SumanthPandiri/KDMARos",
			layout: "image-left"
		},
		{
			id: 4,
			title: "CERM Foundation Website",
			description: "The CERM Foundation is a non-profit organization that builds, serves, and celebrates underserved communities in Pickens County, SC. I was tasked with designing a website for the organization that would be used to showcase their mission, programs, and events. I corresponded directly with the organization's leadership to ensure the website was a true reflection of their values and mission. I am still involved with the organization, and have been able to help them with their digital needs.",
			image: "/cerm-site.png",
			imageAlt: "CERM Foundation Website Screenshot",
			skills: ["Wix", "Web Design", "Consulting", "User Experience", "Organization Brand and Image"],
			achievements: [
				"Complete Website Design",
				"Portrayed Foundation Branding, History, and Mission",
				"Search Engine Optimization (SEO)",
				"Event Management and Past Event Showcase"
			],
			websiteUrl: "https://cermfoundation.org",
			layout: "image-right"
		}
	];

	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-3xl font-bold mb-16 text-center"
				>
					Featured Projects
				</motion.h2>

				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="space-y-16"
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							whileHover={{ 
								y: -8,
								transition: { duration: 0.3 }
							}}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
						>
							<div className="p-8">
								<div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
									project.layout === 'image-right' ? 'lg:grid-flow-col-dense' : ''
								}`}>
									{/* Image */}
									<div className={`${
										project.layout === 'image-right' ? 'lg:col-start-2' : ''
									}`}>
										<div className="bg-black/40 rounded-xl p-4 hover:bg-black/50 transition-all duration-300 border border-gray-700/30 hover:border-gray-600/50 flex items-center justify-center h-full">
											<div className="bg-black/60 rounded-lg p-4 overflow-hidden cursor-pointer group w-full max-w-lg">
												<img 
													src={project.image} 
													alt={project.imageAlt} 
													onClick={() => setSelectedImage(project.image)}
													className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300 group-hover:shadow-lg"
												/>
											</div>
										</div>
									</div>

									{/* Content */}
									<div className={`space-y-6 ${
										project.layout === 'image-right' ? 'lg:col-start-1' : ''
									}`}>
										<div>
											<h3 className="text-2xl font-bold mb-4">
												{project.title}
											</h3>
											<p className="text-gray-400 mb-4">
												{project.description}
											</p>
										</div>

										<div className="flex flex-wrap gap-2 mb-6">
											{project.skills.map((skill, skillIndex) => (
												<span 
													key={skillIndex}
													className="px-3 py-1 bg-blue-500/20 text-blue-400 border-blue-500/30 rounded-full text-xs hover:bg-blue-500/30 transition-colors"
												>
													{skill}
												</span>
											))}
										</div>

										<div className="space-y-3 mb-6">
											<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{project.achievements.map((achievement, achievementIndex) => (
													<li key={achievementIndex}>• {achievement}</li>
												))}
											</ul>
										</div>

										{project.githubUrl && (
											<motion.a 
												href={project.githubUrl} 
												target="_blank" 
												rel="noopener noreferrer"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
											>
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
												</svg>
												View on GitHub
											</motion.a>
										)}

										{project.websiteUrl && (
											<motion.a 
												href={project.websiteUrl} 
												target="_blank" 
												rel="noopener noreferrer"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
											>
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
												Visit Website
											</motion.a>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Skills Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mt-32"
				>
					<h2 className="text-3xl font-bold mb-16 text-center">
						Skills & Technologies
					</h2>

					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{Object.entries(skills).map(([category, skillList], index) => (
							<motion.div
								key={category}
								whileHover={{ 
									y: -5,
									transition: { duration: 0.3 }
								}}
								className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
							>
								<h3 className="text-lg font-bold mb-4 text-center">
									{category}
								</h3>
								<div className="grid grid-cols-2 gap-2">
									{skillList.map((skill, skillIndex) => (
										<div
											key={skill}
											className={`flex items-center justify-center px-2 py-1 rounded-full border ${getCategoryColor(index)} hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
										>
											<span className="text-xs font-medium text-center leading-tight">{skill}</span>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Image Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					>
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl p-4 border border-gray-700 shadow-2xl"
						>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							<img
								src={selectedImage}
								alt="Enlarged project image"
								className="w-full h-full object-contain rounded-lg"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}