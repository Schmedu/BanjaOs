import { motion } from 'framer-motion';
import ResponsiveImage from "./responsiveImage";

const Prices = () => {
    return (
        <section id={"preise"}>
            <div>
                <div className="text-center">
                    <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16" />
                    <div>
                        <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide ">
                            Preise
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 md:grid-cols-6 md:gap-5 w-full h-full">
                    <motion.div className={"col-span-4 w-full h-full"}
                        initial={{ opacity: 0.2, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.025,
                            transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 1.0 }}
                    >
                        <ResponsiveImage src={"Preisliste-weiss.png"} className={"w-full h-full object-cover"} alt={"Preisliste für Banja Os in Osnabrück. 1 Stunde Sauna kostet 10€ pro Erwachsenen, für Kinder sind es 5€. Ein Birkenquast kostet 6€, Aromen für den Aufguss gibt es für 3€ und ein Handtuch kann man sich fü4 3€ ausleihen."} />
                    </motion.div>
                    <div className={"col-span-2 w-full h-full flex flex-col gap-5"}>
                        <motion.div
                            initial={{ opacity: 0.2, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.025,
                                transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 1.0 }}
                        >
                            <ResponsiveImage src={"Familie-und-Freunde-Rabatt.png"} className={"w-full h-full object-cover"} alt={"10% Rabatt auf den Stundenpreis für 3 bis 4 Erwachsene in Banja Os - Osnabrück"} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.2, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.025,
                                transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 1.0 }}
                        >
                            <ResponsiveImage src={"Gruppen-Rabatt.png"} className={"w-full h-full object-cover"} alt={"20% Rabatt auf den Stundenpreis für Gruppen ab 5 Erwachsenen in Banja Os - Osnabrück"} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices;