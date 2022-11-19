import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode
    classNames?: string
}

export default function GradientBg({ children, classNames }: Props) {
    return (
        <motion.div aria-label="Site Footer"
            className={classNames ? `bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight ${classNames}` : "bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush"}
            animate={{
                background: [
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #7b506f)",
                    "linear-gradient(to right bottom, #7b506f, #735F3D, #EA9937)",
                    "linear-gradient(to right bottom, #EA9937, #7b506f, #735F3D)",
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #7b506f)",
                ],
            }
            }
            transition={{ duration: 5, ease: "easeInOut", times: [0, 0.2, 0.5, 1], repeat: Infinity, repeatDelay: 1 }}
        >
            {children}
        </motion.div >
    )
}