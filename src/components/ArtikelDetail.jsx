import { useParams } from "react-router-dom";

export default function ArtikelDetail() {
    const { slug } = useParams();

    const artikel = {
        title: "Detail dari " + slug.replace(/-/g, " "),
        image: "/bsm.webp",
        content:
            "Ini adalah isi lengkap dari artikel yang dipilih. Anda bisa mengganti dengan konten dinamis.",
    };

    return (
        <section
            className="w-10/12 mx-auto py-12 md:mt-20"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            <img
                src={artikel.image}
                alt={artikel.title}
                loading="lazy"
                className="w-full max-h-96 object-cover rounded mb-6"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {artikel.title}
            </h1>
            <p className="text-gray-700 leading-relaxed">{artikel.content}</p>
        </section>
    );
}
