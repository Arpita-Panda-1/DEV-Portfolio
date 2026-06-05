import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCodeBranch,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiMysql,
} from "react-icons/si";


const skills = [
    {
        name: "React.js",
        level: 95,
        exp: "3 Years",
        icon: <FaReact />,
        color: "from-cyan-500 to-blue-500",
    },
    {
        name: "JavaScript",
        level: 95,
        exp: "3 Years",
        icon: <SiJavascript />,
        color: "from-yellow-400 to-yellow-600",
    },
    {
        name: "TypeScript",
        level: 90,
        exp: "2.5 Years",
        icon: <SiTypescript />,
        color: "from-blue-500 to-indigo-500",
    },
    {
        name: "Redux Toolkit",
        level: 88,
        exp: "2 Years",
        icon: <SiRedux />,
        color: "from-violet-500 to-purple-600",
    },
    {
        name: "Node.js",
        level: 90,
        exp: "3 Years",
        icon: <FaNodeJs />,
        color: "from-green-500 to-emerald-500",
    },
    {
        name: "Express.js",
        level: 88,
        exp: "3 Years",
        icon: <SiExpress />,
        color: "from-gray-400 to-white",
    },
    {
        name: "MongoDB",
        level: 90,
        exp: "3 Years",
        icon: <SiMongodb />,
        color: "from-green-400 to-green-600",
    },
    {
        name: "PostgreSQL",
        level: 85,
        exp: "2 Years",
        icon: <SiPostgresql />,
        color: "from-blue-400 to-blue-700",
    },
    {
        name: "SQL",
        level: 85,
        exp: "2 Years",
        icon: <SiMysql />,
        color: "from-orange-400 to-orange-600",
    },
    {
        name: "Redis",
        level: 80,
        exp: "1.5 Years",
        icon: <SiRedis />,
        color: "from-red-500 to-red-700",
    },
    {
        name: "Docker",
        level: 85,
        exp: "2 Years",
        icon: <FaDocker />,
        color: "from-blue-400 to-cyan-500",
    },
    {
        name: "CI/CD",
        level: 80,
        exp: "2 Years",
        icon: <FaCodeBranch />,
        color: "from-pink-500 to-purple-500",
    },
    {
        name: "Git",
        level: 92,
        exp: "3 Years",
        icon: <FaGitAlt />,
        color: "from-orange-500 to-red-500",
    },
    {
        name: "GitHub",
        level: 92,
        exp: "3 Years",
        icon: <FaGithub />,
        color: "from-gray-500 to-white",
    },
    {
        name: "GitHub Actions",
        level: 80,
        exp: "1.5 Years",
        icon: <SiGithubactions />,
        color: "from-blue-500 to-cyan-500",
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="max-w-7xl mx-auto px-6 py-28"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl font-bold">
                    My <span className="text-cyan-400">Tech Stack</span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Technologies I use to build scalable,
                    production-ready full-stack applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
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
                            y: -10,
                            scale: 1.03,
                        }}
                        className="group relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 p-6"
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="text-5xl text-cyan-400 group-hover:rotate-12 transition duration-300">
                                    {skill.icon}
                                </div>

                                <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-cyan-500/30">
                                    {skill.exp}
                                </span>
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                {skill.name}
                            </h3>

                            <div className="mt-5">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Proficiency</span>
                                    <span>{skill.level}%</span>
                                </div>

                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: `${skill.level}%`,
                                        }}
                                        transition={{
                                            duration: 1.2,
                                        }}
                                        className={`h-full bg-gradient-to-r ${skill.color}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-400">
                        3+
                    </h3>
                    <p className="text-gray-400">
                        Years Experience
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-400">
                        25+
                    </h3>
                    <p className="text-gray-400">
                        Projects Delivered
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-400">
                        100%
                    </h3>
                    <p className="text-gray-400">
                        Responsive Design
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-400">
                        AI
                    </h3>
                    <p className="text-gray-400">
                        Integrated Apps
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;