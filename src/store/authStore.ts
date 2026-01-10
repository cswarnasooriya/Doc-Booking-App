import { create } from "zustand";

type UserRole = "doctor" | "patient" | "admin";

interface AuthState {
  user: null | { role: UserRole; name: string };
  login: (role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (role) => set({ user: { role, name: "Kamal Silva" } }),
  logout: () => set({ user: null }),
}));
 