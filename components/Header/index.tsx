'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import menuData from './menuData';
import { motion, AnimatePresence } from 'framer-motion';

import logoImage from '/public/images/general/logo.webp';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const usePathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY >= 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setNavbarOpen(false);
    }, [usePathName]);

    const handleNavClick = (path: any) => {
        if (usePathName === path) {
            setNavbarOpen(false);
        } else {
            router.push(path);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all ${
                sticky ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto flex items-center p-4">
                <Link href="/" className="w-60 max-w-full px-4 xl:mr-12">
                    <Image
                        src={logoImage}
                        alt="Gasschutzkorps"
                        width={140}
                        height={30}
                    />
                </Link>

                <nav className="hidden lg:flex space-x-6 ml-6">
                    {menuData.map((menuItem, index) => (
                        <div key={index} className="relative group">
                            <Link
                                href={menuItem.path || '#'}
                                className="text-white hover:text-gray-400 duration-300"
                            >
                                {menuItem.title}
                            </Link>
                        </div>
                    ))}
                </nav>

                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="lg:hidden focus:outline-none flex flex-col space-y-1 ml-auto mr-10"
                >
                    <div
                        className={`w-6 h-0.5 bg-white transition-all ${
                            navbarOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-white transition-all ${
                            navbarOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-white transition-all ${
                            navbarOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    />
                </button>
            </div>

            <AnimatePresence>
                {navbarOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 lg:hidden"
                    >
                        {menuData.map((menuItem, index) => (
                            <div key={index} className="text-lg">
                                <button
                                    onClick={() =>
                                        handleNavClick(menuItem.path)
                                    }
                                    className="text-white"
                                >
                                    {menuItem.title}
                                </button>
                            </div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
