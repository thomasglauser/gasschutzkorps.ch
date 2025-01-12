import Link from 'next/link';
import Image from 'next/image';

import heroImage from '/public/images/general/hero.webp';

const Hero = () => {
    return (
        <>
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0 h-screen">
                    <Image
                        src={heroImage}
                        alt="Background"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        placeholder="blur"
                        priority
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white px-4">
                        Willkommen auf der Vereinswebseite vom Gasschutzkorps!
                    </h1>

                    <div className="relative w-full py-6 px-4 text-white text-sm sm:text-base md:text-lg">
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

                <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
            </div>
        </>
    );
};

export default Hero;
