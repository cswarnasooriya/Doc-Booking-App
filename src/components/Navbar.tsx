import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const theme = useThemeStore(s => s.theme);
  const toggleTheme = useThemeStore(s => s.toggleTheme);

  const linkBase = "px-3 py-2 text-sm font-medium transition";
  const linkActive = "text-blue-600 dark:text-blue-400";
  const linkInactive = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100";

  return (
    <header className="
      sticky top-0 z-50 w-full
      border-b border-gray-200 dark:border-gray-800
      bg-white/70 dark:bg-gray-900/90 backdrop-blur-md
    ">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <span className="font-semibold text-xl tracking-tight text-blue-600 dark:text-blue-400">
            Doctor Booking
          </span>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register-patient"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Register Patient
            </NavLink>

            <NavLink
              to="/register-doctor"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Register Doctor
            </NavLink>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
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
            {theme === "light" ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5"/>}
          </button>
        </div>

      </nav>
    </header>
  );
}
