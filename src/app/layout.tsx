import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section.context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tien Anh Tran",
	description: "Tien Anh's personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='!scroll-smooth'>
			<body
				className={`${inter.className} relative pt-28 sm:pt-40 text-gray-950 dark:text-white/85`}>
				<div className='fixed top-0 left-0 w-screen h-screen -z-10'>
					<div className='absolute top-0 left-0 w-screen h-screen bg-sky-100/80 dark:bg-slate-950/80 z-10'></div>
					<div className="bg-[url('/day.jpg')] dark:bg-[url('/night.jpg')] w-screen h-screen bg-cover bg-center"></div>
				</div>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<ThemeSwitch />
					<Toaster position='top-right' />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
