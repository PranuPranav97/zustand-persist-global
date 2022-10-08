import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface AppStore {
  data?: Object;
  setData?: (value: Object) => void;
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        data: { name: "Pranav" },
        setData: (value: Object) => {
          set((state: any) => (state.data = value));
        },
      }),
      {
        name: "appCtx",
      }
    )
  )
);
