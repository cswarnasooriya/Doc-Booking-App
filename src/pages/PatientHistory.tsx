import DashboardLayout from "../layouts/DashboardLayout";

export default function PatientHistory() {
  const fakeBookings = [
    {
      id: 1,
      doctor: "Dr. Aravinda Perera",
      specialization: "Cardiology",
      date: "2025-01-20",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Nadeesha Silva",
      specialization: "Dermatology",
      date: "2025-01-23",
      time: "02:00 PM",
      status: "pending",
    },
    {
      id: 3,
      doctor: "Dr. Dilshan Fernando",
      specialization: "Neurology",
      date: "2025-01-10",
      time: "11:00 AM",
      status: "completed",
    },
  ];

  const statusColor = (s: string) => {
    switch (s) {
      case "pending":
        return "bg-yellow-500";
      case "confirmed":
        return "bg-blue-600";
      case "completed":
        return "bg-green-600";
      case "canceled":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Appointment History</h1>

      <div className="space-y-4">
        {fakeBookings.map((b) => (
          <div
            key={b.id}
            className="
              border border-gray-200 dark:border-gray-700
              rounded-xl p-4 
              bg-white dark:bg-gray-800
            "
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                {b.doctor}
              </h2>

              <span
                className={`text-xs px-2 py-1 rounded-lg text-white ${statusColor(
                  b.status
                )}`}
              >
                {b.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {b.specialization}
            </p>

            <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              <p>Date: {b.date}</p>
              <p>Time: {b.time}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
