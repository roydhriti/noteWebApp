import React, { useState } from "react";
import { userSchema } from "../../validators/user-schema";
import { registerAPI } from "../../service/user-service";
import { useNavigate } from "react-router-dom";


const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const result = userSchema.safeParse(formData);
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        try {
            await registerAPI(formData);
            setSuccess("Registration successful!");
            navigate("/login")
        } catch (err: any) {
            setError(err.response?.data?.detail || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

                <label className="block mb-1 font-medium">Name</label>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full mb-3 focus:outline-none focus:ring focus:ring-blue-300"
                />

                <label className="block mb-1 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full mb-3 focus:outline-none focus:ring focus:ring-blue-300"
                />

                <label className="block mb-1 font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
