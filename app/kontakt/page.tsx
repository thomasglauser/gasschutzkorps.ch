import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gasschutzkorps.ch | Kontakt',
    description: 'Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.',
};

const ContactPage = () => {
    return (
        <>
            <Contact />
        </>
    );
};

export default ContactPage;
