import { Metadata } from 'next';
import PDFContainer from './pdfcontainer';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Statuten',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
    robots: {
        index: false,
        follow: false,
    },
};

const StatutenPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Unsere Statuten
                                </h2>
                                <PDFContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatutenPage;
