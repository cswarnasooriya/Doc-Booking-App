import { NavLink, useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "../store/authStore";

export default function Navbar() {
  const navigate = useNavigate();

  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const logout = useAuthStore((s) => s.logout);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  return (
    <header className="
      sticky top-0 z-50 w-full
      border-b border-gray-200 dark:border-gray-800
      bg-white/70 dark:bg-gray-900/90 backdrop-blur-md
    ">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <span
          onClick={() => navigate("/")}
          className="
            font-semibold text-xl tracking-tight text-blue-600 dark:text-blue-400
            cursor-pointer select-none
          "
        >
          Doctor Booking
        </span>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {!isLoggedIn && (
            <>
              <button
                onClick={() => navigate("/register-patient")}
                className="
                  text-sm px-3 py-1.5 rounded-md font-medium
                  border border-gray-300 dark:border-gray-700
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition
                "
              >
                Register Patient
              </button>

              <button
                onClick={() => navigate("/register-doctor")}
                className="
                  text-sm px-3 py-1.5 rounded-md font-medium
                  border border-gray-300 dark:border-gray-700
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition
                "
              >
                Register Doctor
              </button>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9 flex items-center justify-center rounded-lg
              border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-700 transition
            "
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="
                px-4 py-1.5 text-sm font-medium rounded-md
                bg-red-600 hover:bg-red-700 text-white shadow transition
              "
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="
                px-4 py-1.5 text-sm font-medium rounded-md
                bg-blue-600 hover:bg-blue-700 text-white shadow transition
              "
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
