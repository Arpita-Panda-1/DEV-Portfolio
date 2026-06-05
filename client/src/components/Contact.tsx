import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import useContact from "../hooks/useContact";

const Contact = () => {
    const { sendMessage, loading } = useContact();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        reason: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            await sendMessage(formData);

            toast.success(
                "Message sent successfully!"
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                reason: "",
                message: "",
            });
        } catch {
            toast.error(
                "Failed to send message"
            );
        }
    };

    return (
        <section
            id="contact"
            className="max-w-7xl mx-auto px-6 py-28"
        >
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">
                    Let's
                    <span className="text-cyan-400">
                        {" "}
                        Connect
                    </span>
                </h2>

                <p className="text-gray-400 mt-4">
                    Interested in working together?
                    Send me a message.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* LEFT SIDE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8"
                >
                    <h3 className="text-3xl font-bold mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-cyan-400 text-xl" />
                            <span>
                                yourmail@gmail.com
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhone className="text-cyan-400 text-xl" />
                            <span>
                                +91 XXXXX XXXXX
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-5 mt-10">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub
                                size={28}
                                className="hover:text-cyan-400 transition"
                            />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin
                                size={28}
                                className="hover:text-cyan-400 transition"
                            />
                        </a>
                    </div>

                    <div className="mt-12">
                        <h4 className="text-xl font-semibold mb-4">
                            Why Hire Me?
                        </h4>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                ✔ Full Stack Development
                            </li>
                            <li>
                                ✔ AI Integrations
                            </li>
                            <li>
                                ✔ Docker & CI/CD
                            </li>
                            <li>
                                ✔ REST APIs
                            </li>
                            <li>
                                ✔ Cloud Deployments
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.form
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    onSubmit={handleSubmit}
                    className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 space-y-5"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    />

                    <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    >
                        <option value="">
                            Reason for Contact
                        </option>

                        <option value="Job Opportunity">
                            Job Opportunity
                        </option>

                        <option value="Freelance Project">
                            Freelance Project
                        </option>

                        <option value="Partnership">
                            Partnership
                        </option>

                        <option value="Consultation">
                            Consultation
                        </option>
                    </select>

                    <textarea
                        rows={6}
                        name="message"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
                    >
                        {loading
                            ? "Sending..."
                            : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;