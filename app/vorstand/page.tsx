import { Metadata } from 'next';
import Image from 'next/image';

import vorstandImage from '/public/images/groups/vorstand.webp';
import PersonGroup from '@/components/Common/PersonGroup';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Vorstand',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
    robots: {
        index: true,
        follow: true,
    },
};

const ExecutivePage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Der Vorstand
                                </h2>
                                <Image
                                    src={vorstandImage}
                                    alt="Vorstand"
                                    width={1000}
                                    height={500}
                                    style={{ width: '100%' }}
                                    className="rounded-md"
                                />
                                <PersonGroup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExecutivePage;
