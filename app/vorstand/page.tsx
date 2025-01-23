import Image from 'next/image';
import { Metadata } from 'next';

import Person from '@/components/Common/Person';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Vorstand',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
    robots: {
        index: true,
        follow: true,
    },
};

import vorstandImage from '/public/images/groups/vorstand.webp';
import mlimacherImage from '/public/images/persons/michael-limacher.webp';
import tglauserImage from '/public/images/persons/thomas-glauser.webp';
import mskupchImage from '/public/images/persons/markus-skupch.webp';
import rjennyImage from '/public/images/persons/roman-jenny.webp';
import mschüleImage from '/public/images/persons/martina-schüle.webp';

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
                                <div className="container mx-auto px-4">
                                    <div className="flex justify-center mt-20">
                                        <Person
                                            firstname="Michael"
                                            lastname="Limacher"
                                            primaryFunction="Präsident"
                                            imagePath={mlimacherImage}
                                        />
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:gap-48">
                                        <Person
                                            firstname="Thomas"
                                            lastname="Glauser"
                                            primaryFunction="Beisitzer"
                                            imagePath={tglauserImage}
                                        />
                                        <Person
                                            firstname="Markus"
                                            lastname="Skupch"
                                            primaryFunction="Beisitzer"
                                            imagePath={mskupchImage}
                                        />
                                        <Person
                                            firstname="Roman"
                                            lastname="Jenny"
                                            primaryFunction="Kassier"
                                            imagePath={rjennyImage}
                                        />
                                        <Person
                                            firstname="Martina"
                                            lastname="Schüle"
                                            primaryFunction="Aktuarin"
                                            imagePath={mschüleImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExecutivePage;
