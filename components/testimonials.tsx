// @ts-ignore
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import ResponsiveImage from "./responsiveImage";

const testimonials = [
    {
        name: 'Florian Grüter',
        rating: 5,
        text: "Klein, aber fein. Nette, zuvorkommende GastgeberInnen. Stets unkompliziert und entspannt.",
        img: "",
    },
    {
        name: 'Kevin Kopsicker',
        rating: 5,
        text: "Super gemütliche Sauna mit freundlichen und diskreten Gastgeber:innen! Seit Jahren der ideale Ort zum Entspannen direkt in der Nachbarschaft 👌",
        img: "/testimonials/kevin-kopsicker.png",
    },
    {
        name: 'Jan Peter Koch',
        rating: 5,
        text: "Kleine aber feine Sauna. Besitzer sind sehr nett und sehr zuvorkommend. Man ist dort immer sehr ungestört und kann super entspannen!",
        img: "",
    },
    {
        name: 'Simon Sabin',
        rating: 5,
        text: "Super Saunaerlebnis!",
        img: "/testimonials/simon-sabin.png",
    }
]

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <button className="prev-button bg-transparent rounded-full border border-current p-3 text-br-l-twilight focus:bg-br-l-twilight focus:text-br-l-blush dark:text-br-l-blush dark:focus:bg-br-l-twilight focus:outline-none"
            onClick={() => swiper.slidePrev()}>
            <span className="sr-only">Previous Slide</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );
};

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <button className="next-button bg-transparent rounded-full border border-current p-3 text-br-l-twilight focus:bg-br-l-twilight focus:text-br-l-blush dark:text-br-l-blush dark:focus:bg-br-l-twilight focus:outline-none"
            onClick={() => swiper.slideNext()}>
            <span className="sr-only">Nächste Kundenmeinung</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );
};

const Rating = ({ rating }: { rating: number }) => {
    let a = []
    for (let step = 0; step < rating; step++) {
        a.push(1)
    }

    return (
        <>
            {a.map((el) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    key={el.toString() + Math.random()}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </>
    )
}

const Testimonials = () => {

    return (
        <>
            <section className={"max-w-full"}>
                <div className="items-end justify-center sm:flex sm:pr-6 lg:pr-8">
                    {/*<h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl text-center">*/}
                    <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide text-center">
                        Das sagen unsere Kunden
                    </h2>
                </div>
                <div className="lg:col-span-2">
                    {/*<div className="swiper-container !overflow-hidden">*/}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        slidesPerGroup={1}
                        autoplay={true}
                        breakpoints={{
                            // when window width is >= 576px
                            576: {
                                spaceBetween: 10,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                spaceBetween: 20,
                                slidesPerView: 2,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                // slidesPerGroup: 2,
                                slidesPerView: 4,
                            },
                        }}

                    >
                        <div className="text-center mt-4 space-x-4 xl:hidden">
                            <SwiperButtonPrev />
                            <SwiperButtonNext />
                        </div>
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.name}>
                                <motion.div className="swiper-slide p-2 pb-4"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (0.3 * index) }}
                                    viewport={{ once: true }}
                                >
                                    <blockquote className="rounded-3xl bg-br-l-blush-light p-8 dark:bg-br-black-400 dark:border-none shadow-lg">
                                        <div className="flex items-center">
                                            {testimonial.img ? (
                                                <ResponsiveImage
                                                    alt="Man"
                                                    src={testimonial.img}
                                                    className="h-16 w-16 rounded-full object-cover mr-4"
                                                />
                                            ) : (<></>)}
                                            <div>
                                                <div className="flex justify-left gap-0.5 text-br-orange">
                                                    <Rating rating={testimonial.rating} />
                                                </div>
                                                <p className="mt-1 text-lg font-medium">
                                                    {testimonial.name}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-4 ">
                                            {testimonial.text}
                                        </p>
                                    </blockquote>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                        {/*</div>*/}
                        {/*</div>*/}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonials;