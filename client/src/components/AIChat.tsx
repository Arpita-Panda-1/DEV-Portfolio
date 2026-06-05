import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaRobot, FaTimes } from "react-icons/fa";
import API_URL from "../config/api";

interface Message {
    sender: string;
    text: string;
}

const AIChat = () => {
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "ai",
            text: "Hi 👋 Ask me anything about this developer.",
        },
    ]);

    const [input, setInput] = useState("");

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            sender: "user",
            text: input,
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentInput = input;

        setInput("");

        try {
            setLoading(true);

            const response = await axios.post(
                `${API_URL}/api/ai`,
                {
                    message: currentInput,
                }
            );

            const aiMessage = {
                sender: "ai",
                text: response.data.reply,
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "Something went wrong.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 bg-primary text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50"
            >
                {open ? <FaTimes /> : <FaRobot />}
            </button>

            {open && (
                <div className="fixed bottom-24 right-5 w-[95%] md:w-[350px] h-[500px] bg-card border border-gray-800 rounded-2xl flex flex-col overflow-hidden z-50">
                    <div className="bg-black p-4 border-b border-gray-800">
                        <h2 className="font-bold text-primary">
                            AI Assistant
                        </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] p-3 rounded-xl ${msg.sender === "user"
                                    ? "bg-primary text-black ml-auto"
                                    : "bg-black text-white"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="bg-black p-3 rounded-xl w-fit">
                                Typing...
                            </div>
                        )}

                        <div ref={chatEndRef}></div>
                    </div>

                    <div className="p-4 border-t border-gray-800 flex gap-2">
                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            className="flex-1 bg-black border border-gray-700 rounded-xl px-4"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-primary text-black px-5 rounded-xl font-bold"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;