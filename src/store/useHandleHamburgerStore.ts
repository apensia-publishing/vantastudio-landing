import { create } from "zustand";

type HamburgerMenuState = {
  hamburgerOpen: boolean;
  setHamburgerOpen: (hamburgerOpen: boolean) => void;
};

const useHandleHamburgerStore = create<HamburgerMenuState>((set) => ({
  hamburgerOpen: false,
  setHamburgerOpen: () =>
    set((state) => ({ hamburgerOpen: !state.hamburgerOpen })),
}));

export default useHandleHamburgerStore;
