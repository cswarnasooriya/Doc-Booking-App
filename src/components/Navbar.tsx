import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore.ts";

export default function Navbar() {
  const { user } = useAuthStore(); // check auth state

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <Link to="/" className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
        Doctor Booking
      </Link>

      <div className="flex items-center gap-4">
        {!user && (
          <>
            <Link to="/login" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
              Login
            </Link>
            <Link
              to="/register-patient"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              Register Patient
            </Link>
            <Link
              to="/register-doctor"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              Register Doctor
            </Link>
          </>
        )}

        {user && (
          <Link
            to={`/dashboard/${user.role}`}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}
