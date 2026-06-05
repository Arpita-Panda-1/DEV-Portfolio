import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AIChat from "../components/AIChat";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("../components/Projects"));

import { motion } from "framer-motion";
import MouseGlow from "../components/MouseGlow";

const techStack = [
    "React",
    "TypeScript",
    "Node",
    "Express",
    "MongoDB",
    "Docker",
    "AWS",
    "CI/CD",
];

const Home = () => {
    return (
        <div className="bg-dark text-white">
            <Navbar />

            <section
                id="home"
                className="relative min-h-screen overflow-hidden flex items-center mt-10"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

                <div className="max-w-7xl mx-auto px-6 w-full z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -50,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                className="text-primary text-lg mb-4"
                            >
                                👋 Hello, I'm
                            </motion.p>

                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                                Full Stack
                                <br />
                                <span className="text-primary">
                                    Developer
                                </span>
                            </h1>

                            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
                                Passionate Full Stack Developer
                                building scalable applications
                                with React, Node.js,
                                TypeScript, Docker, Cloud &
                                AI Integration.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full bg-zinc-900 border border-primary/20 hover:border-primary transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 flex gap-4">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="bg-primary text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
                                >
                                    Download Resume
                                </a>

                                <a
                                    href="#contact"
                                    className="border border-primary px-8 py-4 rounded-xl"
                                >
                                    Contact Me
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mt-12">
                                <div>
                                    <h3 className="text-3xl font-bold text-primary">
                                        3+
                                    </h3>
                                    <p className="text-gray-400">
                                        Years Exp
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-primary">
                                        25+
                                    </h3>
                                    <p className="text-gray-400">
                                        Projects
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-primary">
                                        10+
                                    </h3>
                                    <p className="text-gray-400">
                                        Clients
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary blur-[120px] opacity-20" />

                            <motion.img
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                src="/prof-pics.jpeg"
                                alt="Profile"
                                className="rounded-3xl border border-primary/30 shadow-2xl"
                            />

                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 25,
                                    ease: "linear",
                                }}
                                className="absolute -top-10 -right-10 w-24 h-24 border-2 border-primary rounded-full"
                            />

                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: "linear",
                                }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 border border-primary rounded-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Skills />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Projects />
            </Suspense>
            <MouseGlow />
            <Contact />
            <AIChat />
            <Footer />
        </div>
    );
};

export default Home;