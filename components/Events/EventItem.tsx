interface EventItem {
    title: string;
    content: string;
}

const EventItem = ({ title, content }: EventItem) => {
    return (
        <>
            <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 bg-blue-900 ring-gray-900">
                    <svg
                        className="h-2.5 w-2.5 text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </span>
                <h3 className="mb-1 flex items-center text-lg font-semibold text-white">
                    {title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                    {content}
                </p>
            </li>
        </>
    );
};

export default EventItem;
