import { motion } from 'framer-motion';

export default function leftSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0.5 }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 1.0 }}
                    whileInView={{ opacity: 1, rotate: -3, transition: { duration: 0.75 } }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 rounded-3xl shadow-lg">
                        <div className="relative h-64 sm:h-80">
                            <img alt="House" src="gallery/Holzofen.jpg" className="absolute inset-0 h-full w-full object-cover object-bottom rounded-3xl" />
                        </div>
                    </div>
                </motion.div>
                <div className="relative flex items-center justify-center ">
                    <div className="p-8 sm:p-16 lg:p-24 text-center lg:text-left">
                        <h2 className="text-4xl">
                            Holzofensauna
                        </h2>
                        <p className="mt-4">
                            Genießen Sie trockene Luft, die nur ein Holzofen erzeugen kann.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}