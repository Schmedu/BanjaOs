import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import ContactForm from "../components/contact-form";
import ContactForm2 from "../components/contact-form2";

export function getHero() {
    return <section className="block px-0 pt-20 pb-24 leading-5 text-left text-zinc-500">
        <div className="px-4 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative flex-grow-0 flex-shrink-0 px-4 w-full max-w-full basis-full"
                    style={{ minHeight: '1px' }}>
                    <article className="flex items-center">
                        <div className="flex-1 mr-24">
                            {/*<div className="mb-5">*/}
                            {/*    <img src="https://blogge-hugo.staticmania.com/images/author.png" alt="author"*/}
                            {/*        className="mb-2 w-20 h-20 align-middle border-none"*/}
                            {/*        style={{ borderRadius: '50px' }} />*/}
                            {/*    <p className="my-0 font-sans text-2xl font-medium leading-9">*/}
                            {/*        By*/}
                            {/*        <a href="https://blogge-hugo.staticmania.com/about"*/}
                            {/*            className="bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"*/}
                            {/*            style={{ textDecoration: 'none' }}>Mary Astor</a>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            <h1
                                className="block mb-8 font-sans text-5xl font-bold bg-transparent text-neutral-900 hover:text-neutral-900"
                                style={{ textDecoration: 'none', lineHeight: '60px' }}>
                                Osnabrücks stiller Saunagenuss. Ganz für sich allein sein.
                            </h1>
                            <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                                {/*<li className="text-sm leading-6" style={{ listStyle: 'outside none none' }}>*/}
                                {/*    <i className="inline-block not-italic leading-none" style={{*/}
                                {/*        fontVariant: 'normal',*/}
                                {/*        fontWeight: 'normal',*/}
                                {/*        fontStretch: 'normal',*/}
                                {/*        fontFamily: 'FontAwesome',*/}
                                {/*        textRendering: 'auto',*/}
                                {/*        listStyle: 'outside none none'*/}
                                {/*    }} />*/}
                                {/*    January 13, 2021 - 2 min read*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div className="overflow-hidden w-1/2" style={{
                            borderRadius: '10px',
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
                        }}>
                            <img src="sauna-header.jpg"
                                alt="feature-post-thumb" className="w-full align-middle border-none" />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>;
}

export function getArticles() {
    return <section className="block px-0 pt-16 pb-24 leading-5 text-left text-zinc-500">
        <div className="px-4 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0"
                    style={{ minHeight: '1px' }}>
                    <div className="mb-12">
                        <h2 className="mt-0 mb-2 font-sans text-4xl font-bold tracking-wide capitalize text-neutral-900"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    travel
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/my-personal-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Personal post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    office
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Officel first post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    travel
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/new-blog-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    New blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    Breaking news post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    My blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    className="inline-block py-1 px-5 mb-5 font-sans text-xs font-semibold leading-4 text-white bg-black cursor-pointer hover:text-sky-700"
                                    style={{ textDecoration: 'none', borderRadius: '50px' }}>
                                    news
                                </a>
                            </div>
                            <div >
                                <a href="https://blogge-hugo.staticmania.com/posts/2nd-blog-post/"
                                    className="block mb-2 font-sans text-2xl font-bold leading-10 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', transition: 'all 0.3s ease-in-out 0s' }}>
                                    2nd blog post
                                </a>
                            </div>
                            <div >
                                <ul className="flex p-0 mx-0 mt-0 mb-4" style={{ listStyle: 'none' }}>
                                    <li className="text-xs" style={{ listStyle: 'outside none none' }}>
                                        By
                                        <a href="https://blogge-hugo.staticmania.com/about"
                                            className="font-sans text-black bg-transparent cursor-pointer hover:text-sky-700"
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
                                className="font-sans text-sm font-medium capitalize bg-transparent cursor-pointer text-neutral-900 hover:text-black"
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
                                    <a className="block relative p-0 mr-2 ml-0 w-12 h-12 font-sans text-center rounded-l border border-solid cursor-pointer border-neutral-200 hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
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
                                    <a className="block relative p-0 mr-2 -ml-px w-12 h-12 font-sans text-center border border-white border-solid cursor-pointer hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
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
                                    <a className="block relative p-0 mr-2 -ml-px w-12 h-12 font-sans text-center rounded-r border border-white border-solid cursor-pointer hover:border hover:border-solid hover:border-neutral-200 hover:bg-gray-200 hover:text-sky-700"
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
                            <h2 className="mt-0 mb-2 font-sans text-3xl font-bold tracking-wide uppercase text-neutral-900"
                                style={{ lineHeight: '55px' }}>
                                Trending post
                            </h2>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative" style={{ width: '32%' }}>
                                <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                    className="block overflow-hidden w-full h-20 font-sans text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-6.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/officel-first-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 font-sans text-blue-600 bg-black cursor-pointer hover:text-sky-700"
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
                                        className="block mb-2 font-sans text-base font-bold leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
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
                                    className="block overflow-hidden w-full h-20 font-sans text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-2.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/breaking-news-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 font-sans text-blue-600 bg-black cursor-pointer hover:text-sky-700"
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
                                        className="block mb-2 font-sans text-base font-bold leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
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
                                    className="block overflow-hidden w-full h-20 font-sans text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-3.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-blog-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 font-sans text-blue-600 bg-black cursor-pointer hover:text-sky-700"
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
                                        className="block mb-2 font-sans text-base font-bold leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
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
                                    className="block overflow-hidden w-full h-20 font-sans text-blue-600 bg-transparent bg-cover rounded cursor-pointer hover:text-sky-700"
                                    style={{
                                        backgroundImage: 'url("https://blogge-hugo.staticmania.com/images/blog/blog-thum-4.png")',
                                        textDecoration: 'none'
                                    }}>
                                </a>
                                <div >
                                    <a href="https://blogge-hugo.staticmania.com/posts/my-new-post/"
                                        className="flex absolute justify-center items-center w-8 h-8 font-sans text-blue-600 bg-black cursor-pointer hover:text-sky-700"
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
                                        className="block mb-2 font-sans text-base font-bold leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
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

export function ContactMe() {
    return <section className="block py-24 px-0 leading-5 text-left text-zinc-500">
        <div className="px-4 mx-auto w-full text-left">
            {/*<div className="flex flex-wrap -mx-4 text-zinc-500">*/}
            {/*    <div*/}
            {/*        className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"*/}
            {/*        style={{ minHeight: '1px' }}>*/}
            {/*        <div className="">*/}
            {/*            <h2 className="mt-0 mb-5 font-sans text-4xl font-medium tracking-wide text-neutral-900"*/}
            {/*                style={{ lineHeight: '55px' }}>*/}
            {/*                Contact Me*/}
            {/*            </h2>*/}
            {/*            <ul className="p-0 m-0">*/}
            {/*                <li className="flex items-center mb-5" style={{ listStyle: 'none' }}>*/}
            {/*                    <i className="flex justify-center items-center mr-5 w-10 h-10 not-italic leading-none bg-white border border-solid border-neutral-200 text-neutral-900"*/}
            {/*                        aria-hidden="true" style={{*/}
            {/*                            fontVariant: 'normal',*/}
            {/*                            fontWeight: 'normal',*/}
            {/*                            fontStretch: 'normal',*/}
            {/*                            fontFamily: 'FontAwesome',*/}
            {/*                            textRendering: 'auto',*/}
            {/*                            borderRadius: '50px',*/}
            {/*                            listStyle: 'outside none none'*/}
            {/*                        }} />*/}
            {/*                    <p className="my-0 text-base leading-6 text-neutral-900"*/}
            {/*                        style={{ listStyle: 'outside none none' }}>*/}
            {/*                        Address: Lorem 142 Str., 2352, Ipsum, State, USA*/}
            {/*                    </p>*/}
            {/*                </li>*/}
            {/*                <li className="flex items-center mb-5" style={{ listStyle: 'none' }}>*/}
            {/*                    <i className="flex justify-center items-center mr-5 w-10 h-10 not-italic leading-none bg-white border border-solid border-neutral-200 text-neutral-900"*/}
            {/*                        aria-hidden="true" style={{*/}
            {/*                            fontVariant: 'normal',*/}
            {/*                            fontWeight: 'normal',*/}
            {/*                            fontStretch: 'normal',*/}
            {/*                            fontFamily: 'FontAwesome',*/}
            {/*                            textRendering: 'auto',*/}
            {/*                            borderRadius: '50px',*/}
            {/*                            listStyle: 'outside none none'*/}
            {/*                        }} />*/}
            {/*                    <a href="tel:+33-257634 534"*/}
            {/*                        className="font-sans text-base leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"*/}
            {/*                        style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Phone:+33-257634*/}
            {/*                        534</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }}>
                    <div className="pb-12">
                        <h2 className="mt-0 mb-2 font-sans text-3xl font-bold tracking-wide text-neutral-900"
                            style={{ lineHeight: '55px' }}>
                            Contact Form
                        </h2>
                        <form className="flex flex-wrap -mx-4" id="contact-form"
                            action="https://fabform.io/f/9AJk8ro" method="POST">
                            <div
                                className="relative px-4 w-full md:flex-shrink-0 md:flex-grow-0 md:basis-1/2"
                                style={{ minHeight: '1px' }}>
                                <input type="text"
                                    className="block overflow-visible py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="name" name="name" placeholder="Your Name"
                                    style={{ transition: 'none 0s ease 0s' }} />
                            </div>
                            <div
                                className="relative px-4 w-full md:flex-shrink-0 md:flex-grow-0 md:basis-1/2"
                                style={{ minHeight: '1px' }}>
                                <input type="email"
                                    className="block overflow-visible py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="mail" name="email" required placeholder="Your Email"
                                    style={{ transition: 'none 0s ease 0s' }} />
                            </div>
                            <div
                                className="relative px-4 w-full md:max-w-full md:flex-shrink-0 md:flex-grow-0 md:basis-full"
                                style={{ minHeight: '1px' }}>
                                <textarea
                                    className="block overflow-auto py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal whitespace-pre-wrap break-words bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text resize-y text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="message" rows={8} name="message" placeholder="Message here…"
                                    style={{ transition: 'none 0s ease 0s' }} defaultValue={""} />
                            </div>
                            <div
                                className="relative px-4 w-full md:max-w-full md:flex-shrink-0 md:flex-grow-0 md:basis-full"
                                style={{ minHeight: '1px' }}>
                                <div className="block relative pl-5 mb-8">
                                    <input
                                        className="overflow-visible absolute p-0 mt-1 mr-0 mb-0 -ml-5 text-black cursor-default"
                                        type="checkbox" id="agree" name="terms-agree" />
                                    <label className="inline-block mb-0 cursor-default" htmlFor="agree">
                                        I agree that my submitted data is being collected and stored.
                                    </label>
                                </div>
                            </div>
                            <div
                                className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                                style={{ minHeight: '1px' }}>
                                <button type="submit"
                                    className="inline-block overflow-visible py-4 px-8 m-0 font-sans text-sm font-semibold leading-6 text-center text-white capitalize align-middle whitespace-nowrap bg-black rounded border-2 border-solid cursor-pointer select-none border-neutral-900 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white"
                                    id="contact-form-button" formTarget="_blank"
                                    style={{ transition: 'none 0s ease 0s', minWidth: '180px' }}>
                                    Send Message
                                </button>
                                <p id="contact-form-status" className="mt-0 mb-4 text-base leading-6" />
                            </div>
                        </form>
                        <p className="mt-0 mb-4 text-xs leading-6">
                            <strong style={{ fontWeight: 'bolder' }}>** </strong>
                            <a href="https://fabform.io/" target="_blank"
                                className="font-sans bg-transparent cursor-pointer hover:text-sky-700"
                                style={{ textDecoration: 'none' }}>Static website forms</a>
                        </p>
                    </div>
                </div>
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }} />
            </div>
        </div>
    </section>;
}

export function ContactMeNew() {
    return <section className="block py-24 px-0 leading-5 text-left text-zinc-500">
        <div className="px-4 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div
                    className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                    style={{ minHeight: '1px' }}>
                    <div className="">
                        <h2 className="mt-0 mb-5 font-sans text-4xl font-medium tracking-wide text-neutral-900"
                            style={{ lineHeight: '55px' }}>
                            Contact Me
                        </h2>
                        <ul className="p-0 m-0">
                            <li className="flex items-center mb-5" style={{ listStyle: 'none' }}>
                                <i className="flex justify-center items-center mr-5 w-10 h-10 not-italic leading-none bg-white border border-solid border-neutral-200 text-neutral-900"
                                    aria-hidden="true" style={{
                                        fontVariant: 'normal',
                                        fontWeight: 'normal',
                                        fontStretch: 'normal',
                                        fontFamily: 'FontAwesome',
                                        textRendering: 'auto',
                                        borderRadius: '50px',
                                        listStyle: 'outside none none'
                                    }} />
                                <p className="my-0 text-base leading-6 text-neutral-900"
                                    style={{ listStyle: 'outside none none' }}>
                                    Address: Lorem 142 Str., 2352, Ipsum, State, USA
                                </p>
                            </li>
                            <li className="flex items-center mb-5" style={{ listStyle: 'none' }}>
                                <i className="flex justify-center items-center mr-5 w-10 h-10 not-italic leading-none bg-white border border-solid border-neutral-200 text-neutral-900"
                                    aria-hidden="true" style={{
                                        fontVariant: 'normal',
                                        fontWeight: 'normal',
                                        fontStretch: 'normal',
                                        fontFamily: 'FontAwesome',
                                        textRendering: 'auto',
                                        borderRadius: '50px',
                                        listStyle: 'outside none none'
                                    }} />
                                <a href="tel:+33-257634 534"
                                    className="font-sans text-base leading-6 bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Phone:+33-257634
                                    534</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }}>
                    <div className="pb-12">
                        <h2 className="mt-0 mb-2 font-sans text-3xl font-bold tracking-wide text-neutral-900"
                            style={{ lineHeight: '55px' }}>
                            Contact Form
                        </h2>
                        <form className="flex flex-wrap -mx-4" id="contact-form"
                            action="https://fabform.io/f/9AJk8ro" method="POST">
                            <div
                                className="relative px-4 w-full md:flex-shrink-0 md:flex-grow-0 md:basis-1/2"
                                style={{ minHeight: '1px' }}>
                                <input type="text"
                                    className="block overflow-visible py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="name" name="name" placeholder="Your Name"
                                    style={{ transition: 'none 0s ease 0s' }} />
                            </div>
                            <div
                                className="relative px-4 w-full md:flex-shrink-0 md:flex-grow-0 md:basis-1/2"
                                style={{ minHeight: '1px' }}>
                                <input type="email"
                                    className="block overflow-visible py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="mail" name="email" required placeholder="Your Email"
                                    style={{ transition: 'none 0s ease 0s' }} />
                            </div>
                            <div
                                className="relative px-4 w-full md:max-w-full md:flex-shrink-0 md:flex-grow-0 md:basis-full"
                                style={{ minHeight: '1px' }}>
                                <textarea
                                    className="block overflow-auto py-4 px-5 mx-0 mt-0 mb-8 w-full text-base leading-normal whitespace-pre-wrap break-words bg-clip-padding bg-white rounded border border-gray-300 border-solid cursor-text resize-y text-zinc-600 focus:border-black focus:bg-white focus:text-zinc-600"
                                    id="message" rows={8} name="message" placeholder="Message here…"
                                    style={{ transition: 'none 0s ease 0s' }} defaultValue={""} />
                            </div>
                            <div
                                className="relative px-4 w-full md:max-w-full md:flex-shrink-0 md:flex-grow-0 md:basis-full"
                                style={{ minHeight: '1px' }}>
                                <div className="block relative pl-5 mb-8">
                                    <input
                                        className="overflow-visible absolute p-0 mt-1 mr-0 mb-0 -ml-5 text-black cursor-default"
                                        type="checkbox" id="agree" name="terms-agree" />
                                    <label className="inline-block mb-0 cursor-default" htmlFor="agree">
                                        I agree that my submitted data is being collected and stored.
                                    </label>
                                </div>
                            </div>
                            <div
                                className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                                style={{ minHeight: '1px' }}>
                                <button type="submit"
                                    className="inline-block overflow-visible py-4 px-8 m-0 font-sans text-sm font-semibold leading-6 text-center text-white capitalize align-middle whitespace-nowrap bg-black rounded border-2 border-solid cursor-pointer select-none border-neutral-900 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white"
                                    id="contact-form-button" formTarget="_blank"
                                    style={{ transition: 'none 0s ease 0s', minWidth: '180px' }}>
                                    Send Message
                                </button>
                                <p id="contact-form-status" className="mt-0 mb-4 text-base leading-6" />
                            </div>
                        </form>
                        <p className="mt-0 mb-4 text-xs leading-6">
                            <strong style={{ fontWeight: 'bolder' }}>** </strong>
                            <a href="https://fabform.io/" target="_blank"
                                className="font-sans bg-transparent cursor-pointer hover:text-sky-700"
                                style={{ textDecoration: 'none' }}>Static website forms</a>
                        </p>
                    </div>
                </div>
                <div className="relative px-4 w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }} />
            </div>
        </div>
    </section>;
}

export function getNavigation() {
    return <nav
        className="flex relative flex-wrap justify-between items-center px-0 pt-12 pb-5 w-full leading-5 text-zinc-500 lg:justify-start"
        style={{ transition: 'all 0.5s ease-in-out 0s' }}>
        <div
            className="flex flex-wrap justify-between items-center px-4 mx-auto w-full text-left lg:flex-nowrap">
            <a className="inline-block py-1 mr-4 font-sans text-xl text-blue-600 whitespace-nowrap bg-transparent cursor-pointer hover:text-sky-700"
                href="https://blogge-hugo.staticmania.com/" style={{ textDecoration: 'none' }}>
                <img className="w-32 leading-7 align-middle border-none"
                    src="banja-os-logo-cropped.png" alt="logo" />
            </a>
            <button
                className="overflow-visible p-0 m-0 text-xl leading-none text-center text-black normal-case bg-transparent rounded border border-transparent border-solid cursor-pointer lg:hidden"
                type="button" data-toggle="collapse" data-target="#mainNav" style={{ outline: '0px' }}>
                <span className="block w-6 h-px bg-neutral-900" style={{
                    transition: 'all 0.2s ease 0s',
                    transform: 'rotate(0deg)',
                    transformOrigin: '10% 10%'
                }} />
                <span className="block w-6 h-px opacity-100 bg-neutral-900"
                    style={{ transition: 'all 0.2s ease 0s' }} />
                <span className="block w-6 h-px bg-neutral-900" style={{
                    transition: 'all 0.2s ease 0s',
                    transform: 'rotate(0deg)',
                    transformOrigin: '10% 90%'
                }} />
            </button>
            <div className="hidden flex-grow items-center lg:flex lg:basis-auto basis-full" id="mainNav">
                <ul className="flex flex-col pl-0 mt-0 mb-4 ml-auto lg:flex-row"
                    style={{ listStyle: 'none' }}>
                    <li className="text-zinc-500" style={{ listStyle: 'outside none none' }}>
                        <a className="block relative py-2 px-4 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 lg:px-2 hover:text-sky-700"
                            href="https://blogge-hugo.staticmania.com/" style={{
                                textDecoration: 'none',
                                zIndex: 1,
                                transition: 'all 0.5s ease-in-out 0s',
                                listStyle: 'outside none none'
                            }}>Home</a>
                    </li>
                    <li className="text-zinc-500" style={{ listStyle: 'outside none none' }}>
                        <a className="block relative py-2 px-4 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 lg:px-2 hover:text-sky-700"
                            href="https://blogge-hugo.staticmania.com/about" style={{
                                textDecoration: 'none',
                                zIndex: 1,
                                transition: 'all 0.5s ease-in-out 0s',
                                listStyle: 'outside none none'
                            }}>About</a>
                    </li>
                    <li className="text-zinc-500" style={{ listStyle: 'outside none none' }}>
                        <a className="block relative py-2 px-4 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 lg:px-2 hover:text-sky-700"
                            href="https://blogge-hugo.staticmania.com/contact" style={{
                                textDecoration: 'none',
                                zIndex: 1,
                                transition: 'all 0.5s ease-in-out 0s',
                                listStyle: 'outside none none'
                            }}>Contact</a>
                    </li>
                </ul>
                {/*<ul className="py-0 pr-0 pl-16 mt-0 mb-4 text-zinc-500" style={{ listStyle: 'none' }}>*/}
                {/*    <li className="inline-block mr-2" style={{ listStyle: 'outside none none' }}>*/}
                {/*        <a href="https://www.facebook.com/mary_astor"*/}
                {/*            className="flex justify-center items-center w-12 h-12 font-sans text-base leading-6 bg-transparent border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"*/}
                {/*            style={{*/}
                {/*                textDecoration: 'none',*/}
                {/*                borderRadius: '50px',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }}>*/}
                {/*            <i className="inline-block not-italic leading-none" style={{*/}
                {/*                fontVariant: 'normal',*/}
                {/*                fontWeight: 'normal',*/}
                {/*                fontStretch: 'normal',*/}
                {/*                fontFamily: 'FontAwesome',*/}
                {/*                textRendering: 'auto',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }} />*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="inline-block mr-2" style={{ listStyle: 'outside none none' }}>*/}
                {/*        <a href="https://twitter.com/mary_astor"*/}
                {/*            className="flex justify-center items-center w-12 h-12 font-sans text-base leading-6 bg-transparent border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"*/}
                {/*            style={{*/}
                {/*                textDecoration: 'none',*/}
                {/*                borderRadius: '50px',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }}>*/}
                {/*            <i className="inline-block not-italic leading-none" style={{*/}
                {/*                fontVariant: 'normal',*/}
                {/*                fontWeight: 'normal',*/}
                {/*                fontStretch: 'normal',*/}
                {/*                fontFamily: 'FontAwesome',*/}
                {/*                textRendering: 'auto',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }} />*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="inline-block mr-0" style={{ listStyle: 'outside none none' }}>*/}
                {/*        <a href="http://www.instagram.com/mary_astor"*/}
                {/*            className="flex justify-center items-center pr-0 w-12 h-12 font-sans text-base leading-6 bg-transparent border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"*/}
                {/*            style={{*/}
                {/*                textDecoration: 'none',*/}
                {/*                borderRadius: '50px',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }}>*/}
                {/*            <i className="inline-block not-italic leading-none" style={{*/}
                {/*                fontVariant: 'normal',*/}
                {/*                fontWeight: 'normal',*/}
                {/*                fontStretch: 'normal',*/}
                {/*                fontFamily: 'FontAwesome',*/}
                {/*                textRendering: 'auto',*/}
                {/*                listStyle: 'outside none none'*/}
                {/*            }} />*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>
    </nav>;
}

export function getImagesDivider() {
    return <section className="block overflow-hidden relative leading-5 text-left text-zinc-500">
        <a href="http://www.instagram.com/mary_astor" target="_blank"
            className="flex absolute top-1/2 left-1/2 justify-center items-center font-sans text-3xl text-white bg-transparent opacity-0 cursor-pointer hover:text-sky-700"
            style={{
                textDecoration: 'none',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.5s ease-in-out 0s',
                zIndex: 99,
                lineHeight: '45px'
            }}>
            <i className="inline-block pr-2 not-italic leading-none cursor-pointer" aria-hidden="true" style={{
                fontVariant: 'normal',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontFamily: 'FontAwesome',
                textRendering: 'auto'
            }} />
            <span className="text-base leading-6 cursor-pointer">@Mary Astor</span>
        </a>
        <div className="px-0 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div
                    className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                    style={{ minHeight: '1px' }}>
                    <div className="flex relative justify-center items-center">
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-1.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-2.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-3.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-4.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-5.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-6.png"
                                alt="image" className="w-full align-middle border-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export function getOwnImagesDivider() {
    return <section className="block overflow-hidden relative leading-5 text-left text-zinc-500">
        <a href="http://www.instagram.com/mary_astor" target="_blank"
            className="flex absolute top-1/2 left-1/2 justify-center items-center font-sans text-3xl text-white bg-transparent opacity-0 cursor-pointer hover:text-sky-700"
            style={{
                textDecoration: 'none',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.5s ease-in-out 0s',
                zIndex: 99,
                lineHeight: '45px'
            }}>
            <i className="inline-block pr-2 not-italic leading-none cursor-pointer" aria-hidden="true" style={{
                fontVariant: 'normal',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontFamily: 'FontAwesome',
                textRendering: 'auto'
            }} />
            <span className="text-base leading-6 cursor-pointer">@Mary Astor</span>
        </a>
        <div className="px-0 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div
                    className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                    style={{ minHeight: '1px' }}>
                    <div className="flex relative justify-center items-center">
                        <div className="w-full">
                            <img src="gallery/Saunaraum.jpg"
                                alt="image" className="w-full h-96 align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="gallery/Innenbereich.jpg"
                                alt="image" className="w-full h-96 align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="gallery/SaunaEingang.jpg"
                                alt="image" className="w-full h-96 align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="gallery/Eingangsbereich.jpg"
                                alt="image" className="w-full h-96 align-middle border-none" />
                        </div>
                        <div className="w-full">
                            <img src="gallery/Holzofen.jpg"
                                alt="image" className="w-full h-96 align-middle border-none" />
                        </div>
                        {/*<div className="w-full">*/}
                        {/*    <img src="https://blogge-hugo.staticmania.com/images/blog/case-studies-6.png"*/}
                        {/*        alt="image" className="w-full align-middle border-none" />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export function FaqNew() {
    const texts = [
        {
            title: "Darf man Essen & Trinken mitnehmen?",
            content: "Selbstverständlich! Falls du etwas mitnehmen möchtest, kannst du dies gerne tun. Falls du etwas vergessen haben solltest, kannst du es auch vor Ort kaufen.",
        },
        {
            title: "Blabla bla?",
            content: "This website is a demo of the Next.js framework.",
        }
    ]
    return (
        <>
            <h2 className="mt-0 mb-5 font-sans text-4xl font-medium tracking-wide text-neutral-900  text-center">
                Häufig gestellte Fragen
            </h2>
            <div className="space-y-4 md:w-2/3 mx-auto px-4 sm:px-6 lg:px-8">
                {texts.map((text, index) => (
                    <div key={index}>
                        <details className="group">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                            >
                                <h3 className="font-medium text-gray-900">
                                    {text.title}
                                </h3>

                                <svg
                                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                {text.content}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </>
    );
};

export function footer2() {
    return (
        <footer aria-label="Site Footer" className="bg-gray-200 text-black" >
            <div className="max-w-screen-xl lg:grid lg:grid-cols-5 mx-auto flex items-center" >
                <div className="hidden lg:relative lg:col-span-2 lg:block" >
                    <img alt="Art" src="Banja-os.png" className="w-full" />
                </div>
                <div className="px-4 py-16 sm:px-6 lg:col-span-3" >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2" >
                        <div>
                            <p className="font-medium">
                                <span className="text-xs uppercase tracking-widest">Kontakt</span>
                                <a href="tel:0541441806" className="block text-2xl hover:opacity-75 sm:text-3xl">0541 441806</a>
                            </p>
                            <ul className="mt-8 space-y-2 text-sm">
                                <li>Montag - Donnerstag: 12:00 - 10:00</li>
                                <li>Freitag - Sonntag: 10:00 - 23:00</li>
                            </ul>
                        </div>
                        <div >
                            <div  >
                                <p className="font-medium">Anfahrt</p>
                                <nav aria-label="Footer Nav" className="mt-4 flex flex-col space-y-2 text-sm text-gray-800" >
                                    <a className="hover:opacity-75" >Kleine Schulstraße 24a, 49078 Osnabrück</a>
                                    <a className="hover:opacity-75">(Routenbeschreibung)</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-12" >
                        <div className="text-sm text-gray-800 sm:flex sm:items-center sm:justify-between" >
                            <div className="flex gap-3" >
                                <a className="hover:opacity-75"> Impressum </a>
                                <a className="hover:opacity-75"> Datenschutz </a></div>
                            <p className="mt-4 sm:mt-0">© 2022 Banja Os</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export function footer() {
    return <footer className="block overflow-hidden pt-24 leading-5 text-left text-zinc-500">
        <div className="px-0 mx-auto w-full text-left">
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div
                    className="relative px-4 mx-auto w-full text-center lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }}>
                    <div className="">
                        <img src="Banja-os.png" alt="logo"
                            className="align-middle border-none mx-auto" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 mx-auto w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }}>
                    <div className="flex justify-center items-center mb-10">
                        <ul className="flex flex-row p-0 m-0" style={{ listStyle: 'none' }}>
                            <li className="inline-block" style={{ listStyle: 'outside none none' }}>
                                <a className="block py-2 px-5 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    href="https://blogge-hugo.staticmania.com/"
                                    style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Home</a>
                            </li>
                            <li className="inline-block" style={{ listStyle: 'outside none none' }}>
                                <a className="block py-2 px-5 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    href="https://blogge-hugo.staticmania.com/about"
                                    style={{ textDecoration: 'none', listStyle: 'outside none none' }}>About</a>
                            </li>
                            <li className="inline-block" style={{ listStyle: 'outside none none' }}>
                                <a className="block py-2 px-5 font-sans text-sm font-semibold uppercase bg-transparent cursor-pointer text-neutral-900 hover:text-sky-700"
                                    href="https://blogge-hugo.staticmania.com/contact"
                                    style={{ textDecoration: 'none', listStyle: 'outside none none' }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div className="relative px-4 mx-auto w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2"
                    style={{ minHeight: '1px' }}>
                    <div className="mb-24 text-center">
                        <ul className="p-0 m-0">
                            <li className="inline-block" style={{ listStyle: 'none' }}>
                                <a href="https://www.facebook.com/mary_astor"
                                    className="flex justify-center items-center mr-2 w-10 h-10 font-sans text-base leading-6 bg-white border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"
                                    style={{
                                        textDecoration: 'none',
                                        borderRadius: '50px',
                                        transition: 'all 0.3s ease-in-out 0s',
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
                            <li className="inline-block" style={{ listStyle: 'none' }}>
                                <a href="https://twitter.com/mary_astor"
                                    className="flex justify-center items-center mr-2 w-10 h-10 font-sans text-base leading-6 bg-white border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"
                                    style={{
                                        textDecoration: 'none',
                                        borderRadius: '50px',
                                        transition: 'all 0.3s ease-in-out 0s',
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
                            <li className="inline-block" style={{ listStyle: 'none' }}>
                                <a href="http://www.instagram.com/mary_astor"
                                    className="flex justify-center items-center pr-0 mr-2 w-10 h-10 font-sans text-base leading-6 bg-white border border-solid cursor-pointer border-neutral-200 hover:bg-black hover:text-white"
                                    style={{
                                        textDecoration: 'none',
                                        borderRadius: '50px',
                                        transition: 'all 0.3s ease-in-out 0s',
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
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4 text-zinc-500">
                <div
                    className="relative px-4 w-full lg:max-w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-full"
                    style={{ minHeight: '1px' }}>
                    <div className="py-8 px-0 bg-black">
                        <p className="my-0 text-xs font-semibold leading-6 text-center text-white">
                            © Copyright 2022 - All Rights Reserved by
                            <a href="https://staticmania.com/" target="_blank"
                                className="font-sans bg-transparent cursor-pointer hover:text-sky-700"
                                style={{ textDecoration: 'none' }}>StaticMania</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
}

export function getOpeningHours() {
    return (
        <>
            <div className="mb-8 leading-6 border-0 border-solid text-stone-800">
                <h3 className="mx-0 mt-0 mb-4 border-0 border-solid" style={{ lineHeight: '1.2' }}>
                    Öffnungszeiten
                </h3>
                <table className="text-base font-light leading-normal border-solid border-collapse table-fixed indent-0 border-spacing-8 border-2" style={{}}>
                    <tbody className="border-0 border-solid" style={{}}>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Montag
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Dienstag
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Mittwoch
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Donnerstag
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Freitag
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Sonnabend
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                15 - 24 Uhr
                            </td>
                        </tr>
                        <tr className="border-0 border-solid" style={{}}>
                            <td className="border-0 border-solid" style={{ paddingRight: '2vw', }}>
                                Sonntag
                            </td>
                            <td className="border-0 border-solid" style={{}}>
                                12 - 24 Uhr
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export function leftSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80">
                            <img alt="House" src="gallery/Holzofen.jpg" className="absolute inset-0 h-full w-full object-cover object-bottom" />
                        </div>
                    </div>
                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100" />
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Holzofensauna
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Genießen Sie trockene Luft, die nur ein Holzofen erzeugen kann.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function rightSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative flex items-center bg-gray-100">
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">Birkenzweige / Wenik</h2>
                            <p className="mt-4 text-gray-600">
                                Genießen Sie trockene Luft, die nur ein Holzofen erzeugen kann.
                            </p>
                        </div>
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-right-16 lg:block lg:w-16 lg:bg-gray-100" />
                    </div>
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80">
                            <img
                                alt="House"
                                src="gallery/Holzofen.jpg"
                                className="absolute inset-0 h-full w-full object-cover object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function getPrices() {
    let tableHeader = [
        "Service",
        "Preis",
    ]
    let tableContent = [
        ["1 Person / Std (max. 2 Personen)", "10,00€ "],
        ["1 Person / Std (3-4 Personen)", "9,00€"],
        ["1 Person / Std (5-6 Personen)", "8,00€"],
        ["1 Kind / Std (6-15 Jahre)", "5,00€"],
    ];

    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative z-10 flex items-center">
                        <div className="relative w-full ">
                            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200 text-sm bg-white">
                                    <thead className="">
                                        <tr>
                                            {tableHeader.map((item, index) => (

                                                <th key={`tableheader-${index}`} className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                                    {item}
                                                </th>
                                            ))}
                                            {/*<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">*/}
                                            {/*    Date of Birth*/}
                                            {/*</th>*/}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {tableContent.map((row) => (
                                            <tr>
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                                    {row[0]}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{row[1]}</td>
                                            </tr>
                                        ))}


                                        {/*<tr>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">*/}
                                        {/*        John Doe*/}
                                        {/*    </td>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">*/}
                                        {/*        Jane Doe*/}
                                        {/*    </td>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">*/}
                                        {/*        Gary Barlow*/}
                                        {/*    </td>*/}
                                        {/*    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>*/}
                                        {/*</tr>*/}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100" />
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Preise
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Wir versuchen Ihnen eine möglichst günstige Alternative zu bieten ein privates Saunaerlebnis zu haben.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Bloggo() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                {getNavigation()}

                {getHero()}

                {leftSection()}

                {rightSection()}
                {/*<Faq />*/}

                {/*{getOpeningHours()}*/}
                {getPrices()}
                {/*{getArticles()}*/}
                {FaqNew()}

                <Testimonials />

                {/*{ContactMe()}*/}
                <ContactForm2 />

            </div>
            {/*{getImagesDivider()}*/}
            {/*{getOwnImagesDivider()}*/}
            {footer2()}
        </>
    );
}