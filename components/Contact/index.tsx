'use client';

async function handleSubmit(e: any) {
    e.preventDefault();
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
    }
}

const Contact = () => {
    return (
        <section id="contact" className="overflow-hidden">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="wow fadeInUp mb-12 rounded-sm  px-8 py-11 shadow-three bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <form onSubmit={handleSubmit}>
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
                                        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 shadow-submit-dark">
                                            Senden
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
