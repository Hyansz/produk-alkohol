import shp from "../assets/shopee.png";
import tkp from "../assets/tokopedia.png";

export default function Collab() {
    return (
        <section
            className="w-11/12 mx-auto py-16 space-y-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
                        Siap menyuplai kebutuhan{" "}
                        <span className="text-green-600 font-bold">
                            bahan baku
                        </span>{" "}
                        bisnis Anda
                    </h1>
                    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2 text-sm md:text-base">
                        <li>Industri Farmasi</li>
                        <li>Industri Kosmetik</li>
                        <li>Industri Parfum</li>
                        <li>Industri Kebersihan</li>
                    </ul>
                    <a
                        href="https://wa.me/6282324764733"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition text-sm md:text-base"
                    >
                        Mulai Kerja Sama
                    </a>
                </div>

                <div className="flex-1">
                    <img
                        src="/bsm.jpg"
                        alt="Bangunan Perusahaan"
                        className="w-full h-auto max-w-full mx-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            <div
                className="bg-green-100 py-10 px-6 rounded-xl shadow-inner"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="1000"
            >
                <h2 className="text-center font-semibold text-xl md:text-2xl text-green-800 mb-8">
                    Shop Now!
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <a
                        href="https://shopee.co.id/pt.entrijayamakmur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-24 sm:w-28 md:w-36"
                    >
                        <img
                            src={shp}
                            alt="Shopee"
                            className="w-full hover:scale-105 transition duration-300"
                        />
                    </a>
                    <a
                        href="http://www.tokopedia.com/entri-jaya-makmur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-24 sm:w-28 md:w-36"
                    >
                        <img
                            src={tkp}
                            alt="Tokopedia"
                            className="w-full hover:scale-105 transition duration-300"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
