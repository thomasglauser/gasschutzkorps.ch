import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/general/hero.JPG"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-5xl font-bold text-white">
            Willkommen auf der Vereinswebseite vom Gasschutzkorps!
          </h1>

          {/* Text content below the title */}
          <div className="max-w-2xl text-lg text-white">
            <p>
              Unser Verein setzt sich aus aktiven und ehemaligen Feuerwehrleuten
              oder Personen welche mit der Feuerwehr zu tun haben/hatten
              zusammen.
            </p>
            <br></br>
          </div>
        </div>

        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
      </div>
    </>
  );
};

export default Hero;
