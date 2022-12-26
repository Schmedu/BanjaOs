import { motion } from 'framer-motion';
import { scale } from "style-value-types";
import GradientBg from "./gradientBg";

export const HeroHeaderText = ({ heading }: { heading: string }) => {
    return (
        <GradientBg classNames={"px-4 py-16 mx-auto sm:w-full md:px-24 lg:px-8 lg:py-20 text-br-l-blush text-br-l-blush"}>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row max-w-screen-xl mx-auto">
                <div className="lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                    <div className="max-w-xl">
                        <h1 className="block text-5xl font-bold bg-transparent hero-header">
                            {heading}
                        </h1>
                    </div>
                </div>
            </div>
        </GradientBg>
    );
};