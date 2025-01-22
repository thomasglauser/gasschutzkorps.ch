'use client';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer
                className="wow fadeInUp relative z-10 pt-16 bg-gray-dark md:pt-20 lg:pt-24"
                data-wow-delay=".1s"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                            <div className="mb-12 max-w-[360px] lg:mb-16">
                                <p className="mb-9 text-base leading-relaxed text-gray-400">
                                    Gasschutzkorps der Freiwilligen Feuerwehr
                                    der Stadt Zug
                                </p>
                                <p className="mb-9 text-base leading-relaxed text-gray-400">
                                    Ahornstrasse 10, 6300 Zug
                                </p>
                                <Link
                                    href="mailto:info@gasschutzkorps.ch"
                                    className="mb-9 text-base leading-relaxed text-gray-400"
                                    target="blank"
                                >
                                    info@gasschutzkorps.ch
                                </Link>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-white">
                                    Social Media
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="https://www.instagram.com/gasschutzkorps_ffz"
                                            className="mb-4 inline-block text-base duration-300 hover:text-white text-gray-400"
                                            target="blank"
                                        >
                                            <FaInstagram size={30} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.facebook.com/Gasschutzkorps"
                                            className="mb-4 inline-block text-base duration-300 hover:text-white text-gray-400"
                                            target="blank"
                                        >
                                            <FaFacebook size={30} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.youtube.com/watch?v=zIMCXZ2CQTw"
                                            className="mb-4 inline-block text-base duration-300 hover:text-white text-gray-400"
                                            target="blank"
                                        >
                                            <FaYoutube size={30} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-white">
                                    Rechtliches
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="imprint"
                                            className="mb-4 inline-block text-base duration-300 hover:text-white text-gray-400"
                                        >
                                            Impressum
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="legal"
                                            className="mb-4 inline-block text-base duration-300 hover:text-white text-gray-400"
                                        >
                                            Datenschutzerklärung
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-[#959CB183]"></div>
                    <div className="py-8">
                        <p className="text-center text-base text-white">
                            Gott zur Ehr, dem nächsten zur Wehr.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
