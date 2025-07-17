import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import sertif1 from "../assets/sertif1.png";
import sertif2 from "../assets/sertif2.png";
import sertif3 from "../assets/sertif3.png";
import sertif4 from "../assets/sertif4.png";
import sertif5 from "../assets/sertif5.png";

export default function Sertifikasi() {
    const sertifikat = [sertif1, sertif2, sertif3, sertif4, sertif5];
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section
            className="w-11/12 mx-auto py-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h1
                    className="text-3xl font-bold text-gray-800 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                >
                    Sertifikasi
                </h1>
                <p
                    className="text-gray-600"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    Perusahaan kami telah memiliki sertifikasi resmi, menjamin
                    standar mutu, keamanan, dan konsistensi produk yang
                    dihasilkan. Sertifikasi ini memperkuat kepercayaan sebagai
                    mitra andal dalam penyediaan bahan baku parfum cair dan
                    industri lain.
                </p>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                }}
                className="bg-blue-500 rounded-2xl"
            >
                {sertifikat.map((src, index) => (
                    <SwiperSlide
                        key={index}
                        className="bg-blue-500"
                    >
                        <img
                            src={src}
                            alt={`Sertifikat ${index + 1}`}
                            className="rounded-xl shadow-md shadow-green-800 border-slate-300 border my-12 mx-auto object-contain w-full max-w-xs cursor-pointer hover:scale-105 transition"
                            onClick={() => setPreviewImage(src)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {previewImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setPreviewImage(null)}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </section>
    );
}
