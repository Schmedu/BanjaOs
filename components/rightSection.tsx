import { motion } from 'framer-motion';
import ResponsiveImage from "./responsiveImage";

export default function rightSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex items-center justify-center text-center lg:text-right">
                    <div className="p-8 sm:p-16 lg:p-24">
                        <h2 className="text-4xl lg:text-right">Birkenquast gefällig?</h2>
                        <p className="mt-4">
                            Eine in Finnland beliebte Praxis. Es wird ein Birkenreisig angefeuchtet und sanft auf die Haut geschlagen. Das hilft dabei die Durchblutung zu erhöhen und sorgt für ein angenehmes Gefühl.
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
                            <ResponsiveImage
                                alt="Birkenzweige in Sauna mit Holzofen in Banja Os in Osnabrück"
                                src="Birkenzweig-Sauna-Banja-Os.jpg"
                                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}