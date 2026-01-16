import { create } from "zustand";

type Theme = "light" | "dark";

export const useThemeStore = create<{
  theme: Theme;
  setTheme: (v: Theme) => void;
  toggleTheme: () => void;
}>((set, get) => ({
  theme: (localStorage.getItem("theme") as Theme) || "light",

  setTheme: (v) => {
    localStorage.setItem("theme", v);
    set({ theme: v });
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    set({ theme: next });
  },
}));
