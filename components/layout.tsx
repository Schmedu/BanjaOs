import Header from "./header";
import footer from "./footer";
import Head from "next/head";

interface Props {
    title?: string
    children: React.ReactNode
}

export default function Layout({ children, title }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Banja Os - Osnabrücks Sauna im Stillen"
                />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
            </Head>
            <div className="m-0 p-0 flex flex-col min-h-screen">
                {/*<Header />*/}
                <Header />
                <main className="grow">{children}</main>
                {/*<main className="grow max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:pt-24">{children}</main>*/}
                {/*<Footer />*/}
                {footer()}
            </div>
        </>
    )
}
