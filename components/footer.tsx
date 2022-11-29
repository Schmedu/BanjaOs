import { motion } from 'framer-motion';
import GradientBg from "./gradientBg";
import ResponsiveImage from "./responsiveImage";

export default function footer() {
    return (
        // <footer aria-label="Site Footer" className=" bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush">
        <div className={"dark:bg-br-black-300 bg-br-l-blush"}>
            <div className="max-w-screen-xl md:grid md:grid-cols-3 lg:grid-cols-6 mx-auto lg:items-center">
                <div className="md:col-span-1 lg:relative lg:col-span-2 lg:block h-full flex items-center justify-center">
                    <div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 17, duration: 0.6, delay: 0.8 } }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: -100 }}
                        >
                            <ResponsiveImage alt="Banja Os Logo Art - Saunaeimer mit Kelch" src="Banja-Os.png" className="md:w-full mx-auto" isStatic={true} />
                        </motion.div>
                    </div>
                </div>
                <div className="text-center sm:text-left px-4 py-8 sm:px-6 md:col-span-2 lg:col-span-4">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div>
                            <div>
                                <p className="footer-heading">Öffnungszeiten</p>
                                <ul className="space-y text-sm">
                                    <li><span className={"whitespace-nowrap"}>Montag - Mittwoch:</span> <span className={"whitespace-nowrap"}>12:00 - 22:00</span></li>
                                    <li><span className={"whitespace-nowrap"}>Donerstag:</span> <span className={"whitespace-nowrap"}>12:00 - 23:00</span></li>
                                    <li><span className={"whitespace-nowrap"}>Freitag - Sonntag:</span> <span className={"whitespace-nowrap"}>10:00 - 23:00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="footer-heading">Anfahrt</p>
                                <a className={"hover:opacity-75"} href={"https://www.google.com/maps/dir//Banja+OS,+Kleine+Schulstra%C3%9Fe+24a,+49078+Osnabr%C3%BCck/@52.2583381,7.988857,17z/data=!4m16!1m6!3m5!1s0x47b9e94b802c3863:0xe8b1d692e333080e!2sBanja+OS!8m2!3d52.2583381!4d7.9910457!4m8!1m0!1m5!1m1!1s0x47b9e94b802c3863:0xe8b1d692e333080e!2m2!1d7.9910457!2d52.2583381!3e3"}>
                                    <ul className="space-y text-sm">
                                        <li><span className={"whitespace-nowrap"}>Kleine Schulstraße 24a,</span></li>
                                        <li><span className={"whitespace-nowrap"}>49078 Osnabrück</span></li>
                                    </ul>
                                </a>

                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="footer-heading">Kontakt</p>
                                <ul className="space-y text-sm">
                                    <li><a
                                        href="tel:0541441806"
                                        className={"hover:opacity-75"}
                                    >
                                        0541 441806
                                    </a>
                                    </li>
                                    <li><a href={`mailto:info@banja-os.de`} className="block hover:opacity-75">
                                        info@banja-os.de
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-br-l-twilight dark:border-br-l-blush pt-12">
                        <div className="text-sm  sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:gap-3">
                                <a className="hover:opacity-75" href={"impressum"}> Impressum </a>
                                <a className="hover:opacity-75" href={"datenschutz"}> Datenschutz </a>
                            </div>
                            <p className="mt-4 sm:mt-0">©2002-{new Date().getFullYear()} Banja Os</p>
                        </div>
                        <p className="mt-8 text-xs text-gray-500">
                            Banja Os gibt es schon seit über 20 Jahren. Wir sind eine kleine, familiengeführte Sauna aus Osnabrück. Bei uns kannst du die Erfahrung einer privaten Holzofen Sauna machen, da unsere Sauna nicht öffentlich zugänglich ist. Jeder unserer Kunden mietet die Sauna für sich alleine - perfekt für eine entspannte Runde mit deinen Liebsten.

                            Wir haben kürzlich den Sprung ins Internet gewagt. Dies ist unsere kleine Webpräsenz. Wir hoffen es gefällt dir. Hinterlass' uns gerne eine Rückmeldung per Email, wenn du magst!
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}