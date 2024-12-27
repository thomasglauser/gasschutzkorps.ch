const Contact = () => {
    return (
        <section
            id="contact"
            className="overflow-hidden py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="wow fadeInUp mb-12 rounded-sm  px-8 py-11 shadow-three bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s
              "
                        >
                            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Need Help? Open a Ticket
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Our support team will get back to you ASAP via
                                email.
                            </p>
                            <form>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full rounded-sm border border-stroke  px-6 py-3 text-base text-body-color outline-none focus:border-primary border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-sm border border-stroke px-6 py-3 text-base text-body-color outline-none focus:border-primary border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="mb-3 block text-sm font-medium text-white"
                                            >
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Enter your Message"
                                                className="w-full resize-none rounded-sm border border-stroke px-6 py-3 text-base text-body-color outline-none focus:border-primary border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 shadow-submit-dark">
                                            Submit Ticket
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
