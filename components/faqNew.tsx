import { motion } from 'framer-motion';

export default function FaqNew() {
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
        <section>
            <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide   text-center">
                Häufig gestellte Fragen
            </h2>
            <div className="space-y-4 md:w-2/3 mx-auto px-4 sm:px-6 lg:px-8">
                {texts.map((text, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0.2, y: +50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
                        viewport={{ once: true }}
                    >
                        <details className="group"
                            {...(index === 0 ? { open: true } : {})}
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-3xl bg-br-l-blush-light dark:bg-br-black-400 dark:border-none p-4 shadow-lg">
                                <h3 className="font-medium ">
                                    {text.title}
                                </h3>

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

                            <p className="mt-4 px-4 leading-relaxed ">
                                {text.content}
                            </p>
                        </details>
                    </motion.div>
                ))}
            </div>
        </section >
    );
};