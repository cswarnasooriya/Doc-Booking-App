import { useState } from "react";

export default function RegisterPatient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient Register Payload:", form);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm space-y-6">
        
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Register as Patient
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Create your account to start booking appointments.
          </p>
        </div>

        <form className="space-y-4" onSubmit={submit}>
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              name="name"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
