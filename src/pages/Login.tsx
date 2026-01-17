import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { useAuthStore } from "../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const loginStore = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // Save token + role in Zustand state
      loginStore.login(res.data.accessToken, res.data.role);

      // Role-based routing
      switch (res.data.role) {
        case "patient":
          navigate("/dashboard/patient");
          break;
        case "doctor":
          navigate("/dashboard/doctor");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
      }
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Login failed";
      alert(msg);
    }
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
