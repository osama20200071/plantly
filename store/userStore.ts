import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type userState = {
  hasFinishedOnBoarding: boolean;
  toggle: () => void;
};

export const useUserStore = create(
  persist<userState>(
    (set) => ({
      hasFinishedOnBoarding: false,
      toggle: () =>
        set((state) => ({
          hasFinishedOnBoarding: !state.hasFinishedOnBoarding,
        })),
    }),
    {
      name: "planty-user-store", // this is like the storage key we used before
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

// the persist => takes the store and config obj
