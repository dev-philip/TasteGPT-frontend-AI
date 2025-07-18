import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { mockLogin } from "@/api/auth/login";
import type { AuthActions, AuthState } from "../types/store";
import { google_login } from "@/api/auth/google-login";

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });

          // TODO replace with actual authentication
          const response = await mockLogin(email, password);

          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Login failed",
            isLoading: false,
          });
        }
      },

      googleLogin: async (code: string) => {
        try {
          set({ isLoading: true, error: null });
          const response = await google_login({ code });
          console.log("Response from Google Login API:", response);
           console.log("james:", response.user_info);

          set({
            user: response.user_info,
            token: response.access_token,
            isAuthenticated: true,
            isLoading: false,
          });

          console.log("set login state");
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : "Google login failed",
            isLoading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        console.log("I am logging out");
      },

      setUser: (user) => set({ user }),

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", // LocalStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

console.log("Store created:", useAuthStore);
