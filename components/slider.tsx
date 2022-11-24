import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ResponsiveImage from "./responsiveImage";
import React from "react";
import { SwiperButtonNext, SwiperButtonPrev } from "./testimonials";

export default function Slider() {
    let images = [
        { src: "/gallery/Eingangsbereich.jpg", alt: "" },
        { src: "/gallery/Holzofen.jpg", alt: "" },
        { src: "/gallery/Saunaraum.jpg", alt: "" },
        { src: "/gallery/SaunaEingang.jpg", alt: "" },
    ]

    return (
        <section className={"max-w-full"}>
            <div className="lg:col-span-2">
                <div className="swiper-container !overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={50}
                        slidesPerGroup={1}
                        autoplay={{ delay: 5000 }}
                    >
                        <div className="text-center mt-4 space-x-4">
                            <SwiperButtonPrev />
                            <SwiperButtonNext />
                        </div>
                        {images.map((img, index) => (
                            <SwiperSlide key={img.src}>
                                <img className={"rounded-3xl shadow-lg"} src={img.src} alt={img.alt} loading={"lazy"} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}