import '../styles/globals.css'
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import {Session} from "next-auth";


// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function App({ Component, pageProps }: AppProps<{
  session: Session;
}>) {
return (
  <SessionProvider session={pageProps.session} refetchInterval={0}>
    <Component {...pageProps} />
  </SessionProvider>
)
}