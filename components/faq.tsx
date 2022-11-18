
const Faq = () => {
    const texts = [
        {
            title: "Darf man Essen & Trinken mitnehmen?",
            content: "Selbstverständlich! Falls du etwas mitnehmen möchtest, kannst du dies gerne tun. Falls du etwas vergessen haben solltest, kannst du es auch vor Ort kaufen.",
        },
        {
            title: "Blabla bla?",
            content: "This website is a demo of the Next.js framework.",
        }
    ]
    return (
        <div className="space-y-4">
            {texts.map((text, index) => (
                <div key={index}>
                    <details className="group">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                        >
                            <h2 className="font-medium text-gray-900">
                                {text.title}
                            </h2>

                            <svg
                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            {text.content}
                        </p>
                    </details>
                </div>
            ))}
        </div>
    );
};
export default Faq;
