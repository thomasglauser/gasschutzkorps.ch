import Image from "next/image";
import { Metadata } from "next";

import Person from "@/components/Common/Person";

export const metadata: Metadata = {
  title: "Gasschutzkorps.ch | Mannschaft",
  description: "Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Die Mannschaft
                </h2>
                <Image
                  src="/images/groups/mannschaft.webp"
                  alt="Vorstand"
                  width={1000}
                  height={500}
                  style={{ width: "100%" }}
                  className="rounded-md"
                />

                <div className="mt-20 grid grid-cols-3 gap-4">
                  <Person
                    firstname="Manfred"
                    lastname="Wälchli"
                    primaryFunction="Kassier"
                    secondaryFunctions=""
                    grade="Soldat"
                    joined="2015"
                    imagePath="/images/persons/manfred-wälchlin.webp"
                  />
                  <Person
                    firstname="Markus"
                    lastname="Skupch"
                    primaryFunction="Beisitzer"
                    secondaryFunctions="Atemschutz, Chemiewehr"
                    grade="Soldat"
                    joined="2015"
                    imagePath="/images/persons/skupch-markus.webp"
                  />
                  <Person
                    firstname="Patrick"
                    lastname="Häuselmann"
                    primaryFunction="Beisitzer"
                    secondaryFunctions=""
                    grade="Offizier"
                    joined="2006"
                    imagePath="/images/persons/patrick-häuselmann.webp"
                  />
                  <Person
                    firstname="Martina"
                    lastname="Schüle"
                    primaryFunction="Aktuarin"
                    secondaryFunctions="Atemschutz, Chemiewehr, Kader FFZ, FUST, Techzug, Jugendfeuerwehr-Kader"
                    grade="Wachtmeister"
                    joined="2019"
                    imagePath="/images/persons/martina-schüle.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
