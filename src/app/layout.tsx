import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section.context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Background } from "@/components/background";

const font = Open_Sans({ 
	weight: "500",
	subsets: ["latin"] });

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
				className={`${font.className} relative pt-28 sm:pt-40 text-gray-950 dark:text-white/85`}>
				<Background />
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
