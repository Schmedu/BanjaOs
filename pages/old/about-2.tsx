import { useSession, getSession } from "next-auth/react"
import Layout from "../components/layout"
import type { NextPageContext } from "next"

export default function IndexPage() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    if (!session) {
        return (
            <Layout>
                <h1>No access</h1>
            </Layout>
        )
    }
    return (
        <Layout>
            {}
            <h1>About 2</h1>
            <p>
                Hey there this is a default page.
            </p>
        </Layout>
    )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
    return {
        props: {
            session: await getSession(context),
        },
    }
}
