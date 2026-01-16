import { NavLink } from "react-router-dom";

const linkBase =
    "block px-4 py-2 rounded-md text-sm font-medium transition";
const active =
    "bg-blue-600 text-white dark:bg-blue-500";
const inactive =
    "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800";

export default function DashboardSidebar() {
    return (
        <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 space-y-2">
            <NavLink to="/dashboard/patient" className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
            }>
                Patient Dashboard
                <NavLink
                    to="/dashboard/patient/doctors"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? active : inactive}`
                    }
                >
                    Doctors List
                </NavLink>

            </NavLink>

{/* //doctors */}


            <NavLink to="/dashboard/doctor" className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
            }>
                Doctor Dashboard
            </NavLink>




{/* 
//admin */}
            <NavLink to="/dashboard/admin" className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
            }>
                Admin Dashboard
            </NavLink>
        </aside>
    );
}
