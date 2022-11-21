import { motion } from 'framer-motion';
import GradientBg from "./gradientBg";
import ResponsiveImage from "./responsiveImage";

export default function footer() {
    return (
        // <footer aria-label="Site Footer" className=" bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush">
        <GradientBg>
            <div className="max-w-screen-xl md:grid md:grid-cols-3 lg:grid-cols-5 mx-auto lg:items-center">
                <div className="md:col-span-1 lg:relative lg:col-span-2 lg:block">
                    {/*<img alt="Art" src="Banja-os.avif" className="md:w-full mx-auto" loading={"lazy"} />*/}
                    <ResponsiveImage alt="Art" src="Banja-Os.png" className="md:w-full mx-auto" />
                </div>
                <div className="text-center sm:text-left px-4 py-8 sm:px-6 md:col-span-2 lg:col-span-3">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {/*<div>*/}
                        {/*    <p className="font-medium">*/}
                        {/*        <span className="footer-heading">Kontakt</span>*/}
                        {/*        <a*/}
                        {/*            href="tel:0541441806"*/}
                        {/*            className="block hover:opacity-75"*/}
                        {/*        >*/}
                        {/*            0541 441806*/}
                        {/*        </a>*/}
                        {/*        <a href={`mailto:info@banja-os.de`} className="block hover:opacity-75">*/}
                        {/*            info@banja-os.de*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    /!*<ul className="space-y-2 text-sm">*!/*/}
                        {/*    /!*    <li>Montag - Donnerstag: 12:00 - 10:00</li>*!/*/}
                        {/*    /!*    <li>Freitag - Sonntag: 10:00 - 23:00</li>*!/*/}
                        {/*    /!*</ul>*!/*/}
                        {/*</div>*/}
                        <div>
                            <div>
                                <p className="footer-heading">Öffnungszeiten</p>
                                <ul className="space-y-2 text-sm">
                                    <li><span className={"whitespace-nowrap"}>Montag - Donnerstag:</span> <span className={"whitespace-nowrap"}>12:00 - 10:00</span></li>
                                    <li><span className={"whitespace-nowrap"}>Freitag - Sonntag:</span> <span className={"whitespace-nowrap"}>10:00 - 23:00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="footer-heading">Anfahrt</p>
                                <ul className="space-y-2 text-sm">
                                    <li><span className={"whitespace-nowrap"}>Kleine Schulstraße 24a,</span></li>
                                    <li><span className={"whitespace-nowrap"}>49078 Osnabrück</span></li>
                                    <li><a href={"https://www.google.com/maps/dir//Banja+OS,+Kleine+Schulstra%C3%9Fe+24a,+49078+Osnabr%C3%BCck/@52.2583381,7.988857,17z/data=!4m16!1m6!3m5!1s0x47b9e94b802c3863:0xe8b1d692e333080e!2sBanja+OS!8m2!3d52.2583381!4d7.9910457!4m8!1m0!1m5!1m1!1s0x47b9e94b802c3863:0xe8b1d692e333080e!2m2!1d7.9910457!2d52.2583381!3e3"}>Routenbeschreibung</a></li>
                                </ul>

                                {/*<nav*/}
                                {/*    aria-label="Footer Nav"*/}
                                {/*    className="mt-4 flex flex-col space-y-2 text-sm "*/}
                                {/*>*/}
                                {/*    <a className="hover:opacity-75">*/}
                                {/*        Kleine Schulstraße 24a, 49078 Osnabrück*/}
                                {/*    </a>*/}
                                {/*    <a className="hover:opacity-75">(Routenbeschreibung)</a>*/}
                                {/*</nav>*/}
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="footer-heading">Kontakt</p>
                                <ul className="space-y-2 text-sm">
                                    <li><a
                                        href="tel:0541441806"
                                        className=""
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
                    <div className="mt-12 border-t border-br-l-blush pt-12">
                        <div className="text-sm  sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:gap-3">
                                <a className="hover:opacity-75" href={"impressum"}> Impressum </a>
                                <a className="hover:opacity-75" href={"datenschutz"}> Datenschutz </a>
                            </div>
                            <p className="mt-4 sm:mt-0">©2002-{new Date().getFullYear()} Banja Os</p>
                        </div>
                    </div>
                </div>
            </div>
        </GradientBg>


    )
}