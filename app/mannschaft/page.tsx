import Image from "next/image";
import { Metadata } from "next";

import Person from "@/components/Common/Person";
import { personData } from "./personData";

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

                <div className="mt-20 grid grid-cols-3 justify-items-center gap-8">
                  {personData.map((person, index) => (
                    <Person
                      key={index}
                      firstname={person.firstname}
                      lastname={person.lastname}
                      primaryFunction={person.primaryFunction}
                      secondaryFunctions={person.secondaryFunctions}
                      joined={person.joined}
                      imagePath={person.imagePath}
                    />
                  ))}
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
