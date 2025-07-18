import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero({ detail }) {
    const slides = [
        {
            title: "Bahan Baku Parfum",
            description:
                "Dengan kemurnian tinggi, Alkohol Antiseptik 96% digunakan sebagai bahan baku pembuatan parfum, kosmetik, wewangian, dll.",
            image: "/bsm.webp",
        },
        {
            title: "Antiseptik Kualitas Premium",
            description:
                "Kami menyediakan alkohol antiseptik 70% dan 96% dalam berbagai ukuran untuk kebutuhan industri dan rumah tangga.",
            image: "/bsm2.webp",
        },
    ];

    return (
        <section className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                grabCursor
                className="max-w-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="eager"
                                decoding="async"
                                fetchpriority="high"
                            />
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 md:px-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h2>
                                <p className="mb-6 text-base md:text-lg max-w-3xl">
                                    {slide.description}
                                </p>
                                <button
                                    onClick={detail}
                                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition cursor-pointer"
                                >
                                    Detail
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
