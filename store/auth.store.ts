import { authState, user } from "@/type";
import { create } from "zustand";
import { gerCurrentUser } from "@/lib/appwrite";

const useAuthStore = create<authState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),
  setIsLoading: (value) => set({ isLoading: value }),
  fecthAuthenticatedUser: async () => {
    set({ isLoading: true });
    try {
      const user = await gerCurrentUser();
      if (user) set({ isAuthenticated: true, user: user as user });
      else set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.log(error);
      set({ isAuthenticated: false, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
