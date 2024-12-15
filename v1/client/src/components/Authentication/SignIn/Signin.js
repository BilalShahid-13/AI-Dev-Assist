import React, { useState } from "react";
import { Password, Button, Input } from "rizzui";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignIn = () => {
        let valid = true;

        if (!password) {
            setPasswordError('Password is required.');
            valid = false;
        }
        else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            valid = false;
        }
        else {
            setPasswordError('');
        }

        if (!email) {
            setEmailError('Email is required.');
            valid = false;
        }
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            setEmailError('Please enter a valid email.');
            valid = false;
        }
        else {
            setEmailError('');
        }

        if (email.trim() && password.trim()) {
            console.log("Email:", email, "Password:", password);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError && e.target.value.trim()) {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError && e.target.value.trim()) {
            setPasswordError("");
        }
    };

    return (
        <>
            <div className="font-[sans-serif] dark">
                <div className="min-h-screen flex flex-col items-center justify-center bg-black">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        {/* Form Section */}
                        <div className="md:max-w-md w-full px-4 py-4 bg-gray-900 rounded-lg">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-12">
                                    <h3 className="text-white text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-sm mt-4 text-gray-400">
                                        Don't have an account?
                                        <Link
                                            to="/signup"
                                            className="text-blue-500 font-semibold hover:underline ml-1 whitespace-nowrap"
                                        >
                                            Register here
                                        </Link>
                                    </p>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="text-gray-400 text-xs block mb-2">Email</label>
                                    <div className="relative flex items-center">
                                        <Input
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder="Enter your Email"
                                            variant="text"
                                            className={`w-full text-white bg-transparent text-sm border-b ${emailError ? "border-red-500" : "border-gray-500"
                                                } focus:border-blue-500 outline-none`}
                                        />
                                    </div>
                                    {emailError && (
                                        <div className="mt-1 text-red-500 text-xs">{emailError}</div>
                                    )}
                                </div>


                                {/* Password Field */}
                                <div className="mt-8">
                                    <label className="text-gray-400 text-xs block mb-2">Password</label>
                                    <Password
                                        placeholder="Enter your password"
                                        variant="text"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className={`w-full text-white bg-transparent text-sm outline-none border-b ${passwordError ? "border-red-500" : "border-gray-500"
                                            } focus:border-blue-500`}
                                    />
                                    {passwordError && (
                                        <div className="mt-1 text-red-500 text-xs">{passwordError}</div>
                                    )}
                                </div>

                                {/* Remember Me and Forgot Password */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 shrink-0 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-3 block text-sm text-gray-400"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a
                                            href="/"
                                            className="text-blue-500 font-semibold text-sm hover:underline"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>

                                {/* Sign In Button */}
                                <div className="mt-12">
                                    <Button
                                        type="button"
                                        onClick={handleSignIn}
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        Sign in
                                    </Button>
                                </div>

                                {/* Social Media Buttons */}
                                <div className="mt-4">
                                    <Button
                                        className="group flex items-center space-x-2 text-white w-full shadow-2xl text-sm tracking-wide rounded-md border-none bg-gray-800"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaGoogle
                                            className="text-red-500 group-hover:text-green-500 transition duration-300"
                                        />
                                        <span>Signin with Google</span>
                                    </Button>

                                    <Button
                                        className="group flex items-center space-x-2 text-white w-full shadow-2xl text-sm tracking-wide rounded-md border-none bg-gray-800 mt-2"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaFacebook
                                            className="text-blue-500 group-hover:text-pink-500 transition duration-300"
                                        />
                                        <span>Signin with Facebook</span>
                                    </Button>
                                </div>


                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="md:h-full bg-[#111827] rounded-xl lg:p-12 p-8">
                            <img
                                src="https://readymadeui.com/signin-image.webp"
                                className="w-full h-full object-contain"
                                alt="login-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
