import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    const navItems = [
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Skills",
            href: "#skills",
        },
        {
            label: "Projects",
            href: "#projects",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ];

    return (
        <>
            <motion.nav
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
                        ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* LOGO */}
                    <motion.a
                        href="#home"
                        whileHover={{
                            scale: 1.05,
                        }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center font-bold text-black">
                            FS
                        </div>

                        <div>
                            <h2 className="font-bold text-xl text-white">
                                FullStack Dev
                            </h2>

                            <p className="text-xs text-cyan-400">
                                React • Node • AI
                            </p>
                        </div>
                    </motion.a>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="relative text-gray-300 hover:text-cyan-400 transition group"
                                >
                                    {item.label}

                                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT SIDE */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="https://github.com/Arpita-Panda-1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition"
                        >
                            <FaGithub size={22} />
                        </Link>

                        <Link
                            to="https://www.linkedin.com/in/arpitapanda1999"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition"
                        >
                            <FaLinkedin size={22} />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="bg-cyan-500 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                        >
                            Resume
                        </a>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-cyan-400"
                    >
                        {open ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                type: "spring",
                                damping: 25,
                            }}
                            className="fixed top-0 right-0 h-screen w-[280px] bg-zinc-950 border-l border-cyan-500/20 z-50 p-8"
                        >
                            <div className="flex justify-end mb-10">
                                <FaTimes
                                    size={24}
                                    className="cursor-pointer text-cyan-400"
                                    onClick={() => setOpen(false)}
                                />
                            </div>

                            <ul className="space-y-8">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={() =>
                                                setOpen(false)
                                            }
                                            className="text-lg text-gray-300 hover:text-cyan-400 transition"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-5 mt-12">
                                <FaGithub
                                    size={24}
                                    className="text-gray-400"
                                />

                                <FaLinkedin
                                    size={24}
                                    className="text-gray-400"
                                />
                            </div>

                            <a
                                href="/resume.pdf"
                                download
                                className="mt-10 block text-center bg-cyan-500 text-black py-3 rounded-xl font-semibold"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;