import ProdukList from "../components/ProdukList";

export default function Products() {
    return (
        <>
            <div className="bg-gray-900 text-white h-96 md:mt-10 flex items-center justify-center px-4 text-center">
                <div className="max-w-3xl">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        Produk
                    </h2>
                    <p
                        className="text-base md:text-lg text-gray-300"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                    >
                        Jual bahan baku parfum cair dengan kualitas premium,
                        cocok digunakan untuk industri kosmetik, sabun, parfum
                        isi ulang, dan produk wewangian lainnya.
                    </p>
                </div>
            </div>

            <ProdukList />

            <div
                className="bg-green-100 w-10/12 mx-auto mb-10 py-10 px-6 rounded-xl shadow-inner"
                data-aos="zoom-in"
                data-aos-delay="300"
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
                            src="/shopee.webp"
                            alt="Shopee"
                            loading="lazy"
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
                            src="/tokopedia.webp"
                            alt="Tokopedia"
                            loading="lazy"
                            className="w-full hover:scale-105 transition duration-300"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
