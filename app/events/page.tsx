import { Metadata } from 'next';

import EventItem from '@/components/Events/EventItem';
import { EventData } from '@/components/Events/EventData';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Anlässe',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
};

const EventsPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                    Unsere Anlässe
                                </h2>
                                <ol className="relative border-s border-gray-700">
                                    {EventData.map((EventData, index) => (
                                        <EventItem
                                            key={index}
                                            title={EventData.title}
                                            content={EventData.content}
                                        />
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventsPage;
