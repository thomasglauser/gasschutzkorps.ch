import Link from "next/link";
import Image from "next/image";

import heroImage from "/public/images/general/hero.webp";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Background"
            fill={true}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </div>

        <div className="relative z-10 flex h-2/4 items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white">
            Willkommen auf der Vereinswebseite vom Gasschutzkorps!
          </h1>
        </div>

        <div className="relative z-10 w-full py-4 text-center">
          <div className="mx-auto max-w-4xl text-lg text-white">
            <p>
              Unser Verein setzt sich aus aktiven und ehemaligen Feuerwehrleuten
              oder Personen welche mit der Feuerwehr zu tun haben/hatten
              zusammen.
            </p>
            <br></br>
            <p>
              Wir sind eine aktive und gesellige Gemeinschaft. Unser Vereinsjahr
              ist gespickt mit tollen Ausflügen, gemeinsamen Aktivitäten und
              Anlässe. Wenn wir auf unserer Vereinsreise unterwegs sind erleben
              wir Kultur, Kulinarik und unsere Kameradschaft.
            </p>
            <br></br>
            <p>
              Du hast Lust unseren Verein kennenzulernen? Dann melde dich und
              schau beim nächsten Anlass vorbei!
            </p>
            <div className=" space-x-4 p-4">
              <Link
                href="/kontakt"
                className="inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
              >
                Kontakt
              </Link>
              <Link
                href="https://www.118prozent.ch/"
                className="inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
                target="blank"
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
