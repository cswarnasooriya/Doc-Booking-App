export default function Home() {
  return (
    <main
      className="
        min-h-[calc(100vh-64px)]
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        p-10
      "
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome 👋
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          This platform helps patients connect with doctors and schedule appointments easily.
        </p>

        <div className="
          rounded-xl
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          p-6
          shadow-sm
        ">
          <h2 className="text-2xl font-semibold">
            Book Appointments Effortlessly
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover verified doctors, check availability, and schedule your visit with a few clicks.
          </p>
        </div>
      </div>
    </main>
  );
}
