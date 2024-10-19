import Image from "next/image";
import { Metadata } from "next";

import Person from "@/components/Common/Person";

export const metadata: Metadata = {
  title: "Gasschutzkorps.ch | Vorstand",
  description: "Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.",
};

import vorstandImage from "/public/images/groups/vorstand.webp";
import mlimacherImage from "/public/images/persons/michael-limacher.webp";
import mwälchlinImage from "/public/images/persons/manfred-wälchlin.webp";
import mskupchImage from "/public/images/persons/markus-skupch.webp";
import phäuselmannImage from "/public/images/persons/patrick-häuselmann.webp";
import mschüleImage from "/public/images/persons/martina-schüle.webp";

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Der Vorstand
                </h2>
                <Image
                  src={vorstandImage}
                  alt="Vorstand"
                  width={1000}
                  height={500}
                  style={{ width: "100%" }}
                  className="rounded-md"
                />

                <div className="mt-20 grid grid-cols-3 gap-4">
                  <div className="col-span-4 flex justify-center">
                    <Person
                      firstname="Michael"
                      lastname="Limacher"
                      primaryFunction="Präsident"
                      secondaryFunctions="Atemschutz, Seedienst"
                      grade="Soldat"
                      joined="2009"
                      imagePath={mlimacherImage}
                    />
                  </div>

                  <Person
                    firstname="Manfred"
                    lastname="Wälchli"
                    primaryFunction="Kassier"
                    secondaryFunctions=""
                    grade="Soldat"
                    joined="2015"
                    imagePath={mwälchlinImage}
                  />

                  <Person
                    firstname="Markus"
                    lastname="Skupch"
                    primaryFunction="Beisitzer"
                    secondaryFunctions="Atemschutz, Chemiewehr"
                    grade="Soldat"
                    joined="2015"
                    imagePath={mskupchImage}
                  />

                  <Person
                    firstname="Patrick"
                    lastname="Häuselmann"
                    primaryFunction="Beisitzer"
                    secondaryFunctions=""
                    grade="Offizier"
                    joined="2006"
                    imagePath={phäuselmannImage}
                  />

                  <Person
                    firstname="Martina"
                    lastname="Schüle"
                    primaryFunction="Aktuarin"
                    secondaryFunctions="Atemschutz, Chemiewehr, Kader FFZ, FUST, Techzug, Jugendfeuerwehr-Kader"
                    grade="Wachtmeister"
                    joined="2019"
                    imagePath={mschüleImage}
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
