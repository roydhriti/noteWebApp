import { useEffect, useState } from "react";
import { userSchema, UserSchema } from "../validators/user-schema";
import { fetchUserAPI } from "../service/user-service";


const ProfilePage = () => {
    const [user, setUser] = useState<UserSchema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUserAPI();
                const parsed = userSchema.parse(data.user);
                setUser(parsed);
            } catch (err: any) {
                setError("Failed to load user profile");
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p><strong>Name:</strong> {user?.user_name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
        </div>
    );
};

export default ProfilePage;
