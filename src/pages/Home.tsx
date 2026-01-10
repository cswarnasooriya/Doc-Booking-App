import { useAuthStore } from "../store/authStore";

const Home = () => {const login = useAuthStore((s) => s.login);

  return (
    <div className="p-6">
      <h1>Home Page</h1>
      <button
        onClick={() => login("doctor")}
        className="px-3 py-1 mt-4 bg-indigo-600 text-white rounded"
      >
        Fake Login as Doctor
      </button>
    </div>
  );
}

export default Home