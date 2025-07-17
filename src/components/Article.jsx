import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

export default function Artikel() {
    const articles = [
        {
            image: "/bsm.jpg",
            title: "Judul Artikel Pertama",
            excerpt: "Ini adalah cuplikan singkat dari artikel pertama.",
            slug: "judul-artikel-pertama",
        },
        {
            image: "/bsm.jpg",
            title: "Judul Artikel Kedua",
            excerpt: "Cuplikan artikel kedua yang menarik.",
            slug: "judul-artikel-kedua",
        },
        {
            image: "/bsm.jpg",
            title: "Judul Artikel Ketiga",
            excerpt: "Perkembangan terbaru dalam industri.",
            slug: "judul-artikel-ketiga",
        },
    ];

    return (
        <section className="w-11/12 mx-auto pt-10 pb-10">
            {/* Mobile (Swiper) */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    speed={600} // Smooth swipe
                >
                    {articles.map((article, index) => (
                        <SwiperSlide
                            key={index}
                            className="mb-10"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            data-aos-duration="800"
                        >
                            <Card {...article} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 200}
                        data-aos-duration="800"
                    >
                        <Card {...article} />
                    </div>
                ))}
            </div>
        </section>
    );
}

function Card({ image, title, excerpt, slug }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {title}
                </h2>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <Link
                    to={`/blog/${slug}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition inline-block"
                >
                    Selengkapnya
                </Link>
            </div>
        </div>
    );
}
