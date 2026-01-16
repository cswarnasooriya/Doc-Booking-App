import { create } from "zustand";

interface AuthState {
  role: string | null;
  isLoggedIn: boolean;
  login: (role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  role: null,
  isLoggedIn: false,

  login: (role) => set({ role, isLoggedIn: true }),

  logout: () => set({ role: null, isLoggedIn: false }),
}));
