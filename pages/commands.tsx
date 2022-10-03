import {PrismaClient} from '@prisma/client'
import {Component, useState} from "react";
import {any} from "prop-types";
import Layout from "../components/layout";

const prisma = new PrismaClient()

// @ts-ignore
export default function CommandsPage({initialPosts}) {
    const [posts, setPosts] = useState(initialPosts)
    // let { posts } = this.props;
    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4 w-full">
                {/*<ul>*/}
                {posts.map((post: any) => (
                    // <li>{post.cmd}</li>
                    <a
                        href=""
                        className="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl"
                    >
                        <h5 className="text-4xl font-bold break-words">{post.search}</h5>
                        <code className="mt-4 text-lg font-medium text-gray-500 break-words">
                            {post.cmd}
                        </code>

                        {/*                  <span className="absolute bottom-8 right-8">*/}
                        {/*  <svg*/}
                        {/*      xmlns="http://www.w3.org/2000/svg"*/}
                        {/*      className="w-10 h-10 text-pink-600"*/}
                        {/*      fill="none"*/}
                        {/*      viewBox="0 0 24 24"*/}
                        {/*      stroke="currentColor"*/}
                        {/*  >*/}
                        {/*    <path*/}
                        {/*        stroke-linecap="round"*/}
                        {/*        stroke-linejoin="round"*/}
                        {/*        stroke-width="2"*/}
                        {/*        d="M13 10V3L4 14h7v7l9-11h-7z"*/}
                        {/*    />*/}
                        {/*  </svg>*/}
                        {/*</span>*/}
                    </a>

                    // <div className="">
                    // <h1 className="">{post.search}</h1>
                    // <code className="">{post.cmd}</code>
                    //
                    // </div>
                ))}
                {/*</ul>*/}
            </div>
        </Layout>

    )
}

// This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    let posts = await prisma.dev2Do_command.findMany()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            initialPosts: posts,
        },
    }
}

// export default Blog
//