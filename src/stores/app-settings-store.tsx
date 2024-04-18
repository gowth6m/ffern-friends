import AppConfig from "@/configs/app-config";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AppSettingState = {
  devMode: boolean;
};

export const useAppSettingsStore = create<AppSettingState>()(
  persist(
    (_) => ({
      devMode: true,
    }),
    {
      name: AppConfig.localStorageKeys.settings,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
