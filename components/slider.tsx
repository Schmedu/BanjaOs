import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Slider() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div id={'slider'}>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <ul ref={ref}>
                <li><img src="/img/SaunaEingang.jpg" alt="" loading={"lazy"} /></li>
                <li><img src="/img/Holzofen.jpg" alt="" loading={"lazy"} /></li>
                <li><img src="/img/Saunaraum.jpg" alt="" loading={"lazy"} /></li>
                <li><img src="/img/Eingangsbereich.jpg" alt="" loading={"lazy"} /></li>
                <li><img src="/img/Innenbereich.jpg" alt="" loading={"lazy"} /></li>
            </ul>
        </div>
    );

}