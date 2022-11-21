import Layout from "../../components/layout";
import { HeroHeaderText } from "../../components/heroHeaderText";

export function getArticles() {
    return <section className="block px-0 pt-16 pb-24 leading-5 text-left text-zinc-500">
        <div className="px-4 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0"
                    style={{ minHeight: '1px' }}>
                    <div className="mb-12">
                        <h2 className="mt-0 mb-2 text-4xl font-bold tracking-wide capitalize "
                            style={{ lineHeight: '55px' }}>
                            Articles
                        </h2>
                        <p className="mt-0 mb-4 text-base leading-6">
                            View the latest news on Blogger
                        </p>
                    </div>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-1.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/travel"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    travel
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/my-personal-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Personal post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 10 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/my-personal-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-6.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/office"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    office
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Officel first post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 3 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-7.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/travel"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    travel
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/new-blog-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    New blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 5 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/new-blog-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-2.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/news"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Breaking news post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 10 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-3.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/news"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    My blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 1 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <article className="flex items-center mb-8">
                        <div className="overflow-hidden w-2/5 rounded">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/blog-thum-2.png"
                                alt="blog-thum" className="w-full align-middle border-none"
                                style={{ transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }} />
                        </div>
                        <div className="ml-auto w-7/12">
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/tags/news"
                                    className="inline-block py-1 px-5 mb-5 text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/2nd-blog-post/"
                                    className="block mb-2 text-2xl font-bold leading-10 bg-transparent cursor-pointer  hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    2nd blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="text-black bg-transparent cursor-pointer hover:text-sky-700"
                                            style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Mary
                                            Astor</a>
                                    </li>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                        January 13, 2021 - 4 min read
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-0 mb-4 text-base leading-6">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <a href="https://blogge-hugo.staticmania.com/posts/2nd-blog-post/"
                                className="text-sm font-medium capitalize bg-transparent cursor-pointer  hover:text-black"
                                style={{ textDecoration: 'none' }}>read more
                                <i className="inline-block pl-2 not-italic capitalize" style={{
                                    fontVariant: 'normal',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    fontFamily: 'FontAwesome',
                                    textRendering: 'auto',
                                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                                }} /></a>
                        </div>
                    </article>
                    <div >
                        <nav aria-label="Page navigation example" className="block">
                            <ul className="flex p-0 m-0 rounded" style={{ listStyle: 'none' }}>
                                <li style={{ listStyle: 'outside none none' }}>
                                    <a className="block relative p-0 mr-2 ml-0 w-12 h-12 text-center rounded-l border border-solid cursor-pointer border-neutral-200 hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
                                        href="/" style={{
                                            textDecoration: 'none',
                                            lineHeight: '50px',
                                            borderRadius: '50%',
                                            transition: 'all 0.3s ease-in-out 0s',
                                            backgroundPosition: '0px center',
                                            listStyle: 'outside none none'
                                        }}>1</a>
                                </li>
                                <li style={{ listStyle: 'outside none none' }}>
                                    <a className="block relative p-0 mr-2 -ml-px w-12 h-12 text-center border border-white border-solid cursor-pointer hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
                                        href="/page/2/" style={{
                                            textDecoration: 'none',
                                            lineHeight: '50px',
                                            borderRadius: '50%',
                                            transition: 'all 0.3s ease-in-out 0s',
                                            backgroundPosition: '0px center',
                                            listStyle: 'outside none none'
                                        }}>2</a>
                                </li>
                                <li style={{ listStyle: 'outside none none' }}>
                                    <a className="block relative p-0 mr-2 -ml-px w-12 h-12 text-center rounded-r border border-white border-solid cursor-pointer hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
                                        href="/page/2/" rel="next" style={{
                                            textDecoration: 'none',
                                            lineHeight: '50px',
                                            borderRadius: '50%',
                                            transition: 'all 0.3s ease-in-out 0s',
                                            backgroundPosition: '0px center',
                                            listStyle: 'outside none none'
                                        }}>
                                        <i className="inline-block not-italic leading-none" style={{
                                            fontVariant: 'normal',
                                            fontWeight: 'normal',
                                            fontStretch: 'normal',
                                            fontFamily: 'FontAwesome',
                                            textRendering: 'auto',
                                            listStyle: 'outside none none'
                                        }} />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0"
                    style={{ minHeight: '1px' }}>
                    <div className="relative">
                        <div >
                            <h2 className="mt-0 mb-2 text-3xl font-bold tracking-wide uppercase "
                                style={{ lineHeight: '55px' }}>
                                Trending post
                            </h2>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative" style={{ width: '32%' }}>
                                <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                    className="block overflow-hidden w-full h-20 text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-6.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 text-blue-600 bg-black cursor-pointer hover:text-sky-700"
                                        style={{
                                            textDecoration: 'none',
                                            borderRadius: '50px',
                                            top: '-15px',
                                            left: '-15px'
                                        }}>
                                        <img src="https://blogge-hugo.staticmania.com/images/blog/icon.svg"
                                            alt="icon" className="align-middle border-none" /></a>
                                </div>
                            </div>
                            <div style={{ width: '64%' }}>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                        className="block mb-2 text-base font-bold leading-6 bg-transparent cursor-pointer  hover:text-sky-700"
                                        style={{ textDecoration: 'none' }}>
                                        Officel first post
                                    </a>
                                </div>
                                <div >
                                    <ul className="flex p-0 m-0" style={{ listStyle: 'none' }}>
                                        <li className="text-sm" style={{ listStyle: 'outside none none' }}>
                                            <i className="inline-block not-italic leading-none" style={{
                                                fontVariant: 'normal',
                                                fontWeight: 'normal',
                                                fontStretch: 'normal',
                                                fontFamily: 'FontAwesome',
                                                textRendering: 'auto',
                                                listStyle: 'outside none none'
                                            }} />
                                            January 13, 2021 - 3 min read
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative" style={{ width: '32%' }}>
                                <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                    className="block overflow-hidden w-full h-20 text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-2.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 text-blue-600 bg-black cursor-pointer hover:text-sky-700"
                                        style={{
                                            textDecoration: 'none',
                                            borderRadius: '50px',
                                            top: '-15px',
                                            left: '-15px'
                                        }}>
                                        <img src="https://blogge-hugo.staticmania.com/images/blog/icon.svg"
                                            alt="icon" className="align-middle border-none" /></a>
                                </div>
                            </div>
                            <div style={{ width: '64%' }}>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                        className="block mb-2 text-base font-bold leading-6 bg-transparent cursor-pointer  hover:text-sky-700"
                                        style={{ textDecoration: 'none' }}>
                                        Breaking news post
                                    </a>
                                </div>
                                <div >
                                    <ul className="flex p-0 m-0" style={{ listStyle: 'none' }}>
                                        <li className="text-sm" style={{ listStyle: 'outside none none' }}>
                                            <i className="inline-block not-italic leading-none" style={{
                                                fontVariant: 'normal',
                                                fontWeight: 'normal',
                                                fontStretch: 'normal',
                                                fontFamily: 'FontAwesome',
                                                textRendering: 'auto',
                                                listStyle: 'outside none none'
                                            }} />
                                            January 13, 2021 - 10 min read
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative" style={{ width: '32%' }}>
                                <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                    className="block overflow-hidden w-full h-20 text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-3.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 text-blue-600 bg-black cursor-pointer hover:text-sky-700"
                                        style={{
                                            textDecoration: 'none',
                                            borderRadius: '50px',
                                            top: '-15px',
                                            left: '-15px'
                                        }}>
                                        <img src="https://blogge-hugo.staticmania.com/images/blog/icon.svg"
                                            alt="icon" className="align-middle border-none" /></a>
                                </div>
                            </div>
                            <div style={{ width: '64%' }}>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                        className="block mb-2 text-base font-bold leading-6 bg-transparent cursor-pointer  hover:text-sky-700"
                                        style={{ textDecoration: 'none' }}>
                                        My blog post
                                    </a>
                                </div>
                                <div >
                                    <ul className="flex p-0 m-0" style={{ listStyle: 'none' }}>
                                        <li className="text-sm" style={{ listStyle: 'outside none none' }}>
                                            <i className="inline-block not-italic leading-none" style={{
                                                fontVariant: 'normal',
                                                fontWeight: 'normal',
                                                fontStretch: 'normal',
                                                fontFamily: 'FontAwesome',
                                                textRendering: 'auto',
                                                listStyle: 'outside none none'
                                            }} />
                                            January 13, 2021 - 1 min read
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative" style={{ width: '32%' }}>
                                <a href="https://blogge-hugo.staticmania.com/posts/my-new-post/"
                                    className="block overflow-hidden w-full h-20 text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-4.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-new-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 text-blue-600 bg-black cursor-pointer hover:text-sky-700"
                                        style={{
                                            textDecoration: 'none',
                                            borderRadius: '50px',
                                            top: '-15px',
                                            left: '-15px'
                                        }}>
                                        <img src="https://blogge-hugo.staticmania.com/images/blog/icon.svg"
                                            alt="icon" className="align-middle border-none" /></a>
                                </div>
                            </div>
                            <div style={{ width: '64%' }}>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-new-post/"
                                        className="block mb-2 text-base font-bold leading-6 bg-transparent cursor-pointer  hover:text-sky-700"
                                        style={{ textDecoration: 'none' }}>
                                        My new post
                                    </a>
                                </div>
                                <div >
                                    <ul className="flex p-0 m-0" style={{ listStyle: 'none' }}>
                                        <li className="text-sm" style={{ listStyle: 'outside none none' }}>
                                            <i className="inline-block not-italic leading-none" style={{
                                                fontVariant: 'normal',
                                                fontWeight: 'normal',
                                                fontStretch: 'normal',
                                                fontFamily: 'FontAwesome',
                                                textRendering: 'auto',
                                                listStyle: 'outside none none'
                                            }} />
                                            January 13, 2021 - 10 min read
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default function BlogIndexPage() {
    return (
        <Layout>
            <HeroHeaderText heading={"Blog"} />
            <h1>Zur Zeit noch im Aufbau!</h1>
            {/*{getArticles()}*/}
        </Layout>
    )
}