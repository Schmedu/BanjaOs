import { motion } from 'framer-motion';

export default function rightSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative flex items-center justify-center text-center lg:text-right">
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">Birkenzweige / Wenik</h2>
                            <p className="mt-4">
                                Genießen Sie trockene Luft, die nur ein Holzofen erzeugen kann.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 1.0 }}
                        whileInView={{ opacity: 1, rotate: 3, transition: { duration: 0.75 } }}
                        viewport={{ once: true }}
                    >

                        <div className="relative z-10 rounded-3xl shadow-lg">
                            <div className="relative h-64 sm:h-80">
                                <img
                                    alt="House"
                                    src="gallery/Holzofen.jpg"
                                    className="absolute inset-0 h-full w-full object-cover object-bottom rounded-3xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}