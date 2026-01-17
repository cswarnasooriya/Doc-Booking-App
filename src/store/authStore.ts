import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  role: string | null;
  isLoggedIn: boolean;
  login: (token: string, role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  role: null,
  isLoggedIn: false,

  login: (token, role) =>
    set({ accessToken: token, role, isLoggedIn: true }),

  logout: () =>
    set({ accessToken: null, role: null, isLoggedIn: false }),
}));
