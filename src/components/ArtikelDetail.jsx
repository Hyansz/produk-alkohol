import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArtikelDetail() {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/artikel/${slug}.html`);
                if (!response.ok) throw new Error("File tidak ditemukan");
                const text = await response.text();
                setContent(text);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [slug]);

    return (
        <section
            className="w-11/12 mx-auto py-12 mt-14 md:mt-20 prose max-w-full"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            {loading ? (
                <p>Memuat konten...</p>
            ) : error ? (
                <p className="text-red-500">Artikel tidak ditemukan.</p>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </section>
    );
}
