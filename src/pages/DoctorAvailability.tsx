import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DoctorAvailability() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [saved, setSaved] = useState<any[]>([]);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const toggleSlot = (slot: string) => {
    setSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot]
    );
  };

  const saveAvailability = () => {
    if (!date || slots.length === 0) return alert("Pick date + slots");
    
    setSaved([...saved, { date, slots }]);

    // reset UI
    setDate("");
    setSlots([]);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Set Availability</h1>

      <div className="space-y-6">

        {/* Date */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300">
            Select Date
          </label>
          <input
            type="date"
            className="
              mt-1 w-full sm:w-64 rounded-lg px-3 py-2
              border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-900
              text-gray-900 dark:text-gray-100
            "
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Slots */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300">
            Select Slots
          </label>

          <div className="flex gap-2 mt-2 flex-wrap">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => toggleSlot(slot)}
                className={`
                  px-3 py-1 rounded-lg text-sm border
                  ${slots.includes(slot)
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition"
          onClick={saveAvailability}
        >
          Save Availability
        </button>
      </div>

      {/* Saved Section */}
      {saved.length > 0 && (
        <div className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">Upcoming Availability</h2>

          {saved.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <p className="font-medium">{item.date}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Slots: {item.slots.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}
