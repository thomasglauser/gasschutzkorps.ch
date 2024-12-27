'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="de">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />

            <body className={`bg-black ${inter.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
