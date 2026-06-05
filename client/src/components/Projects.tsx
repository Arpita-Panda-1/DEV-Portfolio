import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
    {
        title: "Enterprise E-Commerce Platform",
        category: "Full Stack",
        image: "/projects/ecommerce.png",
        description:
            "A production-ready MERN e-commerce platform with admin dashboard, JWT authentication, order management, analytics, inventory control, email notifications, and payment integration.",

        tech: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux Toolkit",
            "Docker",
        ],

        github:
            "https://github.com/yourusername/ecommerce",

        demo:
            "https://ecommerce-demo.vercel.app",

        metrics: [
            "Admin Dashboard",
            "Payment Gateway",
            "Analytics",
            "Authentication",
        ],
    },

    {
        title: "AI Resume Analyzer",
        category: "AI + Full Stack",
        image: "/projects/resume.png",
        description:
            "AI-powered resume analysis platform that evaluates resumes, scores ATS compatibility, and provides recommendations using LLM APIs.",

        tech: [
            "React",
            "Node.js",
            "OpenAI",
            "MongoDB",
            "Docker",
        ],

        github:
            "https://github.com/yourusername/resume-analyzer",

        demo:
            "https://resume-analyzer.vercel.app",

        metrics: [
            "AI Integration",
            "ATS Analysis",
            "Resume Parsing",
            "PDF Upload",
        ],
    },

    {
        title: "DevOps CI/CD Automation",
        category: "DevOps",
        image: "/projects/devops.png",
        description:
            "Containerized application with automated GitHub Actions workflow, Docker deployment, testing pipeline, and production-ready infrastructure.",

        tech: [
            "Docker",
            "GitHub Actions",
            "CI/CD",
            "AWS",
            "Node.js",
        ],

        github:
            "https://github.com/yourusername/devops-project",

        demo:
            "https://demo-link.com",

        metrics: [
            "Dockerized",
            "CI/CD",
            "GitHub Actions",
            "AWS Ready",
        ],
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="max-w-7xl mx-auto px-6 py-28"
        >
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold">
                    Featured
                    <span className="text-cyan-400">
                        {" "}
                        Projects
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Production-level applications
                    demonstrating full-stack
                    development, cloud deployment,
                    DevOps practices, and AI
                    integrations.
                </p>
            </div>

            <div className="space-y-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.1,
                        }}
                        whileHover={{
                            y: -5,
                        }}
                        className="group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-950"
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute top-5 left-5">
                                    <span className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-8 lg:p-10">
                                <h3 className="text-3xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-4 leading-8">
                                    {project.description}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-3 mt-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-2 rounded-full bg-zinc-900 border border-cyan-500/20 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* FEATURES */}
                                <div className="grid grid-cols-2 gap-3 mt-8">
                                    {project.metrics.map(
                                        (metric) => (
                                            <div
                                                key={metric}
                                                className="bg-zinc-900 rounded-xl px-4 py-3 text-center text-sm"
                                            >
                                                {metric}
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* ACTIONS */}
                                <div className="flex gap-4 mt-8">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-zinc-900 px-5 py-3 rounded-xl hover:bg-zinc-800 transition"
                                    >
                                        <FaGithub />
                                        Source Code
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;