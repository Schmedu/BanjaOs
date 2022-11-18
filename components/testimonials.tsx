// @ts-ignore
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

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
        img: "https://lh3.googleusercontent.com/a-/ACNPEu8YD903ZjnbwW5Eqm05xuXrV5OU-FytZW1KL6JW_g=w72-h72-p-c0x00000000-rp-mo-br100",
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
        img: "https://lh3.googleusercontent.com/a-/ACNPEu_KzgdgX16LR4KfgZd2Gi0txZ2q4BwuJORiacF3=w72-h72-p-c0x00000000-rp-mo-br100",
    }
]


const SwiperButtonPrev = ({ children }) => {
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

const SwiperButtonNext = ({ children }) => {
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

const Rating = ({ rating }) => {
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
            <section>
                <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:mr-0 lg:pl-8 lg:pr-0">
                    <div className="max-w-7xl items-end justify-center sm:flex sm:pr-6 lg:pr-8">
                        {/*<h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl text-center">*/}
                        <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide text-center">
                            Das sagen unsere Kunden
                        </h2>
                    </div>
                    <div className="-mx-6 lg:col-span-2 lg:mx-0 px-4 sm:px-6 lg:px-8">
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
                                    slidesPerView: 2,
                                },
                                // 1280: {
                                //     slidesPerGroup: 2,
                                //     slidesPerView: 4,
                                // },
                            }}

                        >
                            <div className="text-center mt-4 space-x-4">
                                <SwiperButtonPrev />
                                <SwiperButtonNext />
                            </div>
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.name}>
                                    <div className="swiper-slide">
                                        <blockquote className="rounded-3xl bg-br-l-blush-light p-8 dark:bg-br-black-400 dark:border-none shadow-lg">
                                            <div className="flex items-center">
                                                {testimonial.img ? (
                                                    <img
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
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/*</div>*/}
                            {/*</div>*/}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;