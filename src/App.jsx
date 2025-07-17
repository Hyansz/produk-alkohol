import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Products from "./pages/Products";
import Artikel from "./components/Article";
import ArtikelDetail from "./components/ArtikelDetail";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({ once: false }); 
    }, []);

    return (
        <div className="font-sans">
            <Header />
            <Routes>
            <ScrollToTop />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog" element={<Artikel />} />
                <Route path="/blog/:slug" element={<ArtikelDetail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
