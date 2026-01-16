import type { ReactNode } from "react";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900">
      
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
}
