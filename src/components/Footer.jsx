import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import banner from "../assets/logo3.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center md:text-left pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
                <div className="md:w-1/3">
                    <img src={banner} alt="Logo" className="mb-5 w-65 md:mx-0 mx-auto" />
                    <p className="text-sm text-gray-400 mb-4">Bahan baku alkohol dengan konsentrasi yang lebih tinggi untuk menghasilkan produk parfum, kosmetik, dan wewangian yang lebih berkualitas, tahan lama, dan stabil.</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a href="https://www.facebook.com/pt.entrijayamakmur/" className="hover:text-green-400 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.tiktok.com/@pt.entrijayamakmur" className="hover:text-green-400 transition">
                            <FaTiktok />
                        </a>
                        <a href="https://www.instagram.com/pt.entrijayamakmur/" className="hover:text-green-400 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:w-2/3 gap-10">
                    <div className="sm:w-1/2">
                        <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
                        <ul className="text-sm space-y-2 text-gray-400">
                            <li>
                                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition">
                                    Produk
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:w-1/2">
                        <h4 className="text-lg font-semibold mb-4">Lokasi Kami</h4>
                        <div className="aspect-video rounded-lg overflow-hidden mb-3 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63278.89259281948!2d110.73562676479189!3d-7.5825131413896365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1119d43e7431%3A0x50a9a4615f05cb08!2sPT%20ENTRI%20JAYA%20MAKMUR%20(PLESUNGAN)!5e0!3m2!1sen!2sid!4v1752577749524!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Perusahaan"
                            ></iframe>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            DK SAMIRUKUN, RT.7/RW.11, Samirukun, Plesungan, Kec. Gondangrejo, Kab. Karanganyar, Jawa Tengah 57127
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} Hyanz. All rights reserved.
            </div>
        </footer>
    );
}
