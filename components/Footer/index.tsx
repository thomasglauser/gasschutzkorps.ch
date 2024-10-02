"use client";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug
                </p>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Ahornstrasse 10, 6300 Zug
                </p>
                <Link
                  href="mailto:info@gasschutzkorps.ch"
                  className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark"
                  target="blank"
                >
                  info@gasschutzkorps.ch
                </Link>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Social Media
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://www.instagram.com/gasschutzkorps_ffz"
                      className="mb-4 inline-block text-base"
                      target="blank"
                    >
                      <FaInstagram size={30} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/Gasschutzkorps"
                      className="mb-4 inline-block text-base"
                      target="blank"
                    >
                      <FaFacebook size={30} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=zIMCXZ2CQTw"
                      className="mb-4 inline-block text-base"
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
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Rechtliches
                </h2>
                <ul>
                  <li>
                    <Link
                      href="imprint"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="legal"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Datenschutzerklärung
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Gott zur Ehr, dem nächsten zur Wehr.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
