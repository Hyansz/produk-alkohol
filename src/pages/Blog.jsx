import Artikel from "../components/Article";

export default function Blog() {
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
                        Blog
                    </h2>
                    <p
                        className="text-base md:text-lg text-gray-300"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        Baca artikel dan informasi terbaru seputar alkohol,
                        bahan baku medis, dan solusi terbaik untuk kebutuhan
                        industri Anda.
                    </p>
                </div>
            </div>

            <Artikel />
        </>
    );
}
