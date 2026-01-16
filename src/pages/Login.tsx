import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const login = useAuthStore(s => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    login(role); // save fake login state
    if (role === "patient") navigate("/dashboard/patient");
    if (role === "doctor") navigate("/dashboard/doctor");
    if (role === "admin") navigate("/dashboard/admin");

    e.preventDefault();
    console.log("Login payload:", { email, password });
    // later: call backend
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm space-y-6">

        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Login
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sign in using your email and password.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="
                w-full rounded-lg px-3 py-2
                border border-gray-300 dark:border-gray-700
                bg-gray-50 dark:bg-gray-900
                text-gray-900 dark:text-gray-100
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              className="
                w-full rounded-lg px-3 py-2
                border border-gray-300 dark:border-gray-700
                bg-gray-50 dark:bg-gray-900
                text-gray-900 dark:text-gray-100
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full py-2 rounded-lg
              bg-blue-600 hover:bg-blue-700
              text-white font-medium
              transition
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
