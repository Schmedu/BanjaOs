import Link from "next/link"
import {signIn, signOut, useSession} from "next-auth/react"
import styles from "./header.module.css"
import {useRouter} from 'next/router'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {name: 'Home', href: '#'},
    {name: 'Client', href: '/client'},
    {name: 'Server', href: '/server'},
    {name: 'Protected', href: '/protected'},
    {name: 'API', href: '/api-example'},
    {name: 'Admin', href: '/admin'},
    {name: 'Me', href: '/me'},
]
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

export default function Header2() {
    const router = useRouter()
    const {data: session, status} = useSession()
    const loading = status === "loading"

    return (
        <header className="shadow-sm">
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>
            <div className={styles.signedInStatus}>
                <p
                    className={`nojs-show ${
                        !session && loading ? styles.loading : styles.loaded
                    }`}
                >
                    {!session && (
                        <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
                            <a
                                href={`/api/auth/signin`}
                                className={styles.buttonPrimary}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }}
                            >
                                Sign in
                            </a>
                        </>

                    )}
                    {session?.user && (
                        <>
                            {session.user.image && (
                                <span
                                    style={{backgroundImage: `url('${session.user.image}')`}}
                                    className={styles.avatar}
                                />
                            )}
                            <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br/>
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
                            <a
                                href={`/api/auth/signout`}
                                className={styles.button}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }}
                            >
                                Sign out
                            </a>
                        </>
                    )}
                </p>
            </div>
            {/*Actual Content*/}
            <div className="max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
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
                                            ? 'text-gray-500 underline'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
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
                            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                                {/*{#                    <a#}*/}
                                {/*{#                            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"#}*/}
                                {/*{#                            href="{% url 'account' %}"  # ???#}*/}
                                {/*{#                    >#}*/}
                                {/*{#                        Profile#}*/}
                                {/*{#                    </a>#}*/}

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
                            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                                <a
                                    className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                                    href={`/api/auth/signin`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signIn()
                                    }}
                                >
                                    Log in
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
                    <div className="lg:hidden">
                        <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                    // stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
