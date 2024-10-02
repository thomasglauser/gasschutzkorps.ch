import { Metadata } from "next";
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
                <div>
                  <Person
                    firstname="Thomas"
                    lastname="Glauser"
                    primaryFunction="Soldat"
                    secondaryFunctions="Atemschutz"
                    grade="Soldier"
                    joined="Im GS seit 2021"
                    imagePath="/images/persons/michael-limacher.webp"
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
