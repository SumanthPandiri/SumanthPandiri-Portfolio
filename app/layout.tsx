import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Sumanth Pandiri - Full-Stack Developer & AI/ML Engineer',
	description:
		'Welcome to my portfolio! I am a passionate full-stack developer and AI/ML engineer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, robotics, and machine learning applications.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'AI/ML Engineer',
		'Robotics Engineer',
		'Frontend Development',
		'Backend Development',
		'Consulting',
		'Solutions Architecture',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Python',
		'TensorFlow',
		'ROS2',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'Sumanth Pandiri',
	],
	authors: [{ name: 'Sumanth Pandiri' }],
	creator: 'Sumanth Pandiri',
	openGraph: {
		title: 'Sumanth Pandiri - Full-Stack Developer & AI/ML Engineer Portfolio',
		description:
			'Passionate full-stack developer and AI/ML engineer creating complete web solutions, robotics applications, and machine learning systems. Explore my projects and technical expertise.',
		url: 'https://sumanthpandiri.com',
		siteName: 'Sumanth Pandiri - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sumanth Pandiri - Full-Stack Developer & AI/ML Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
