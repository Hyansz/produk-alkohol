import { useRef } from "react";
import Artikel from "../components/Article";
import Collab from "../components/Collab";
import Hero from "../components/Hero";
import Keunggulan from "../components/Keunggulan";
import ProdukList from "../components/ProdukList";
import Sertifikasi from "../components/Sertifikasi";
import Welcome from "../components/Welcome";

export default function Home() {
    const detailRef = useRef(null);

    const handleDetailClick = () => {
        detailRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Hero detail={handleDetailClick} />
            <div ref={detailRef}>
                <Welcome />
            </div>
            <Keunggulan />
            <div
                className="w-11/12 mx-auto text-center mt-20 md:mb-2 mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
            >
                <h3 className="text-2xl font-semibold mb-2">Produk</h3>
                <p className="text-gray-600 w-10/12 mx-auto">
                    Jual bahan baku parfum cair dengan kualitas premium, cocok
                    digunakan untuk industri kosmetik, sabun, parfum isi ulang,
                    dan produk wewangian lainnya.
                </p>
            </div>
            <ProdukList />
            <Collab />
            <Sertifikasi />
            <h1
                className="text-3xl font-bold text-center text-gray-800 mt-13"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
            >
                Blog & Artikel
            </h1>
            <Artikel />
        </>
    );
}
