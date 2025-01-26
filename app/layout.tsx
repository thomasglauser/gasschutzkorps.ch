'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../styles/index.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        console.log(`
   _______  _______  ________      __   __    ___     _     ___  
  |   ____||   ____||       /     /_ | /_ |  / _ \\   / \\   /  /  
  |  |__   |  |__   \`---/  /       | |  | | | (_) | ( o ) /  /   
  |   __|  |   __|     /  /        | |  | |  > _ <   \\_/ /  / _  
  |  |     |  |       /  /----.    | |  | | | (_) |     /  / / \\ 
  |__|     |__|      /________|    |_|  |_|  \\___/     /  / ( o )
                                                      /__/   \\_/ 
           `);
        console.log(`
  ,-n-."HHHHHHHHHH                   _
  L_| |______|"""o|                ;" ".
  |_  ____________|--___      _   J    l
  "(_,------(_,(_,P    _)    /O  /     
                      (_____--P=       AA
                              H       A###
    `);
    }, []);
    return (
        <html suppressHydrationWarning lang="de">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />

            <body className={`bg-black ${inter.variable}`}>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-0YQYV9WXRD`}
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0YQYV9WXRD');
            `}
                </Script>
                <Header />
                {children}
                <SpeedInsights />
                <Footer />
            </body>
        </html>
    );
}
