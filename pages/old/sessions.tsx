import Layout from "../components/layout"
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";

// @ts-ignore
export default function Users({ sesssion, initialAccounts }) {
    const [accounts, setAccounts] = useState(initialAccounts)
    // let { posts } = this.props;
    return (
        <Layout>
            <div className="grid grid-cols-2 gap-2 w-full">
                {/*<ul>*/}
                {accounts.map((account: any) => (
                    // <li>{post.cmd}</li>
                    <div className="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl">
                        <code className="mt-4 text-lg font-medium text-gray-500 break-words">
                            {JSON.stringify(account, null, 2)}
                        </code>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
    // @ts-ignore
    let accounts = await prisma.account.findMany();

    return {
        props: {
            session: await getSession(context),
            initialAccounts: accounts,
        },
    }
}
