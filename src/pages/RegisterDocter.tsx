import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import api from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function RegisterDoctor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "male",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    experience: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register-doctor", {
        name: form.name,
        gender: form.gender,
        phone: form.phone,
        email: form.email,
        password: form.password,
        specialization: form.specialization,
        experience: Number(form.experience),
      });

      alert("Doctor registration submitted! Await admin approval.");
      navigate("/login");

    } catch (err: any) {
      alert(err?.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm space-y-6">

        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Register as Doctor
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Submit professional details for admin verification.
          </p>
        </div>

        <form className="space-y-4" onSubmit={submit}>

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              name="name"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          {/* GENDER */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Gender</label>
            <select
              name="gender"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              value={form.gender}
            >
              <option value="male" className="dark:bg-gray-900">Male</option>
              <option value="female" className="dark:bg-gray-900">Female</option>
            </select>
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Phone</label>
            <input
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
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

          {/* SPECIALIZATION */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Specialization</label>
            <select
              name="specialization"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            >
              <option value="" disabled className="dark:bg-gray-900">Select specialization</option>
              <option value="Cardiology" className="dark:bg-gray-900">Cardiology</option>
              <option value="Dermatology" className="dark:bg-gray-900">Dermatology</option>
              <option value="ENT" className="dark:bg-gray-900">ENT</option>
              <option value="Neurology" className="dark:bg-gray-900">Neurology</option>
              <option value="Orthopedics" className="dark:bg-gray-900">Orthopedics</option>
              <option value="Pediatrics" className="dark:bg-gray-900">Pediatrics</option>
              <option value="General Medicine" className="dark:bg-gray-900">General Medicine</option>
            </select>
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Experience (years)</label>
            <input
              name="experience"
              type="number"
              min="0"
              className="mt-1 w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="mt-1 w-full rounded-lg px-3 py-2 pr-10 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2 p-1 text-gray-600 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Confirm Password</label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                className="mt-1 w-full rounded-lg px-3 py-2 pr-10 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2 p-1 text-gray-600 dark:text-gray-300"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* NOTICE */}
          <p className="text-xs text-yellow-600 dark:text-yellow-400">
            ⚠ After registration, an admin must approve your profile before you can login.
          </p>

          {/* SUBMIT */}
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
