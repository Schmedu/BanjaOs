import { motion } from 'framer-motion';
import ResponsiveImage from "./responsiveImage";

export default function leftSection() {
    return (
        <section>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0.0 }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 1.0 }}
                    whileInView={{ opacity: 1, rotate: -3, transition: { duration: 0.75, delay: 0.3 } }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 rounded-3xl shadow-lg">
                        <div className="relative h-64 sm:h-80">
                            <ResponsiveImage alt="Holzofen Sauna in Banja Os in Osnabrück" src="Holzofen.jpg" className="absolute inset-0 h-full w-full object-cover object-bottom rounded-3xl" lazy={false} />
                        </div>
                    </div>
                </motion.div>
                <div className="relative flex items-center justify-center ">
                    <div className="p-8 sm:p-16 lg:p-24 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-left">
                            Holzofen Sauna
                        </h2>
                        <p className="mt-4">
                            Ein Holzofen gibt ein unverwechselbares Erlebnis. Es gibt ein uriges Gefühl das flackernde Licht der Flammen zu sehen und den Duft von Holz in der Luft wahrzunehmen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}