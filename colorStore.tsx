import create from "zustand";

interface ColorState {
  color1: String;
  color2: String;
  setColor1: (color: String) => void;
  setColor2: (color: String) => void;
}

const useColorStore = create<ColorState>((set) => ({
  color1: "#FF7F50",
  color2: "#000000",
  setColor1: (color) => set(() => ({ color1: color })),
  setColor2: (color) => set(() => ({ color2: color })),
}));

export default useColorStore;
