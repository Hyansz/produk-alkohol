import { FaStar, FaFlask, FaCogs, FaSmog } from "react-icons/fa";

export default function Keunggulan() {
    const keunggulanList = [
        {
            title: "Kualitas Premium",
            desc: "Menggunakan bahan baku berkualitas tinggi, menghasilkan alkohol antiseptik yang murni, stabil, dan aman untuk aplikasi di industri kosmetik dan wewangian.",
            icon: <FaStar className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
        },
        {
            title: "Kemurnian Tinggi (96%)",
            desc: "Memberikan daya larut dan daya campur optimal, menjamin performa maksimal pada parfum, sabun, dan produk wewangian lainnya.",
            icon: <FaFlask className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
        },
        {
            title: "Multiaplikasi",
            desc: "Bisa digunakan untuk berbagai industri, mulai dari kosmetik, sabun, parfum, hingga produk perawatan pribadi lainnya.",
            icon: <FaCogs className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
        },
        {
            title: "Aroma Netral",
            desc: "Tidak meninggalkan bau menyengat yang mengganggu, sehingga menjaga karakter asli dari wewangian atau formula produk Anda.",
            icon: <FaSmog className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
        },
    ];

    return (
        <section className="w-11/12 m-auto py-12 px-4">
            <div className="max-w-7xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
                <h3 className="font-semibold text-2xl md:text-3xl pb-10">
                    Keunggulan Kami
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keunggulanList.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 bg-green-500 rounded-2xl text-left shadow-md text-white shadow-green-800"
                            data-aos="zoom-in"
                            data-aos-delay={i * 200}
                            data-aos-duration="800"
                        >
                            <div className="flex items-center justify-center mb-2">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-xl mb-2 text-center">
                                {item.title}
                            </h4>
                            <p className="text-sm text-white text-center">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
