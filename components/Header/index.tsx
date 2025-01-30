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
    const [openIndex, setOpenIndex] = useState(-1);
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
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="flex-shrink-0">
                    <Image src={logoImage} alt="Logo" width={140} height={30} />
                </Link>

                <nav className="hidden lg:flex space-x-6">
                    {menuData.map((menuItem, index) => (
                        <div key={index} className="relative group">
                            {menuItem.path ? (
                                <Link
                                    href={menuItem.path || '#'}
                                    className="text-white hover:text-gray-400"
                                >
                                    {menuItem.title}
                                </Link>
                            ) : (
                                <>
                                    <button className="text-white hover:text-gray-400">
                                        {menuItem.title}
                                    </button>
                                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 p-2 rounded shadow-lg">
                                        {menuItem.submenu?.map(
                                            (submenuItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={
                                                        submenuItem.path || '#'
                                                    }
                                                    className="block text-white hover:text-gray-400 px-4 py-2"
                                                >
                                                    {submenuItem.title}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </nav>

                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="lg:hidden focus:outline-none flex flex-col space-y-1 mr-6"
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
                            <div key={index} className="text-white text-lg">
                                {menuItem.path ? (
                                    <button
                                        onClick={() =>
                                            handleNavClick(menuItem.path)
                                        }
                                        className="hover:text-gray-400"
                                    >
                                        {menuItem.title}
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenIndex(
                                                    openIndex === index
                                                        ? -1
                                                        : index
                                                )
                                            }
                                            className="hover:text-gray-400"
                                        >
                                            {menuItem.title}
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: 'auto' }}
                                                    exit={{ height: 0 }}
                                                    className="flex flex-col space-y-2 mt-2 text-sm"
                                                >
                                                    {menuItem.submenu?.map(
                                                        (
                                                            submenuItem,
                                                            subIndex
                                                        ) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() =>
                                                                    handleNavClick(
                                                                        submenuItem.path
                                                                    )
                                                                }
                                                                className="hover:text-gray-400"
                                                            >
                                                                {
                                                                    submenuItem.title
                                                                }
                                                            </button>
                                                        )
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                )}
                            </div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
