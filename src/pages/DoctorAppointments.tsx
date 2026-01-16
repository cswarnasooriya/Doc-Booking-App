import DashboardLayout from "../layouts/DashboardLayout";

export default function DoctorAppointments() {

  const fakeAppointments = [
    {
      id: 1,
      patient: "Sandaruwan",
      date: "2025-01-21",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Nimal",
      date: "2025-01-23",
      time: "03:00 PM",
      status: "pending",
    },
    {
      id: 3,
      patient: "Kavindu",
      date: "2025-01-15",
      time: "11:30 AM",
      status: "completed",
    },
  ];

  const badgeColor = (s: string) => {
    switch (s) {
      case "pending": return "bg-yellow-500";
      case "confirmed": return "bg-blue-600";
      case "completed": return "bg-green-600";
      case "canceled": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Appointments</h1>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700">
              <th className="py-2">Patient</th>
              <th className="py-2">Date</th>
              <th className="py-2">Time</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeAppointments.map(a => (
              <tr
                key={a.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-2 text-gray-900 dark:text-gray-100">{a.patient}</td>
                <td className="py-2">{a.date}</td>
                <td className="py-2">{a.time}</td>
                <td className="py-2">
                  <span className={`text-xs px-2 py-1 rounded-lg text-white ${badgeColor(a.status)}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-3">
        {fakeAppointments.map(a => (
          <div
            key={a.id}
            className="
              border border-gray-200 dark:border-gray-700
              rounded-xl p-4
              bg-white dark:bg-gray-800
            "
          >
            <p className="font-semibold">{a.patient}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{a.date} — {a.time}</p>
            <span className={`text-xs px-2 py-1 rounded-lg text-white ${badgeColor(a.status)}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
