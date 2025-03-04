'use client';

import { pdfjs, Document, Page } from 'react-pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { useState, useCallback } from 'react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './pdfwidget.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

type PDFFile = string | File | null;
import type { PDFDocumentProxy } from 'pdfjs-dist';

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;
const resizeObserverOptions = {};

const PDFWidget = () => {
    const [file, setFile] = useState<PDFFile>('./pdf/statuten.pdf');
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);
    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({
        numPages: nextNumPages,
    }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <>
            <div className="pdf_container">
                <div className="pdf_container__document" ref={setContainerRef}>
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                    >
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={
                                    containerWidth
                                        ? Math.min(containerWidth, maxWidth)
                                        : maxWidth
                                }
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </>
    );
};

export default PDFWidget;
