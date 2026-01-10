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




function App() {
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;

