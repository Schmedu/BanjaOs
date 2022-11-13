import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"
import { useRouter } from 'next/router'
import SideBar from "../components/hamburger-menu";
import HamburgerMenu2 from "./hamburger-menu2";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";


// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Blog', href: '/blog' },
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

export default function Header3() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <header className="shadow-sm">
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            {/*Actual Content*/}
            <div className="max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        {/*<span className="w-20 h-10 bg-gray-200 rounded-lg"></span>*/}
                        <span className="w-1/2 h-auto">
                            {/*<img src="Logo.jpg" alt="logo" className="w-10 h-10" />*/}
                            <img src="banja-os-logo-cropped.png" alt="logo" className="w-full1 align-middle" />
                        </span>
                    </div>

                    <nav className="hidden space-x-8 text-sm font-medium md:flex">
                        {/*<a className="text-gray-500" href="">About</a>*/}
                        {/*<a className="text-gray-500" href="">Blog</a>*/}
                        {/*<a className="text-gray-500" href="">Projects</a>*/}
                        {/*<a className="text-gray-500" href="">Contact</a>*/}
                        {navigation.map((item) => (
                            <Link href={item.href}>
                                <a
                                    key={item.name}
                                    // href={item.href}
                                    className={classNames(
                                        router.asPath === item.href
                                            // ? 'text-gray-500 underline whitespace-nowrap'
                                            // : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 whitespace-nowrap',
                                            ? 'block relative py-2 px-4 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 lg:px-2 hover:text-sky-700'
                                            : 'block relative py-2 px-4 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 lg:px-2 hover:text-sky-700',
                                    )}
                                // aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    {/*{% if user.is_authenticated %}*/}
                    {session?.user && (
                        <>
                            <div className="items-center justify-end flex-1 space-x-4 sm:flex">
                                {/*{#                    <a#}*/}
                                {/*{#                            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"#}*/}
                                {/*{#                            href="{% url 'account' %}"  # ???#}*/}
                                {/*{#                    >#}*/}
                                {/*{#                        Profile#}*/}
                                {/*{#                    </a>#}*/}

                                {session.user.image && (
                                    <span
                                        style={{ backgroundImage: `url('${session.user.image}')` }}
                                        className={styles.avatar}
                                    />
                                )}
                                <a
                                    className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                                    href={`/api/auth/signout`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signOut()
                                    }}
                                >
                                    Log Out
                                </a>
                            </div>
                        </>
                    )}
                    {/*{% else %}*/}
                    {!session && (
                        <>
                            <div className="items-center justify-end flex-1 space-x-4 sm:flex">
                                <a
                                    className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                                    href={`/api/auth/signin`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signIn()
                                    }}
                                >
                                    Login
                                </a>

                                {/*<a*/}
                                {/*    className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"*/}
                                {/*    href="{% url 'account_signup' %}"*/}
                                {/*>*/}
                                {/*    Sign up*/}
                                {/*</a>*/}
                            </div>
                            {/*{% endif %}*/}
                        </>
                    )}
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-600 bg-gray-100 rounded-lg inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    {/*    <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button" onClick={() => setIsOpen(!isOpen)}>*/}
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
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            {navigation.map((item) => (
                                <Link href={item.href}>
                                    <a
                                        key={item.name}
                                        // href={item.href}
                                        className={classNames(
                                            router.asPath === item.href
                                                ? 'block px-3 py-2 text-gray-500 underline whitespace-nowrap'
                                                : 'block px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 whitespace-nowrap',
                                        )}
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
