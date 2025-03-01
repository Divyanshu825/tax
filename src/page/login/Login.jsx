import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import img from '../../Images/Tax.webp'
export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data: ", formData);
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center p-8"
            style={{ backgroundImage: `url(${img})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-12 rounded-2xl shadow-xl max-w-xl w-full text-center bg-white bg-opacity-30 backdrop-blur-md"
            >
                <h2 className="text-4xl font-bold text-gray-700 mb-10">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-5 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-5 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
                        </span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white p-5 rounded-lg font-bold text-xl"
                    >
                        Login
                    </motion.button>
                    <p className="text-lg text-gray-600 mt-4">
                        Don't have an account? <a href="/signup" className="text-blue-500 font-bold">Sign Up</a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
