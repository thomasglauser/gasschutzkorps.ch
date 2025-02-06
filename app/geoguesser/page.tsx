import { Metadata } from 'next';
import LocationGuessingGame from './geoguesser';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Geoguesser Zug Edition',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
    robots: {
        index: false,
        follow: false,
    },
};

const LegalPage = () => {
    return <LocationGuessingGame />;
};

export default LegalPage;
