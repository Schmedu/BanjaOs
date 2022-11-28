import Link from "next/link"
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import GradientButton from "./gradientButton";
import ResponsiveImage from "./responsiveImage";

const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Preise', href: '/#preise' },
    { name: 'Über uns', href: '/ueber-uns' },
    // { name: 'Gallerie', href: '/gallerie' },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Protected', href: '/protected' },
    // { name: 'API', href: '/api-example' },
    // { name: 'Admin', href: '/admin' },
    // { name: 'Me', href: '/me' },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    // const { data: session, status } = useSession()
    // const loading = status === "loading"

    useEffect(() => {
        console.log(`.${router.asPath}`)
        const activeNavigation = Array.from(document.getElementsByClassName(`${router.asPath.replace("/", "slash")}`));
        activeNavigation.map(x => x.classList.add("text-br-orange"));
    }, [])

    let linkClasses = "block relative py-2 px-4  uppercase bg-transparent cursor-pointer lg:px-2 hover:text-br-orange hover:scale-110 hover:duration-300 transition ease-out"

    return (
        <header className="shadow-sm">
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            {/*Actual Content*/}
            <div className="max-w-screen-xl p-4 xl:p-0 mx-auto">
                <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex-1">
                        {/*<span className="w-20 h-10 bg-gray-200 rounded-lg"></span>*/}
                        <span className="h-auto flex items-center">
                            {/*<img src="Logo.jpg" alt="logo" className="w-10 h-10" />*/}
                            <ResponsiveImage src="banja-os-icon.png" alt="Banja OS Logo" className="w-32 align-middle hidden md:block" />
                            {/*<img src="banja-os-logo-cropped.png" alt="logo" className=" align-middle" />*/}
                            <p className={"text-4xl whitespace-nowrap"} style={{ fontFamily: "MrDeHaviland" }}>Banja Os</p>
                        </span>
                    </div>

                    <nav className="hidden space-x-8 text-sm font-medium md:flex">
                        {/*<a className="text-gray-500" href="">About</a>*/}
                        {/*<a className="text-gray-500" href="">Blog</a>*/}
                        {/*<a className="text-gray-500" href="">Projects</a>*/}
                        {/*<a className="text-gray-500" href="">Contact</a>*/}
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <a
                                    // key={item.name}
                                    // href={item.href}
                                    className={
                                        `${linkClasses} ${item.href.replace("/", "slash")}`
                                    }
                                // aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    {/*/!*{% if user.is_authenticated %}*!/*/}
                    {/*{session?.user && (*/}
                    {/*    <>*/}
                    {/*        <div className="items-center justify-end flex-1 space-x-4 sm:flex">*/}
                    {/*            /!*{#                    <a#}*!/*/}
                    {/*            /!*{#                            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"#}*!/*/}
                    {/*            /!*{#                            href="{% url 'account' %}"  # ???#}*!/*/}
                    {/*            /!*{#                    >#}*!/*/}
                    {/*            /!*{#                        Profile#}*!/*/}
                    {/*            /!*{#                    </a>#}*!/*/}

                    {/*            {session.user.image && (*/}
                    {/*                <span*/}
                    {/*                    style={{ backgroundImage: `url('${session.user.image}')` }}*/}
                    {/*                    className={styles.avatar}*/}
                    {/*                />*/}
                    {/*            )}*/}
                    {/*            <a*/}
                    {/*                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"*/}
                    {/*                href={`/api/auth/signout`}*/}
                    {/*                onClick={(e) => {*/}
                    {/*                    e.preventDefault()*/}
                    {/*                    signOut()*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                Log Out*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </>*/}
                    {/*)}*/}
                    {/*/!*{% else %}*!/*/}
                    {/*{!session && (*/}
                    {/*    <>*/}
                    {/*        <div className="items-center justify-end flex-1 space-x-4 sm:flex">*/}
                    {/*            <Link href={`/api/auth/signin`}*/}
                    {/*                onClick={(e) => {*/}
                    {/*                    e.preventDefault()*/}
                    {/*                    signIn()*/}
                    {/*                }}>*/}
                    {/*                <a*/}
                    {/*                    className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg uppercase"*/}
                    {/*                // href={`/api/auth/signin`}*/}
                    {/*                // onClick={(e) => {*/}
                    {/*                //     e.preventDefault()*/}
                    {/*                //     signIn()*/}
                    {/*                // }}*/}
                    {/*                >*/}
                    {/*                    Termin buchen*/}
                    {/*                </a>*/}
                    {/*            </Link>*/}

                    {/*            /!*<a*!/*/}
                    {/*            /!*    className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"*!/*/}
                    {/*            /!*    href="{% url 'account_signup' %}"*!/*/}
                    {/*            /!*>*!/*/}
                    {/*            /!*    Sign up*!/*/}
                    {/*            /!*</a>*!/*/}
                    {/*        </div>*/}
                    {/*        /!*{% endif %}*!/*/}
                    {/*    </>*/}
                    {/*)}*/}
                    <div className="items-center justify-end flex-1 space-x-4 flex">
                        {/*<motion.button*/}
                        {/*    className="px-5 py-2 rounded-lg bg-br-orange text-br-l-blush"*/}
                        {/*    whileHover={{*/}
                        {/*        scale: [1.1, 1.15, 1.1],*/}
                        {/*        // transition: { duration: 0.5 },*/}
                        {/*    }}*/}
                        {/*    transition={{ type: "spring", stiffness: 400, damping: 17, repeat: Infinity, repeatDelay: 1 }}*/}
                        {/*    whileTap={{ scale: 1.0 }}*/}
                        {/*>*/}
                        {/*    <a*/}
                        {/*        href={`#form`}*/}
                        {/*    >*/}
                        {/*        Termin buchen*/}
                        {/*    </a>*/}
                        {/*</motion.button>*/}
                        <GradientButton buttonText={"Termin buchen"} classNames={"text-sm"} delay={1} href={"/#termin"} />
                    </div>
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="hover:bg-br-l-twilight bg-br-l-twilight dark:bg-br-black-400 rounded-lg inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/*<div className="lg:hidden">*/}
                    {/*    <button className="p-2 bg-gray-100 rounded-lg" type="button" onClick={() => setIsOpen(!isOpen)}>*/}
                    {/*        <span className="sr-only">Open menu</span>*/}
                    {/*        <svg*/}
                    {/*            aria-hidden="true"*/}
                    {/*            className="w-5 h-5"*/}
                    {/*            fill="none"*/}
                    {/*            stroke="currentColor"*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                d="M4 6h16M4 12h16M4 18h16"*/}
                    {/*            // stroke-linecap="round"*/}
                    {/*            // stroke-linejoin="round"*/}
                    {/*            // stroke-width="2"*/}
                    {/*            />*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-500 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-250 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-white dark:bg-br-black-400 dark:text-br-l-blush px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <a
                                        //key={item.name}
                                        // href={item.href}
                                        className={
                                            `${item.href.replace("/", "slash")} block px-3 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-br-black hover:text-br-orange whitespace-nowrap dark:text-br-l-blush`
                                        }
                                    // aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </Transition>
        </header>
    )
}
