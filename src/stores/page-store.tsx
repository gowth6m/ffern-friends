"use client";

import { create } from "zustand";

interface PageState {
  isLoading: boolean;
  isError: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
}

const usePageStore = create<PageState>((set) => ({
  isLoading: true,
  isError: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setIsError: (isError: boolean) => set(() => ({ isError })),
}));

export default usePageStore;
