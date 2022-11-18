import { motion } from 'framer-motion';
import { scale } from "style-value-types";

export const HeroHeaderText = ({ heading }: { heading: string }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:w-full md:px-24 lg:px-8 lg:py-20 bg-gradient-to-br bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush text-br-l-blush">
            <div className="flex flex-col items-center justify-center w-full lg:flex-row max-w-screen-xl mx-auto">
                <div className="lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                    <div className="max-w-xl">
                        <h1
                            className="block text-5xl font-bold bg-transparent"
                            style={{ textDecoration: 'none', lineHeight: '60px' }}>
                            {heading}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};