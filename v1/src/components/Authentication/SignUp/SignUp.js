import React, { useState } from 'react'
import { Input, Button, Password } from 'rizzui';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (nameError && e.target.value.trim()) {
            setNameError("");
        }
    }

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

    const handleSignUp = () => {
        let valid = true;

        if (!name) {
            setNameError('Name is required.');
            valid = false;
        }
        else {
            setNameError('');
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

        if (valid) {
            console.log('Name:', name, 'Email:', email, 'Password:', password);
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
                                <div className="mb-8">
                                    <h3 className="text-white text-3xl font-extrabold">Sign Up</h3>
                                    <p className="text-sm mt-4 text-gray-400">
                                        Already have an account?{' '}
                                        <Link
                                            to="/"
                                            className="text-blue-500 font-semibold hover:underline ml-1 whitespace-nowrap"
                                        >
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>

                                {/* Name Field */}
                                <div>
                                    <label className="text-gray-400 text-xs block">Full Name</label>
                                    <div className="relative flex items-center">
                                        <Input
                                            value={name}
                                            onChange={handleNameChange}
                                            placeholder="Enter your full name"
                                            variant="text"
                                            className={`w-full text-white bg-transparent text-sm border-b ${nameError ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none`}
                                        />
                                    </div>
                                    {nameError && <div className="mt-1 text-red-500 text-xs">{nameError}</div>}
                                </div>

                                {/* Email Field */}
                                <div className="mt-6">
                                    <label className="text-gray-400 text-xs block mb-2">Email</label>
                                    <div className="relative flex items-center">
                                        <Input
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder="Enter your Email"
                                            variant="text"
                                            className={`w-full text-white bg-transparent text-sm border-b ${emailError ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none`}
                                        />
                                    </div>
                                    {emailError && <div className="mt-1 text-red-500 text-xs">{emailError}</div>}
                                </div>

                                {/* Password Field */}
                                <div className="mt-6">
                                    <label className="text-gray-400 text-xs block mb-2">Password</label>
                                    <Password
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="Enter your password"
                                        variant="text"
                                        className={`w-full text-white bg-transparent text-sm outline-none border-b ${passwordError ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500`}
                                    />
                                    {passwordError && <div className="mt-1 text-red-500 text-xs">{passwordError}</div>}
                                </div>

                                {/* Sign Up Button */}
                                <div className="mt-8">
                                    <Button
                                        type="button"
                                        onClick={handleSignUp}
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        Sign Up
                                    </Button>
                                </div>

                                {/* Social Media Buttons */}
                                <div className="mt-2">
                                    <Button
                                        className="group flex items-center space-x-2 text-white w-full shadow-2xl text-sm tracking-wide rounded-md border-none bg-gray-800"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaGoogle className="text-red-500 group-hover:text-green-500 transition duration-300" />
                                        <span>Signup with Google</span>
                                    </Button>

                                    <Button
                                        className="group flex items-center space-x-2 text-white w-full shadow-2xl text-sm tracking-wide rounded-md border-none bg-gray-800 mt-2"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaFacebook className="text-blue-500 group-hover:text-pink-500 transition duration-300" />
                                        <span>Signup with Facebook</span>
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="md:h-full bg-[#111827] rounded-xl lg:p-12 p-8">
                            <img
                                src="https://readymadeui.com/signin-image.webp"
                                className="w-full h-full object-contain"
                                alt="signup-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
