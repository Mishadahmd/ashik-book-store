import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const handleGoogleSignIn = () => {};
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <h2 className="text-xl font-semibold mb-4 ">Please Register</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 "
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-current "
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 "
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-current "
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    {/* {errors.exampleRequired && (
                <span>This field is required</span>
            )} */}
                    {message && (
                        <p className="text-red-500 text-sm italic mb-3 ">
                            {message}
                        </p>
                    )}

                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ">
                            Register
                        </button>
                    </div>
                </form>
                <p className="align-baseline font-medium tex-sm my-4 ">
                    Haven an account? Please{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Login
                    </Link>
                </p>

                {/* google sign in */}
                <div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex flex-wrap gap-1 justify-center items-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                </div>

                <p className="mt-5 text-center text-gray-500 text-sm">
                    ©2025 Book Store. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Register;
