import DashboardLayout from "../layouts/DashboardLayout";

export default function AdminModeration() {
  const pendingDoctors = [
    {
      id: 1,
      name: "Dr. Aravinda Perera",
      specialization: "Cardiology",
      experience: 8,
      status: "pending",
    },
    {
      id: 2,
      name: "Dr. Nadeesha Silva",
      specialization: "Dermatology",
      experience: 5,
      status: "pending",
    },
  ];

  const approve = (id: number) => {
    console.log("Approved doctor id:", id);
    alert("Fake: Doctor approved!");
  };

  const reject = (id: number) => {
    console.log("Rejected doctor id:", id);
    alert("Fake: Doctor rejected!");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Doctor Verification</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {pendingDoctors.map(doc => (
          <div
            key={doc.id}
            className="
              p-5 rounded-xl 
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              shadow-sm space-y-2
            "
          >
            {/* Photo Placeholder */}
            <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-lg" />

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {doc.name}
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              {doc.specialization} — {doc.experience} yrs
            </p>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => approve(doc.id)}
                className="flex-1 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm"
              >
                Approve
              </button>
              <button
                onClick={() => reject(doc.id)}
                className="flex-1 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
