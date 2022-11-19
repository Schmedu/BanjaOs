import Header from "./header"
import PreviousFooter from "./previous-footer"
import type { ReactChildren } from "react"
import Header2 from "./header2";
import Footer from "./footer";
import Header3 from "./header3";
import footer2 from "./footer2";

interface Props {
    maxWidth?: boolean,
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="m-0 p-0 flex flex-col min-h-screen">
            {/*<Header />*/}
            <Header3 />
            <main className="grow">{children}</main>
            {/*<main className="grow max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:pt-24">{children}</main>*/}
            {/*<Footer />*/}
            {footer2()}
        </div>
    )
}
