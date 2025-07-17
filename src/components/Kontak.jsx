import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function KontakKami() {
    const kontakList = [
        {
            title: "Email",
            value: "marketing@entrijayamakmur.com",
            icon: <FaEnvelope className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
            bg: "bg-green-500 text-white",
        },
        {
            title: "Telepon",
            value: "+62 823-2476-4733",
            icon: <FaPhoneAlt className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
            bg: "bg-green-500 text-white",
        },
        {
            title: "Alamat",
            value: "DK SAMIRUKUN, RT.7/RW.11, Samirukun, Plesungan, Kec. Gondangrejo, Kab. Karanganyar, Jawa Tengah 57127",
            icon: <FaMapMarkerAlt className="text-3xl text-white mb-4 bg-green-800 p-2 rounded-full" />,
            bg: "bg-green-500 text-white",
        },
    ];

    return (
        <section className="w-11/12 m-auto py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h3
                    className="font-semibold text-2xl md:text-3xl pb-10 text-gray-900"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Kontak Kami
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {kontakList.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] ${item.bg} shadow-lg shadow-green-800`}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            data-aos-duration="800"
                        >
                            <div className="flex items-center justify-center mb-2">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-lg text-center mb-2">{item.title}</h4>
                            <p className="text-sm text-center break-words whitespace-pre-line">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
