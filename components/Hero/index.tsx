'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = ['/images/general/hero_1.webp', '/images/general/hero_2.webp'];

const Hero = () => {
    return (
        <>
            <Script id="preload-images">
                {`
                    ${images
                        .map((src) => `new Image().src = "${src}";`)
                        .join('')}
                `}
            </Script>

            <div className="relative min-h-screen w-full overflow-x-hidden">
                <div className="absolute inset-0 h-screen z-0">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop
                        className="absolute inset-0 h-screen w-screen"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-screen w-screen">
                                    <Image
                                        src={src}
                                        alt="Background"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={index === 0}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                        quality={100}
                                        unoptimized={true}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="absolute inset-0 z-10 bg-black opacity-65"></div>

                <div className="relative z-20 flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white px-4">
                        Willkommen auf der Vereinswebseite vom Gasschutzkorps!
                    </h1>

                    <div className="relative w-full lg:w-1/2 py-6 px-4 pt-32 text-white text-sm sm:text-base md:text-lg">
                        <p>
                            Unser Verein setzt sich aus aktiven und ehemaligen
                            Feuerwehrleuten zusammen.
                        </p>
                        <br />
                        <p>
                            Wir sind eine aktive und gesellige Gemeinschaft.
                            Unser Vereinsjahr ist gespickt mit tollen Ausflügen,
                            gemeinsamen Aktivitäten und Anlässen. Wenn wir auf
                            unserer Vereinsreise unterwegs sind, erleben wir
                            Kultur, Kulinarik und unsere Kameradschaft.
                        </p>
                        <br />
                        <p>
                            Du hast Lust, unseren Verein kennenzulernen? Dann
                            melde dich und schau beim nächsten Anlass vorbei!
                        </p>
                        <div className="flex flex-wrap justify-center space-x-4 mt-4">
                            <Link
                                href="/kontakt"
                                className="inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
                            >
                                Kontakt
                            </Link>
                            <Link
                                href="https://www.118prozent.ch/"
                                className="inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
                                target="_blank"
                            >
                                Ich will zur Feuerwehr!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
