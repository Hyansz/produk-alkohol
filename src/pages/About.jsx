import Collab from "../components/Collab";
import Keunggulan from "../components/Keunggulan";
import Kontak from "../components/Kontak";

export default function About() {
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
                        Tentang Kami
                    </h2>
                    <p
                        className="text-base md:text-lg text-gray-300"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        Jual bahan baku parfum cair dengan kualitas premium,
                        cocok digunakan untuk industri kosmetik, sabun, parfum
                        isi ulang, dan produk wewangian lainnya.
                    </p>
                </div>
            </div>

            <Keunggulan />
            <Collab />
            <Kontak />
        </>
    );
}
