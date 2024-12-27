import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Geschichte',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
};

const HistoryPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Unsere Geschichte
                                </h2>
                                <div>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Bereits früher gab es einen Gasschutz in
                                        der Freiwilligen Feuerwehr der Stadt
                                        Zug. Geeignete Leute in den
                                        verschiedenen Korps waren an der
                                        Handhabung der Geräte ausgebildet. Es
                                        zeigte sich aber, dass es zweckmässig
                                        wäre, die Träger von Kreislaufgeräten in
                                        einem eigenen Korps zusammenzufassen.
                                    </p>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Am 28. Juni 1951 fand in dem Restaurant
                                        Taube die Gründungsversammlung statt. Es
                                        wurde Heinrich Schwerzmann als Chef
                                        gewählt. In den folgenden Monaten wurde
                                        eifrig Ausbildung betrieben, und man
                                        organisierte den ersten Vereinsanlass -
                                        eine Feuerwehrreise.
                                    </p>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        In den ersten Jahren seines Bestehens
                                        wurde das Kreislaufgeräte-Korps nicht
                                        oft zu Einsätzen gerufen, obschon man
                                        den damaligen Kommandanten wiederholt
                                        daran erinnerte, dass er ein solches
                                        Korps habe. Umso erfolgreicher war dafür
                                        das Vereinsleben. 1957 wurde Fritz
                                        Schumpf zum neuen Chef gewählt. Er
                                        verhalf dem Korps nun auch zu
                                        dienstlicher Blüte, zuerst als Chef,
                                        dann als Vize-Kommandant und später als
                                        Kommandant Freiwilligen Feuerwehr der
                                        Stadt Zug. 1960 wurden die ersten
                                        Pressluftatemgeräte eingeführt, und das
                                        Kreislaufgeräte-Korps rettete in der
                                        Kläranlage Zug einem Arbeiter das Leben.
                                        Mittlerweile war das Korps in den
                                        Strukturen der Freiwilligen Feuerwehr
                                        der Stadt Zug voll integriert, und sein
                                        guter Ruf weit über die Kantonsgrenzen
                                        bekannt. So wurde es 1963 nach Altdorf
                                        gerufen, wo die Draht- und Gummiwerke
                                        brannten. Trotz dem unermüdlichen
                                        Einsatz konnte damals ein Schaden von 10
                                        Millionen Franken nicht abgewendet
                                        werden.
                                    </p>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        1976 feierte das Korps sein 25-jähriges
                                        Bestehen mit einem grossen Fest. Aber
                                        auch dienstlich wurde ein Markstein
                                        gesetzt: Im Jubiläumsjahr konnte ein
                                        Fahrzeug in Betrieb genommen werden,
                                        welches besonders auf die Belange des
                                        Atemschutz eingerichtet war. Es wurde
                                        Flitzer getauft. Heute, fast 50 Jahre
                                        nach der Gründung des Gasschutzkorps,
                                        ist der Atemschutz aus einer modernen
                                        Feuerwehr nicht mehr wegzudenken.
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

export default HistoryPage;
