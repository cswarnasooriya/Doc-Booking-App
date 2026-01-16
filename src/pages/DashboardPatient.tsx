import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardPatient() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Patient Dashboard</h1>
      <p>Here you will see doctors, appointments, and booking history.</p>
    </DashboardLayout>
  );
}
