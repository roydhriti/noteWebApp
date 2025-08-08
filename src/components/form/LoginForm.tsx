import { useState } from "react";
import { loginAPI } from "../../service/user-service";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const resp = await loginAPI(email, password);
            localStorage.setItem("access_token", resp.access_token);
            localStorage.setItem("me", JSON.stringify(resp.me));
            navigate("/note");
        } catch (err: any) {
            setError(err?.detail || err?.message || "Login failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-sm bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
                    />
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 disabled:opacity-60"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}