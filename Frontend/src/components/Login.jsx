import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mern-notes-backend-5z2j.onrender.com/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            alert(`Welcome back, ${res.data.username}!`);
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
