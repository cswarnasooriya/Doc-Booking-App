import { useEffect, useState } from "react";
import api from "../lib/api";
import DashboardLayout from "../layouts/DashboardLayout";

interface Doctor {
  _id: string;
  name: string;
  gender: string;
  phone: string;
  email: string;
  specialization: string;
  experience: number;
  status: string;
}

export default function AdminModeration() {
  const [pendingDoctors, setPendingDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPending = async () => {
    try {
      const res = await api.get("/admin/doctors/pending");
      setPendingDoctors(res.data);
    } catch (err) {
      alert("Failed to fetch pending doctors here");
    } finally {
      setLoading(false);
    }
  };

  const approve = async (id: string) => {
    try {
      await api.post(`/admin/doctors/approve/${id}`);
      alert("Doctor approved!");
      loadPending(); // refresh
    } catch {
      alert("Approval failed");
    }
  };

  const reject = async (id: string) => {
    try {
      await api.post(`/admin/doctors/reject/${id}`);
      alert("Doctor rejected!");
      loadPending(); // refresh
    } catch {
      alert("Rejection failed");
    }
  };

  useEffect(() => {
    loadPending();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Doctor Verification</h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading pending doctors...</p>
      ) : pendingDoctors.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No pending doctors 🎉</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingDoctors.map((doc) => (
            <div
              key={doc._id}
              className="
                p-5 rounded-xl 
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-sm space-y-2
              "
            >
              <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-lg" />

              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {doc.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                {doc.specialization} — {doc.experience} yrs
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {doc.email}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {doc.phone} — {doc.gender}
              </p>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => approve(doc._id)}
                  className="flex-1 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => reject(doc._id)}
                  className="flex-1 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}
