import Layout from "../components/layout"
import Head from 'next/head'
import SideBar from "../components/hamburger-menu";
import Navbar from "../components/Navbar";

// export default function WindyPage() {
//     return (
//         <div className="w-full">
//
//             {/*<nav*/}
//             {/*    className="clear-both relative mb-0 leading-6 border-t-0 border-b-2 border-solid md:rounded-none border-x-0 border-slate-500 bg-neutral-100 text-stone-500 lg:h-56"*/}
//             {/*    style={{*/}
//             {/*        backgroundColor: "rgb(245, 245, 245)",*/}
//             {/*        color: "rgb(108, 103, 100)",*/}
//             {/*        minHeight: 43,*/}
//             {/*        content: '" "',*/}
//             {/*        borderWidth: "0px 0px 3px"*/}
//             {/*    }}*/}
//             {/*>*/}
//             {/*    <div*/}
//             {/*        className="table clear-both px-2 mx-auto text-stone-500"*/}
//             {/*        style={{ content: '" "' }}*/}
//             {/*    >*/}
//             {/*        <div className="table clear-both -mx-3 md:float-left md:mx-0 lg:float-none lg:text-center">*/}
//             {/*            <button*/}
//             {/*                type="button"*/}
//             {/*                className="float-left overflow-visible relative pt-3 pr-2 pb-2 pl-4 m-0 w-16 text-center normal-case bg-transparent bg-none rounded-none border-l-0 border-r border-solid cursor-pointer md:hidden border-y-0 border-zinc-300 focus:bg-zinc-300 hover:bg-zinc-300"*/}
//             {/*                data-toggle="collapse"*/}
//             {/*                data-target="#navbar-collapse-main"*/}
//             {/*                style={{ borderWidth: "0px 1px 0px 0px" }}*/}
//             {/*            >*/}
//             {/*                <span*/}
//             {/*                    className="overflow-hidden absolute p-0 -m-px w-px h-px border-0"*/}
//             {/*                    style={{ clip: "rect(0px, 0px, 0px, 0px)" }}*/}
//             {/*                >*/}
//             {/*                    Toggle navigation*/}
//             {/*                </span>*/}
//             {/*                <span*/}
//             {/*                    className="inline-block not-italic tracking-normal normal-case align-middle"*/}
//             {/*                    style={{*/}
//             {/*                        fontFamily: "icomoon",*/}
//             {/*                        speak: "none",*/}
//             {/*                        fontWeight: "normal",*/}
//             {/*                        fontVariant: "normal",*/}
//             {/*                        lineHeight: "1.2",*/}
//             {/*                        fontFeatureSettings: '"liga"'*/}
//             {/*                    }}*/}
//             {/*                />*/}
//             {/*                <span*/}
//             {/*                    className="inline-block absolute ml-1 not-italic tracking-normal normal-case align-middle"*/}
//             {/*                    style={{*/}
//             {/*                        top: "53%",*/}
//             {/*                        right: 4,*/}
//             {/*                        transform: "translateY(-50%)",*/}
//             {/*                        lineHeight: "1.2",*/}
//             {/*                        fontFeatureSettings: '"liga"',*/}
//             {/*                        fontSize: 8,*/}
//             {/*                        fontFamily: "icomoon",*/}
//             {/*                        speak: "none",*/}
//             {/*                        fontWeight: "normal",*/}
//             {/*                        fontVariant: "normal"*/}
//             {/*                    }}*/}
//             {/*                />*/}
//             {/*            </button>*/}
//             {/*            <div className="w-4/5 text-center">*/}
//             {/*                <div className="float-left w-full lg:float-none">*/}
//             {/*                    <div className="">*/}
//             {/*                        <a*/}
//             {/*                            href="https://www.hyatt.com/de-DE/spas/Arany-Spa/home"*/}
//             {/*                            className="inline-block ml-5 font-serif text-lg leading-7 uppercase bg-transparent cursor-pointer text-slate-500 hover:text-stone-600 focus:text-stone-600 lg:ml-0 lg:h-40 lg:px-0 lg:pt-16 lg:pb-12 lg:font-serif lg:text-3xl lg:leading-7 lg:text-transparent"*/}
//             {/*                            style={{ letterSpacing: 2, textDecoration: "none" }}*/}
//             {/*                        >*/}
//             {/*                            arany spa*/}
//             {/*                            <img*/}
//             {/*                                width="px"*/}
//             {/*                                height="px"*/}
//             {/*                                title="arany spa"*/}
//             {/*                                className="hidden align-middle border-0"*/}
//             {/*                                src="/content/dam/hyatt-spas/images/spa_logo_VIEPH.png.png"*/}
//             {/*                                style={{ fontSize: 0 }}*/}
//             {/*                            />*/}
//             {/*                        </a>*/}
//             {/*                    </div>*/}
//             {/*                </div>*/}
//             {/*            </div>*/}
//             {/*            <button*/}
//             {/*                type="button"*/}
//             {/*                className="inline-block float-right overflow-visible relative p-3 m-0 text-sm text-center normal-case align-middle whitespace-nowrap bg-transparent bg-none rounded-none border-solid cursor-pointer select-none md:hidden border-x border-y-0 border-zinc-300 focus:border-zinc-400 focus:bg-zinc-300 focus:text-stone-500 hover:border-zinc-400 hover:bg-zinc-300 hover:text-stone-500"*/}
//             {/*                data-toggle="collapse"*/}
//             {/*                data-target="#navbar-collapse-lang"*/}
//             {/*                style={{*/}
//             {/*                    fontWeight: "normal",*/}
//             {/*                    lineHeight: "1.42857",*/}
//             {/*                    borderWidth: "0px 1px 0px 0px"*/}
//             {/*                }}*/}
//             {/*            >*/}
//             {/*                <span className="leading-5 sr-only">Toggle </span>*/}
//             {/*                <span*/}
//             {/*                    className="inline-block not-italic tracking-normal normal-case align-middle"*/}
//             {/*                    style={{*/}
//             {/*                        fontFamily: "icomoon",*/}
//             {/*                        speak: "none",*/}
//             {/*                        fontWeight: "normal",*/}
//             {/*                        fontVariant: "normal",*/}
//             {/*                        lineHeight: "1.2",*/}
//             {/*                        fontFeatureSettings: '"liga"'*/}
//             {/*                    }}*/}
//             {/*                >*/}
//             {/*                    <span className="leading-4" style={{ fontFamily: "icomoon" }} />*/}
//             {/*                </span>*/}
//             {/*                <span*/}
//             {/*                    className="inline-block ml-1 not-italic tracking-normal normal-case align-middle"*/}
//             {/*                    style={{*/}
//             {/*                        fontFamily: "icomoon",*/}
//             {/*                        speak: "none",*/}
//             {/*                        fontWeight: "normal",*/}
//             {/*                        fontVariant: "normal",*/}
//             {/*                        lineHeight: "1.2",*/}
//             {/*                        fontFeatureSettings: '"liga"',*/}
//             {/*                        fontSize: 8*/}
//             {/*                    }}*/}
//             {/*                />*/}
//             {/*            </button>*/}
//             {/*        </div>*/}
//             {/*        <div className="">*/}
//             {/*            <div className="lg:text-center">*/}
//             {/*                <div*/}
//             {/*                    className="table clear-both overflow-x-visible invisible px-2 border-t border-solid md:visible md:h-auto md:w-auto md:overflow-visible md:border-t-0 md:pb-0 border-neutral-200 lg:relative lg:inline-block lg:w-auto lg:text-center"*/}
//             {/*                    id="navbar-collapse-main"*/}
//             {/*                    style={{*/}
//             {/*                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",*/}
//             {/*                        content: '" "'*/}
//             {/*                    }}*/}
//             {/*                >*/}
//             {/*                    <ul*/}
//             {/*                        className="table float-none clear-both p-0 my-0 -mx-3 list-none uppercase md:float-left md:m-0 lg:float-none lg:inline-block lg:text-center"*/}
//             {/*                        style={{ listStyle: "none", content: '" "' }}*/}
//             {/*                    >*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left bg-neutral-200 lg:float-none lg:inline-block lg:bg-center lg:text-slate-500"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/home"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-center border-t-0 cursor-pointer md:py-4 hover:bg-neutral-200 hover:text-neutral-600 focus:bg-neutral-200 focus:text-neutral-600 lg:border-0 lg:bg-center lg:px-4 lg:py-2 lg:text-slate-500 hover,lg:bg-center hover,lg:text-slate-500 focus,lg:bg-center focus,lg:text-slate-500 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Startseite*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle text-slate-500 lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left lg:float-none lg:inline-block"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/about"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-transparent border-t border-solid cursor-pointer md:py-4 border-zinc-300 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0 lg:px-4 lg:py-2 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Über das spa*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left lg:float-none lg:inline-block"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/fitness"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-transparent border-t border-solid cursor-pointer md:py-4 border-zinc-300 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0 lg:px-4 lg:py-2 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Fitness*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left lg:float-none lg:inline-block"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/gallery"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-transparent border-t border-solid cursor-pointer md:py-4 border-zinc-300 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0 lg:px-4 lg:py-2 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Fotogalerie*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left lg:float-none lg:inline-block"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/contact"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-transparent border-t border-solid cursor-pointer md:py-4 border-zinc-300 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0 lg:px-4 lg:py-2 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Kontakt*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                        <li*/}
//             {/*                            className="block float-none relative text-center uppercase md:float-left lg:float-none lg:inline-block"*/}
//             {/*                            style={{ listStyle: "outside none none" }}*/}
//             {/*                        >*/}
//             {/*                            <a*/}
//             {/*                                href="https://www.hyatt.com/de-DE/spas/Arany-Spa/booking"*/}
//             {/*                                style={{*/}
//             {/*                                    color: "rgb(108, 103, 100)",*/}
//             {/*                                    textDecoration: "none",*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                                className="block relative py-2 px-4 text-base leading-5 uppercase whitespace-normal bg-transparent border-t border-solid cursor-pointer md:py-4 border-zinc-300 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0 lg:px-4 lg:py-2 xl:px-5 xl:py-2"*/}
//             {/*                            >*/}
//             {/*                                Jetzt buchen*/}
//             {/*                                <span*/}
//             {/*                                    className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                    style={{*/}
//             {/*                                        fontFamily: "icomoon",*/}
//             {/*                                        speak: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        fontVariant: "normal",*/}
//             {/*                                        lineHeight: "1.2",*/}
//             {/*                                        fontFeatureSettings: '"liga"',*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                />*/}
//             {/*                            </a>*/}
//             {/*                        </li>*/}
//             {/*                    </ul>*/}
//             {/*                </div>*/}
//             {/*            </div>*/}
//             {/*        </div>*/}
//             {/*        <div className="">*/}
//             {/*            <div*/}
//             {/*                className="table clear-both overflow-x-visible invisible px-2 border-t border-solid md:visible md:h-auto md:w-auto md:overflow-visible md:border-t-0 md:pb-0 border-neutral-200 lg:relative lg:float-right lg:-mb-7 lg:inline-block"*/}
//             {/*                id="navbar-collapse-lang"*/}
//             {/*                style={{*/}
//             {/*                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",*/}
//             {/*                    content: '" "'*/}
//             {/*                }}*/}
//             {/*            >*/}
//             {/*                <ul*/}
//             {/*                    className="table float-none clear-both pl-0 my-0 -mx-3 list-none uppercase md:float-right md:my-0 md:-mr-3 md:ml-0 lg:float-none lg:inline-block lg:text-center"*/}
//             {/*                    style={{ listStyle: "none", content: '" "' }}*/}
//             {/*                >*/}
//             {/*                    <li*/}
//             {/*                        className="block float-none relative text-center uppercase md:float-left"*/}
//             {/*                        style={{ listStyle: "outside none none" }}*/}
//             {/*                    >*/}
//             {/*                        <a*/}
//             {/*                            href="#"*/}
//             {/*                            className="block relative py-2 px-4 m-0 text-base leading-5 uppercase whitespace-normal bg-transparent border-t-0 cursor-pointer md:hidden md:py-4 hover:bg-transparent hover:text-zinc-800 focus:bg-transparent focus:text-zinc-800 lg:border-0"*/}
//             {/*                            data-toggle="dropdown"*/}
//             {/*                            role="button"*/}
//             {/*                            aria-expanded="false"*/}
//             {/*                            style={{*/}
//             {/*                                color: "rgb(108, 103, 100)",*/}
//             {/*                                top: 20,*/}
//             {/*                                right: 15,*/}
//             {/*                                textDecoration: "none",*/}
//             {/*                                listStyle: "outside none none"*/}
//             {/*                            }}*/}
//             {/*                        >*/}
//             {/*                            <span*/}
//             {/*                                className="inline-block not-italic tracking-normal normal-case align-middle"*/}
//             {/*                                style={{*/}
//             {/*                                    fontFamily: "icomoon",*/}
//             {/*                                    speak: "none",*/}
//             {/*                                    fontWeight: "normal",*/}
//             {/*                                    fontVariant: "normal",*/}
//             {/*                                    lineHeight: "1.2",*/}
//             {/*                                    fontFeatureSettings: '"liga"',*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                            />*/}
//             {/*                            <span*/}
//             {/*                                className="inline-block ml-1 not-italic tracking-normal normal-case align-middle"*/}
//             {/*                                style={{*/}
//             {/*                                    fontFamily: "icomoon",*/}
//             {/*                                    speak: "none",*/}
//             {/*                                    fontWeight: "normal",*/}
//             {/*                                    fontVariant: "normal",*/}
//             {/*                                    lineHeight: "1.2",*/}
//             {/*                                    fontFeatureSettings: '"liga"',*/}
//             {/*                                    fontSize: 8,*/}
//             {/*                                    listStyle: "outside none none"*/}
//             {/*                                }}*/}
//             {/*                            />*/}
//             {/*                        </a>*/}
//             {/*                        <ul*/}
//             {/*                            className="block float-none static p-0 m-0 w-auto text-sm leading-5 text-left uppercase bg-clip-padding bg-white rounded-none rounded-t-none border border-solid md:right-0 border-zinc-300 lg:min-w-full"*/}
//             {/*                            role="menu"*/}
//             {/*                            style={{*/}
//             {/*                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",*/}
//             {/*                                minWidth: 160,*/}
//             {/*                                listStyle: "none"*/}
//             {/*                            }}*/}
//             {/*                        >*/}
//             {/*                            <li*/}
//             {/*                                className="uppercase hover:bg-neutral-200"*/}
//             {/*                                style={{ listStyle: "outside none none" }}*/}
//             {/*                            >*/}
//             {/*                                <a*/}
//             {/*                                    href="https://www.hyatt.com/en-US/spas/Arany-Spa/home"*/}
//             {/*                                    className="block clear-both p-2 text-base uppercase whitespace-normal bg-transparent border-t-0 cursor-pointer hover:bg-center hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 lg:border-0"*/}
//             {/*                                    style={{*/}
//             {/*                                        textDecoration: "none",*/}
//             {/*                                        fontWeight: "normal",*/}
//             {/*                                        listStyle: "outside none none"*/}
//             {/*                                    }}*/}
//             {/*                                >*/}
//             {/*                                    English*/}
//             {/*                                    <span*/}
//             {/*                                        className="float-right mt-px not-italic tracking-normal normal-case align-middle lg:hidden"*/}
//             {/*                                        style={{*/}
//             {/*                                            fontFamily: "icomoon",*/}
//             {/*                                            speak: "none",*/}
//             {/*                                            fontWeight: "normal",*/}
//             {/*                                            fontVariant: "normal",*/}
//             {/*                                            lineHeight: "1.2",*/}
//             {/*                                            fontFeatureSettings: '"liga"',*/}
//             {/*                                            listStyle: "outside none none"*/}
//             {/*                                        }}*/}
//             {/*                                    />*/}
//             {/*                                </a>*/}
//             {/*                            </li>*/}
//             {/*                        </ul>*/}
//             {/*                    </li>*/}
//             {/*                </ul>*/}
//             {/*            </div>*/}
//             {/*        </div>*/}
//             {/*        <div className="" />*/}
//             {/*    </div>*/}
//             {/*</nav>*/}
//
//         </div>
//
//     )
// }

export default function bla() {
    // return (
    //     <div id="App">
    //         <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    //
    //         <div id="page-wrap">
    //             <h1>Cool Restaurant 🍔🍕</h1>
    //             <h2>Check out our offerings in the sidebar!</h2>
    //         </div>
    //     </div>
    // )
    return (
        <></>
    )
}
