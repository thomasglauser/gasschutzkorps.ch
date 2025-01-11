'use client';

import { useState } from 'react';

async function handleSubmit(
    e: any,
    setStatus: (status: string) => void,
    resetForm: () => void
) {
    e.preventDefault();

    setStatus('loading'); // Indikator, dass das Formular absendet

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            access_key: 'a18691eb-bab2-4dbe-8dd5-7c5b12a34e0c',
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });

    const result = await response.json();

    if (result.success) {
        setStatus('success');
        resetForm();
    } else {
        setStatus('error');
    }

    // Nach 3 Sekunden den Status zurücksetzen
    setTimeout(() => setStatus(''), 5000);
}

const Contact = () => {
    const [status, setStatus] = useState(''); // Status: '', 'loading', 'success', 'error'

    // Funktion, um das Formular zurückzusetzen
    const resetForm = () => {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    };

    return (
        <section id="contact" className="overflow-hidden">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="wow fadeInUp mb-12 rounded-sm px-8 py-11 shadow-three bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <form
                                id="contact-form"
                                onSubmit={(e) =>
                                    handleSubmit(e, setStatus, resetForm)
                                }
                            >
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Wie lautet dein Vor/Nachname?"
                                                className="w-full rounded-sm border border-stroke  px-6 py-3 text-base outline-none border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                E-Mail
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Wie lautet deine E-Mail?"
                                                className="w-full rounded-sm border border-stroke px-6 py-3 text-base outline-none border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                Nachricht
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="Wie lautet deine Nachricht?"
                                                className="w-full resize-none rounded-sm border border-stroke px-6 py-3 text-base outline-none border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <button
                                            type="submit"
                                            className={`rounded-sm px-9 py-4 text-base font-medium text-white duration-300 shadow-submit-dark ${
                                                status === 'loading'
                                                    ? 'bg-gray-500 cursor-not-allowed'
                                                    : status === 'success'
                                                    ? 'bg-green-500'
                                                    : status === 'error'
                                                    ? 'bg-red-500'
                                                    : 'bg-primary hover:bg-primary/90'
                                            }`}
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading'
                                                ? 'Senden...'
                                                : status === 'success'
                                                ? 'Gesendet!'
                                                : status === 'error'
                                                ? 'Fehler!'
                                                : 'Senden'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
