import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getBasicUrl from "../utils/getBasicUrl";

const AdminLogin = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);

        try {
            const response = await axios.post(
                `${getBasicUrl()}/api/auth/admin`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const auth = response.data;
            console.log(auth);
            if (auth.token) {
                localStorage.setItem("token", auth.token);
                setTimeout(() => {
                    localStorage.removeItem("token");
                    alert("Token has been expired, please login again");
                    navigate("/");
                }, 3600 * 1000);
            }

            alert("Admin login successful");
            navigate("/dashboard");
        } catch (error) {
            setMessage("Please provide a correct email and password");
            console.error(error);
        }
    };
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <h2 className="text-xl font-semibold mb-4 ">
                    Admin Dashboard login
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 "
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            {...register("username", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-current "
                            id="username"
                            name="username"
                            type="text"
                            placeholder="username"
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
                        <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-5 text-center text-gray-500 text-sm">
                    ©2025 Book Store. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
