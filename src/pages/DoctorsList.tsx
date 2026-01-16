import { useState } from "react";
import BookingModal from "../components/BookingModal";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DoctorsList() {
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);


    const fakeDoctors = [
        {
            id: 1,
            name: "Dr. Aravinda Perera",
            specialization: "Cardiology",
            experience: 8,
        },
        {
            id: 2,
            name: "Dr. Nadeesha Silva",
            specialization: "Dermatology",
            experience: 5,
        },
        {
            id: 3,
            name: "Dr. Dilshan Fernando",
            specialization: "Neurology",
            experience: 10,
        },
    ];

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-semibold mb-6">Find Doctors</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fakeDoctors.map((doc) => (
                    <div
                        key={doc.id}
                        className="
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-xl shadow-sm p-5 space-y-2
            "
                    >
                        {/* Placeholder for profile image */}
                        <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-lg" />

                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {doc.name}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400">
                            Specialization: <span className="font-medium">{doc.specialization}</span>
                        </p>

                        <p className="text-gray-600 dark:text-gray-400">
                            Experience: {doc.experience} years
                        </p>

                        <button
                            onClick={() => setSelectedDoctor(doc)}
                            className="w-full mt-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                        >
                            Book Appointment
                        </button>

                    </div>
                ))}
            </div>

            {/* Booking Modal */}
            {selectedDoctor && (
                <BookingModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                />
            )}

        </DashboardLayout>
    );
}
