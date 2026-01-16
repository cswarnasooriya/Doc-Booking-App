import { useState } from "react";

export default function BookingModal({ doctor, onClose }: any) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking payload:", {
      doctor,
      selectedDate,
      selectedTime,
    });
    alert("Fake booking submitted! (Backend later)");
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-xl space-y-4">

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Book Appointment with {doctor.name}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Select Date</label>
            <input
              type="date"
              className="
                mt-1 w-full rounded-lg px-3 py-2
                border border-gray-300 dark:border-gray-700
                bg-gray-50 dark:bg-gray-900
                text-gray-900 dark:text-gray-100
              "
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          {/* Time Slots */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Select Time Slot
            </label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`
                    px-2 py-1 rounded-md text-sm
                    border 
                    ${selectedTime === slot
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900"
                    }
                  `}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="
              w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700
              text-white font-medium transition
            "
          >
            Confirm Booking
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
