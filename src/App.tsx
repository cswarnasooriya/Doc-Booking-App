import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPatient from "./pages/RegisterPatient";
import DashboardDoctor from "./pages/DashboardDoctor";
import DashboardPatient from "./pages/DashboardPatient";
import DashboardAdmin from "./pages/DashboardAdmin";
import RegisterDocter from "./pages/RegisterDocter";



//import components
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";
import DoctorsList from "./pages/DoctorsList";
import DoctorAvailability from "./pages/DoctorAvailability";
import PatientHistory from "./pages/PatientHistory";
import AdminModeration from "./pages/AdminModeration";
import DoctorAppointments from "./pages/DoctorAppointments";





function App() {

  const theme = useThemeStore(s => s.theme);

  useEffect(() => {
    console.log("theme changed ->", theme);
  }, [theme]);

  document.documentElement.classList.toggle("dark", theme === "dark");



  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />


        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register-patient" element={<RegisterPatient />} />
        <Route path="/register-doctor" element={<RegisterDocter />} />

        {/* Dashboard */}
        <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard/patient" element={<DashboardPatient />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />

        <Route path="/dashboard/patient/doctors" element={<DoctorsList />} />
        <Route path="/dashboard/doctor/availability" element={<DoctorAvailability />} />
        <Route path="/dashboard/patient/history" element={<PatientHistory />} />
        <Route path="/dashboard/admin/moderation" element={<AdminModeration />} />
        <Route path="/dashboard/doctor/appointments" element={<DoctorAppointments />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

