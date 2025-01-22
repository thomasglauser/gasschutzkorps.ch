import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Impressum',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
    robots: {
        index: false,
        follow: false,
    },
};

const ImprintPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Impressum
                                </h2>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-lg sm:leading-tight">
                                        Verantwortlich für den Inhalt dieser
                                        Website:
                                    </h3>
                                    <p className="mb-8 text-base font-normal text-gray-400 leading-relaxed sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Gasschutzkorps der Freiwilligen
                                        Feuerwehr der Stadt Zug
                                        <br />
                                        Ahornstrasse 10
                                        <br />
                                        6300 Zug
                                        <br />
                                        Schweiz
                                        <br />
                                    </p>
                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-lg sm:leading-tight">
                                        Kontakt:
                                    </h3>
                                    <p className="mb-8 text-base font-normal text-gray-400 leading-relaxed sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        E-Mail: info@gasschutzkorps.ch
                                    </p>
                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-lg sm:leading-tight">
                                        Vertretungsberechtigte Personen:
                                    </h3>
                                    <p className="mb-8 text-base font-normal text-gray-400 leading-relaxed sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Michael Limacher, Präsident
                                        <br />
                                        Thomas Glauser, Beisitzer
                                    </p>
                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-lg sm:leading-tight">
                                        Haftungsausschluss:
                                    </h3>
                                    <p className="mb-8 text-base font-normal text-gray-400 leading-relaxed sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Der Verein übernimmt keine Gewähr für
                                        die Richtigkeit, Vollständigkeit und
                                        Aktualität der auf dieser Website
                                        bereitgestellten Inhalte. Jegliche
                                        Haftung für Schäden, die durch die
                                        Nutzung der bereitgestellten
                                        Informationen entstehen, ist
                                        ausgeschlossen.
                                    </p>
                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-lg sm:leading-tight">
                                        Urheberrecht:
                                    </h3>
                                    <p className="mb-8 text-base font-normal text-gray-400 leading-relaxed sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Alle Inhalte (Texte, Bilder, Grafiken,
                                        Logos, etc.) auf dieser Website sind
                                        urheberrechtlich geschützt. Jede
                                        Verwendung ohne ausdrückliche
                                        schriftliche Zustimmung des Vereins ist
                                        untersagt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImprintPage;
