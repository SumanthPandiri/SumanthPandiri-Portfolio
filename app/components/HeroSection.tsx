'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
	const [currentText, setCurrentText] = useState('');
	const fullText = "Full Stack Software Engineer";
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < fullText.length) {
			const timeout = setTimeout(() => {
				setCurrentText(prev => prev + fullText[currentIndex]);
				setCurrentIndex(prev => prev + 1);
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [currentIndex]);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			{/* Enhanced Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div 
					initial={{ opacity: 0, y: 20 }} 
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-8 md:mb-12"
				>
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<motion.h1 
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-4xl md:text-7xl font-bold text-purple-600"
						>
							Sumanth Pandiri
						</motion.h1>
						
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-2xl md:text-4xl font-bold text-white"
						>
							{currentText}
							<span className="animate-pulse">|</span>
						</motion.h2>
						
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-base md:text-lg max-w-2xl mx-auto"
						>
							<span className="text-orange-400 font-semibold">Mercer Engineering Research Center</span> 
						</motion.p>
						
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
						>
							Driven to create solutions that serve people. My work spans full stack tools, AI/ML applications, robotics, solution engineering, and consulting.
						</motion.p>
					</div>

					{/* Social Links */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1.0 }}
						className="flex justify-center space-x-6 mt-8"
					>
						<motion.a
							href="https://github.com/SumanthPandiri"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
						>
							<svg className="w-6 h-6 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</motion.a>
						
						<motion.a
							href="https://linkedin.com/in/sumanth-pandiri"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
						>
							<svg className="w-6 h-6 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</motion.a>
						
						<motion.a
							href="mailto:pandiri05@gmail.com"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
						>
							<svg className="w-6 h-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</motion.a>
					</motion.div>
				</motion.div>
			</div>

			<div className="relative z-10 w-full max-w-4xl mx-auto mb-10 mt-32 md:mt-48 px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className="space-y-8"
				>
					<div className="flex flex-col md:flex-row gap-8 md:gap-12">
						<div className="md:w-1/3">
							<motion.h3 
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.4, duration: 0.8 }}
								className="text-2xl md:text-3xl font-bold text-white mb-6"
							>
								About Me
							</motion.h3>
						</div>
						<div className="md:w-2/3 space-y-6">
							<motion.p 
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.6, duration: 0.8 }}
								className="text-gray-300 text-base md:text-lg leading-relaxed"
							>
								I&apos;m Sumanth, an engineer currently based in Georgia. Over the last year, I&apos;ve had the opportunity to develop and ship full-stack web applications from the ground up for Air Force contracts. Throughout my career, I&apos;ve contributed to AI/ML projects, robotics projects, and held leadership in student organizations and community service organizations. I&apos;m always on the lookout for opportunities where I can make a strong impact, grow my business and leadership skills, and take ownership of my work. 
							</motion.p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
