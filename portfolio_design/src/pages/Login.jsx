import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function AuthForm() {
    // State to manage which form is displayed
    const [isLoginForm, setIsLoginForm] = useState(true);

    // Toggle the form
    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-16 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                {isLoginForm ? "Login" : "Register"}
            </h2>

            {isLoginForm ? (
                // Login form
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className=" w-full bg-[crimson] text-white py-2 rounded-[20px] hover:bg-[white] hover:text-[crimson] hover:border transition duration-200"
                    >
                        Login
                    </button>
                </form>
            ) : (
                // Registration form
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue text-white py-2 rounded-[20px] hover:bg-[white] hover:text-blue hover:border transition duration-200"
                    >
                        Register
                    </button>
                </form>
            )}

            <button
                onClick={toggleForm}
                className="mt-4 text-indigo-600 hover:text-indigo-800 underline w-full text-center"
            >
                {isLoginForm ? "Switch to Register" : "Switch to Login"}
            </button>
        </div>
    );
}

export default AuthForm;
