import { Metadata } from "next";
import Image from "next/image";

import Person from "@/components/Common/Person";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
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
                  Der Vorstand
                </h2>
                <Image
                  src="/images/groups/vorstand.webp"
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
                      imagePath="/images/persons/michael-limacher.webp"
                    />
                  </div>
                  <div className="">
                    <Person
                      firstname="Manfred"
                      lastname="Wälchli"
                      primaryFunction="Kassier"
                      secondaryFunctions=""
                      grade="Soldat"
                      joined="2015"
                      imagePath="/images/persons/manfred-wälchlin.webp"
                    />
                  </div>
                  <div className="">
                    <Person
                      firstname="Markus"
                      lastname="Skupch"
                      primaryFunction="Beisitzer"
                      secondaryFunctions="Atemschutz, Chemiewehr"
                      grade="Soldat"
                      joined="2015"
                      imagePath="/images/persons/skupch-markus.webp"
                    />
                  </div>
                  <div className="">
                    <Person
                      firstname="Patrick"
                      lastname="Häuselmann"
                      primaryFunction="Beisitzer"
                      secondaryFunctions=""
                      grade="Offizier"
                      joined="2006"
                      imagePath="/images/persons/patrick-häuselmann.webp"
                    />
                  </div>
                  <div className="">
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
