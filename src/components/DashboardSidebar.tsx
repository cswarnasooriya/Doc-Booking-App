import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Stethoscope,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";

const linkBase =
  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition";
const active =
  "bg-blue-600 text-white dark:bg-blue-500";
const inactive =
  "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800";

export default function DashboardSidebar() {
  return (
    <aside
      className="
        w-64 border-r border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-800 p-4 space-y-6
        min-h-[calc(100vh-64px)]
      "
    >


      {/* --- PATIENT SECTION --- */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1">
          Patient
        </p>

        <NavLink
          to="/dashboard/patient"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/patient/doctors"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <Stethoscope size={18} />
          Doctors
        </NavLink>

        <NavLink
          to="/dashboard/patient/history"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <CalendarClock size={18} />
          History
        </NavLink>
      </div>


      {/* --- DOCTOR SECTION --- */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1">
          Doctor
        </p>

        <NavLink
          to="/dashboard/doctor"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/doctor/availability"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <CalendarClock size={18} />
          Availability
        </NavLink>

        <NavLink
          to="/dashboard/doctor/appointments"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <Stethoscope size={18} />
          Appointments
        </NavLink>
      </div>


      {/* --- ADMIN SECTION --- */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1">
          Admin
        </p>

        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/admin/moderation"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <ShieldCheck size={18} />
          Moderation
        </NavLink>
      </div>
    </aside>
  );
}
