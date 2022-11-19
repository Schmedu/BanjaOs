import { motion } from 'framer-motion';
import React from "react";

interface Props {
    buttonText: string,
    href?: string,
    classNames?: string,
    onClick?: () => void
}

export default function GradientButton({ buttonText, href, classNames, onClick }: Props) {
    return (
        <motion.button
            type="submit"
            //className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            className={`px-5 py-2 rounded-lg text-br-l-blush bg-br-orange ${classNames} `}
            // className={classNames ? `bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight ${classNames}` : "bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush"}
            whileHover={{
                background: [
                    "linear-gradient(to right bottom, #EA9937, #EA9937, #EA9937)",
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #EA9937)",
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #7b506f)",
                    "linear-gradient(to right bottom, #7b506f, #735F3D, #EA9937)",
                    "linear-gradient(to right bottom, #EA9937, #7b506f, #735F3D)",
                    "linear-gradient(to right bottom, #EA9937, #EA9937, #7b506f)",
                    "linear-gradient(to right bottom, #EA9937, #EA9937, #EA9937)",
                    "linear-gradient(to right bottom, #EA9937, #EA9937, #EA9937)",
                    "linear-gradient(to right bottom, #EA9937, #EA9937, #EA9937)",
                ],
                scale: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.15, 1.0],
            }
            }
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            <span > {buttonText} </span>
        </motion.button>
    )
}