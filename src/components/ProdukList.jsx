import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "./ProdukCard";

export default function ProdukList() {
    const products = [
        {
            image: "/70_100_ml.webp",
            size: "100 ML",
            title: "N3 Alkohol Antiseptik 70% 100 ML",
            price: "Rp 3.000",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%20100ML",
        },
        {
            image: "/70_1_l.webp",
            size: "1 L",
            title: "N3 Alkohol Antiseptik 70% 1 L",
            price: "Rp 18.000",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%201L",
        },
        {
            image: "/70_5_l.webp",
            size: "5 L",
            title: "N3 Alkohol Antiseptik 70% 5 L",
            price: "Rp 75.195",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%205L",
        },
        {
            image: "/70_20_l.webp",
            size: "20 L",
            title: "N3 Alkohol Antiseptik 70% 20 L",
            price: "Rp 308.205",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%2020L",
        },
        {
            image: "/96_1_l.webp",
            size: "1 L",
            title: "N3 Alkohol Antiseptik 96% 1 L",
            price: "Rp 23.000",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%201L",
        },
        {
            image: "/96_5_l.webp",
            size: "5 L",
            title: "N3 Alkohol Antiseptik 96% 5 L",
            price: "Rp 99.900",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%205L",
        },
        {
            image: "/96_20_l.webp",
            size: "20 L",
            title: "N3 Alkohol Antiseptik 96% 20 L",
            price: "Rp 308.250",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%2020L",
        },
        {
            image: "/96_200_l.webp",
            size: "200 L",
            title: "N3 Alkohol Antiseptik 96% 200 L",
            price: "Rp 3.800.000",
            waLink: "https://wa.me/6282324764733?text=Halo%20saya%20ingin%20order%20200L",
        },
    ];

    return (
        <div className="w-10/12 mx-auto py-10">
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className="mb-10 mx-auto">
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:block lg:hidden">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={2}
                    grabCursor
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className="mb-10 mx-auto">
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:hidden lg:grid lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
}
