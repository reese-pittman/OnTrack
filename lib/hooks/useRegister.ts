import { useState } from "react";
import { useRouter } from "next/navigation";

export function useRegister() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Registration failed");
                setLoading(false);
                return;
            }

            router.push("/dashboard");
            router.refresh();

        } catch (err) {
            setError("Something went wrong. Please try again.");
            setLoading(false);

        }
        

    }
    return {
        email,
        password,
        error,
        loading,
        name,
        setName,
        setEmail,
        setPassword,
        setError,
        setLoading,
        register,
    }


}