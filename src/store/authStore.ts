import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  role: null,
  isLoggedIn: false,
  

  login: (token, role) => {
    set({ accessToken: token, role, isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    set({ accessToken: null, role: null, isLoggedIn: false });
  },

  rehydrate: () => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    if (token && role) {
      set({ accessToken: token, role, isLoggedIn: true });
    }
  }
}));
