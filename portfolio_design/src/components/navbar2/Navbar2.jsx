

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const data = ["Home", "Projects", "Experience", "Contact","Skills"]
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 lg:px-20 ${scrolled
                ? "bg-slate-950/80 backdrop-blur-xl border-b border-borderColor py-3 shadow-2xl"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="text-2xl font-black tracking-tighter text-white z-50">
                    KAO<span className="text-blue">SAR</span>
                </div>


                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
                    {data?.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue transition-colors hover:border hover:border-blue px-3 py-1  rounded-full">
                            {item}
                        </a>
                    ))}
                    <a href="https://docs.google.com/document/d/1GLIO22D4kYGvePoJNxiLLvZfSbbiQTbsZiWQDveALmI/edit?usp=sharing" target="_blank" className="bg-cyan-500 hover:bg-transparent text-slate-950 hover:text-blue px-6 py-2 rounded-full font-bold transition shadow-lg shadow-blue/20">
                        Resume
                    </a>
                </div>

                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>
            {/* right menu===== */}
            <div
                className={`absolute h-screen w-full p-5 top-[70px] inset-0 bg-slate-950/80   backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                {data?.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold text-slate-300 hover:text-blue transition"
                    >
                        {item}
                    </a>
                ))}
                <a href="https://docs.google.com/document/d/1GLIO22D4kYGvePoJNxiLLvZfSbbiQTbsZiWQDveALmI/edit?usp=sharing" target="_blank" className="mt-4 bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-bold">
                    Resume
                </a>
            </div>
        </nav>
    );
}
