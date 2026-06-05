import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (
        e: React.SubmitEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                formData
            );

            localStorage.setItem(
                "portfolioToken",
                response.data.token
            );

            navigate("/portfolio");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark px-5">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card w-full max-w-md rounded-2xl p-8 shadow-2xl"
            >
                <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                    Developer Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />

                    <button className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:scale-105 transition-all">
                        Login
                    </button>
                </form>

                <div className="mt-6 text-gray-400 text-sm">
                    <p>Email: admin@gmail.com</p>
                    <p>Password: admin123</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;