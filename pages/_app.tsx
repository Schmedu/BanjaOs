import '../styles/globals.css'
import type { AppProps } from "next/app"
// import { SessionProvider } from "next-auth/react"
// import { Session } from "next-auth";
// import Script from "next/script";


// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function App({ Component, pageProps }: AppProps<{
    // session: Session;
}>) {
    return (
        // <SessionProvider session={pageProps.session} refetchInterval={0}>
        //     <script src="https://unpkg.com/htmx.org@1.8.0"></script>
        <Component {...pageProps} />
        // </SessionProvider>
    )
}