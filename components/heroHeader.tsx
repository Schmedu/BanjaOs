import { motion } from 'framer-motion';
import GradientBg from "./gradientBg";
import ResponsiveImage from "./responsiveImage";

export const HeroHeader = () => {
    return (
        <GradientBg classNames={"px-4 py-16 mx-auto sm:w-full md:px-24 lg:px-8 lg:py-20 text-br-l-blush text-br-l-blush"}>
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row max-w-screen-xl mx-auto">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                    <div className="max-w-xl mb-6">
                        <h1
                            className="block mb-4 text-5xl font-bold bg-transparent"
                            style={{ textDecoration: 'none', lineHeight: '60px' }}>
                            Osnabrücks Holzofen Sauna mit finnischen Flair.
                        </h1>
                        <p className="text-base md:text-lg">
                            Genieße im Privaten eine Sauna mit deinen Freunden und Familie. Erlebe wie es wäre eine eigene Sauna zu haben.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 1.0 }}
                        whileInView={{ opacity: 1, rotate: 5, transition: { duration: 0.75 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-10/12 rounded-3xl  mx-auto">
                            <ResponsiveImage className="object-cover rounded-3xl" src="sauna-header.jpg" alt="" lazy={false} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </GradientBg>
    );
};