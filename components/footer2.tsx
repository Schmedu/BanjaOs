
export default function footer2() {
    return (
        <footer aria-label="Site Footer" className=" bg-gradient-to-br from-br-brown via-br-orange to-br-l-twilight text-br-l-blush">
            <div className="max-w-screen-xl md:grid md:grid-cols-3 lg:grid-cols-5 mx-auto lg:flex lg:items-center">
                <div className="md:col-span-1 lg:relative lg:col-span-2 lg:block">
                    <img alt="Art" src="Banja-os.png" className="md:w-full mx-auto" />
                </div>
                <div className="px-4 py-8 sm:px-6 md:col-span-2 lg:col-span-3">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <p className="font-medium">
                                <span className="text-xs uppercase tracking-widest">Kontakt</span>
                                <a
                                    href="tel:0541441806"
                                    className="block hover:opacity-75"
                                >
                                    0541 441806
                                </a>
                            </p>
                            <ul className="mt-8 space-y-2 text-sm">
                                <li>Montag - Donnerstag: 12:00 - 10:00</li>
                                <li>Freitag - Sonntag: 10:00 - 23:00</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <p className="text-xs uppercase tracking-widest">Anfahrt</p>
                                <nav
                                    aria-label="Footer Nav"
                                    className="mt-4 flex flex-col space-y-2 text-sm "
                                >
                                    <a className="hover:opacity-75">
                                        Kleine Schulstraße 24a, 49078 Osnabrück
                                    </a>
                                    <a className="hover:opacity-75">(Routenbeschreibung)</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-br-l-blush pt-12">
                        <div className="text-sm  sm:flex sm:items-center sm:justify-between">
                            <div className="flex gap-3">
                                <a className="hover:opacity-75"> Impressum </a>
                                <a className="hover:opacity-75"> Datenschutz </a>
                            </div>
                            <p className="mt-4 sm:mt-0">© 2022 Banja Os</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}