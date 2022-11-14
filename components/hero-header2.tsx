import { motion } from 'framer-motion';
import { scale } from "style-value-types";

export const HeroHeader2 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:w-full md:px-24 lg:px-8 lg:py-20 dark:bg-gray-900 bg-gradient-to-br from-orange-300 via-red-500 to-yellow-500 dark:from-br-black dark:to-br-l-twilight">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row max-w-screen-xl mx-auto">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                    <div className="max-w-xl mb-6">
                        <h1
                            className="block mb-8 text-5xl font-bold bg-transparent text-neutral-900 hover:text-neutral-900 text-white"
                            style={{ textDecoration: 'none', lineHeight: '60px' }}>
                            Osnabrücks stiller Saunagenuss. Ganz für sich allein sein.
                        </h1>
                        {/*<p className="text-gray-100 text-base md:text-lg">*/}
                        {/*    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.*/}
                        {/*</p>*/}
                    </div>
                    {/*<div className="flex items-center space-x-3 text-center justify-center lg:justify-start">*/}
                    {/*    <motion.a*/}
                    {/*        whileHover={{*/}
                    {/*            scale: 1.05,*/}
                    {/*            transition: { duration: 0.5 },*/}
                    {/*        }}*/}
                    {/*        whileTap={{ scale: 1.0 }}*/}
                    {/*        href="#"*/}
                    {/*        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
                    {/*        Termin vereinbaren*/}
                    {/*    </motion.a>*/}
                    {/*    /!*<a href="/" className="w-32 transition duration-300 hover:shadow-lg">*!/*/}
                    {/*    /!*    <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />*!/*/}
                    {/*    /!*</a>*!/*/}
                    {/*</div>*/}
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    {/*<div className="w-3/5">*/}
                    {/*    <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />*/}
                    {/*</div>*/}
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
                        <div className="w-10/12 border-2 border-white rounded-md  mx-auto">
                            <img className="object-cover" src="sauna-header.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};