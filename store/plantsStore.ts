import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as FileStorage from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  imageUri?: string;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    imageUri: string,
  ) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: async (
        name: string,
        wateringFrequencyDays: number,
        imageUri: string,
      ) => {
        const savedImageUri =
          FileStorage.documentDirectory +
          `${new Date().getTime()}-${imageUri.split("/").at(-1)}`;

        if (imageUri) {
          await FileStorage.copyAsync({
            from: imageUri,
            to: savedImageUri,
          });
        }

        set((state) => ({
          nextId: state.nextId + 1,
          plants: [
            {
              id: String(state.nextId),
              name,
              wateringFrequencyDays,
              imageUri: imageUri ? savedImageUri : undefined,
            },
            ...state.plants,
          ],
        }));
      },
      removePlant: (plantId: string) => {
        set((state) => ({
          plants: state.plants.filter((plant) => plant.id !== plantId),
        }));
      },

      waterPlant: (plantId: string) => {
        set((state) => ({
          plants: state.plants.map((plant) => {
            if (plant.id === plantId) {
              return {
                ...plant,
                lastWateredAtTimestamp: Date.now(),
              };
            }
            return plant;
          }),
        }));
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
