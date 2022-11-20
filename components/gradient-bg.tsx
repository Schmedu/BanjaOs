import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode
    classNames?: string
}

export default function GradientBg({ children, classNames }: Props) {
    return (
        <motion.div
            className={classNames ? `bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight ${classNames}` : "bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush"}
            animate={{
                background: [
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #657153)",
                    "linear-gradient(to right bottom, #657153, #735F3D, #EA9937)",
                    "linear-gradient(to right bottom, #EA9937, #657153, #735F3D)",
                    "linear-gradient(to right bottom, #735F3D, #EA9937, #657153)",
                ],
            }
            }
            transition={{ duration: 5, ease: "easeInOut", times: [0, 0.2, 0.5, 1], repeat: Infinity, repeatDelay: 1 }}
        >
            {children}
        </motion.div >
    )
}