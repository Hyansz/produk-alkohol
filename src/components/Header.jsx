import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo3.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY && currentScroll > 80) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`bg-gradient-to-r from-green-600 to-green-400 text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                <Link to="/">
                    <img
                        src={Logo1}
                        alt=""
                        className="block md:hidden h-10 w-auto object-contain"
                    />
                    <img
                        src={Logo2}
                        alt=""
                        className="hidden md:block h-10 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/products" className="hover:text-gray-200">
                        Produk
                    </Link>
                    <Link to="/about" className="hover:text-gray-200">
                        Tentang Kami
                    </Link>
                    <Link to="/blog" className="hover:text-gray-200">
                        Blog
                    </Link>
                </nav>

                <button
                    className={`md:hidden ml-4 text-2xl transition-transform duration-300 ${
                        menuOpen ? "rotate-90" : "rotate-0"
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                        menuOpen
                            ? "max-h-60 opacity-100 py-4"
                            : "max-h-0 opacity-0 py-0"
                    }`}
                >
                    <Link to="/" className="hover:text-gray-200 block py-1">
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-gray-200 block py-1"
                    >
                        Produk
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-gray-200 block py-1"
                    >
                        Tentang Kami
                    </Link>
                    <Link to="/blog" className="hover:text-gray-200 block py-1">
                        Blog
                    </Link>
                </div>
            )}
        </header>
    );
}
