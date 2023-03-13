import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const useAuthStore = create(
  //NOS PERMITE GUARDAR DATOS PREDETERMINADOS EN EL SESSIONSTORAGE
  persist(
    (set) => ({
      setToken: (token) =>
        set((state) => ({
          token,
        })),
      profile: null,
      setProfile: (profile) =>
        set((state) => ({
          profile,
        })),
      logOut: (token, profile) =>
        set((state) => ({
          token,
          profile,
        })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
