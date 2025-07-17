import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Hero({ detail }) {
    const slides = [
        {
            title: "Bahan Baku Parfum",
            description:
                "Dengan kemurnian tinggi, Alkohol Antiseptik 96% digunakan sebagai bahan baku pembuatan parfum, kosmetik, wewangian, dll. Dengan hasil akhir yang berkualitas.",
            background: "/bsm.jpg",
        },
        {
            title: "Antiseptik Kualitas Premium",
            description:
                "Kami menyediakan alkohol antiseptik 70% dan 96% dalam berbagai ukuran untuk kebutuhan industri dan rumah tangga.",
            background: "/bsm2.jpg",
        },
    ];

    return (
        <section className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                grabCursor
                className="max-w-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60"></div>

                            <motion.div
                                className="relative z-10 px-6 md:px-16 text-white text-center max-w-4xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                key={index}
                            >
                                <motion.h2
                                    className="text-3xl md:text-5xl font-bold mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    {slide.title}
                                </motion.h2>
                                <motion.p
                                    className="mb-6 text-base md:text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    {slide.description}
                                </motion.p>
                                <motion.button
                                    onClick={detail}
                                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition cursor-pointer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    Detail
                                </motion.button>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
