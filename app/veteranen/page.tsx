import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Veteranen',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
};

const VeteransPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Gasschutz - Veteranen der FFZ
                                </h2>
                                <div>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Ziemlich genau 25 Jahre nach der
                                        Gründung des Gasschutz Korps, am 30.
                                        August 1976 wurde die Organisation
                                        Gasschutz - Veteranen der FFZ gegründet
                                        mit dem Ziel, die Kameradschaft zwischen
                                        Ehemaligen und Aktiven zu pflegen sowie
                                        einen jährlichen Veteranenausflug
                                        durchzuführen. Diese beiden Kernideen
                                        sind auch heute noch fester Bestandteil
                                        bei der Ausgestaltung des Vereinsleben.
                                    </p>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Die GS Veteranen rekrutieren sich aus
                                        Ehrenmitgliedern des GS Korps sowie
                                        ausgetretenen GS - Aktivmitgliedern,
                                        welche die strengen Selektionskriterien
                                        erfüllen und Willens sind. An der
                                        jährlich stattfindenden Hauptversammlung
                                        werden die neuen Mitglieder aufgenommen
                                        und begrüsst. Die Vereinsführung wird
                                        durch den Vorstand, der sich aus einem
                                        Obmann, einem Kassier sowie einem Aktuar
                                        zusammensetzt, wahrgenommen.
                                    </p>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Das Jahresprogramm streut die Anlässe
                                        gut verteilt auf das Jahr und in
                                        Koordination mit dem Programm der
                                        Aktiven. Nachfolgend die wichtigsten
                                        jährlich wiederkehrenden Anlässe:
                                    </p>

                                    <ul className="mb-8 max-w-md list-inside list-disc space-y-1 text-base font-medium leading-relaxed text-body-color">
                                        <li>
                                            Hauptversammlung Gasschutz Veteranen
                                        </li>
                                        <li>Skiweekend in Grächen</li>
                                        <li>
                                            Veteranenreise (Schweiz / Ausland)
                                        </li>
                                        <li>Tagesausflug</li>
                                        <li>Übungsbesuch des GS Korps</li>
                                    </ul>

                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Zusätzlich gibt es noch gemeinsame
                                        Anlässe mit den Aktiven des GS Korps:
                                    </p>

                                    <ul className="mb-8 max-w-md list-inside list-disc space-y-1 text-base font-medium leading-relaxed text-body-color">
                                        <li>
                                            Generalsversammlung Gasschutzkorps
                                        </li>
                                        <li>Sommerplausch</li>
                                        <li>GS Partneressen</li>
                                        <li>Tagesausflug</li>
                                        <li>Samichlausabend</li>
                                    </ul>

                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Nebst den fest verankerten Aktivitäten
                                        finden auch immer wieder ad hoc Anlässe
                                        statt und runden so das Jahresprogramm
                                        der GS Veteranen ab.
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

export default VeteransPage;
