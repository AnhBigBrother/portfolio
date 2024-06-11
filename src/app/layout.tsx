import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section.context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tien Anh Tran',
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
      <body className={`${inter.className} relative pt-28 sm:pt-40 bg-gradient-to-br from-sky-200 via-amber-50 to-sky-200 dark:from-sky-900 dark:via-slate-600 dark:to-sky-900 text-gray-950 dark:text-white/85`}>
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
