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

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            Willkommen auf der Vereinswebseite vom Gasschutzkorps!
          </h1>
        </div>

        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
      </div>
    </>
  );
};

export default Hero;
