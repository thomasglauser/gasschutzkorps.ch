'use client';

import dynamic from 'next/dynamic';

const PDFWidget = dynamic(() => import('./pdfwidget'), {
    ssr: false,
});

export default function PDFContainer() {
    return <PDFWidget />;
}
