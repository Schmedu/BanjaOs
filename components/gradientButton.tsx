import { motion } from 'framer-motion';
import React from "react";
import Link from "next/link";

interface Props {
    buttonText: string,
    href?: string,
    classNames?: string,
    onClick?: () => void
    delay: number
    additionalMotions?: any
}

export default function GradientButton({ buttonText, href, classNames, onClick, delay = 0 }: Props) {
    let gradientButton = (
        <motion.button
            type="submit"
            className={`px-5 py-2 rounded-lg text-br-l-blush bg-br-l-twilight ${classNames}`}
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: [1, 1.02, 1.0], transition: { duration: 0.75, delay: delay } }}
            viewport={{ once: false }}
            whileHover={{
                background: [
                    "linear-gradient(to right bottom, #7B506F, #7B506F, #7B506F)",
                    "linear-gradient(to right bottom, #946085, #7B506F, #7B506F)",
                    "linear-gradient(to right bottom, #946085, #7B506F, #593A50)",
                    "linear-gradient(to right bottom, #593A50, #946085, #7B506F)",
                    "linear-gradient(to right bottom, #7B506F, #593A50, #946085)",
                    "linear-gradient(to right bottom, #7B506F, #7B506F, #593A50)",
                    "linear-gradient(to right bottom, #7B506F, #7B506F, #7B506F)",
                    "linear-gradient(to right bottom, #7B506F, #7B506F, #7B506F)",
                    "linear-gradient(to right bottom, #7B506F, #7B506F, #7B506F)",
                ],
                scale: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.05, 1.0],
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 3, ease: "easeInOut", times: [0, 0.2, 0.5, 1], repeat: Infinity, repeatDelay: 1 }}
            onClick={onClick}
        >
            <span> {buttonText} </span>
        </motion.button>
    )
    return (
        <>
            {href ? <Link href={href}>{gradientButton}</Link> : gradientButton}
        </>
    )
}