import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ModelStore = {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
};

export const useModelStore = create<ModelStore>()(
  persist(
    (set) => ({
      selectedModel: "gpt-4",
      setSelectedModel: (model) => set({ selectedModel: model }),
    }),
    {
      name: 'model-storage', // localStorage key
    }
  )
);