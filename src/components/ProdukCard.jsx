import { FaWhatsapp } from "react-icons/fa";

export default function ProdukCard({
    image,
    size,
    title,
    price,
    description,
    waLink,
}) {
    return (
        <div
            className="rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-green-300"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <div className="relative p-4 mb-4">
                <div className="absolute top-0 left-0 bg-green-500 text-sm font-bold text-white px-3 py-1 rounded-full shadow">
                    {size}
                </div>

                <img
                    src={image}
                    alt={title}
                    className="w-60 h-auto object-contain mx-auto rounded-lg"
                />
            </div>

            <h3 className="text-md font-semibold text-gray-900">{title}</h3>

            <p className="text-black font-semibold text-lg mt-2">{price}</p>
            <p className="text-sm text-slate-500 mb-2">
                *S & K Berlaku
            </p>

            <p className="text-sm text-gray-600">{description}</p>

            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-full flex items-center gap-2"
            >
                <FaWhatsapp className="text-lg" />
                Hubungi Kami
            </a>
        </div>
    );
}
