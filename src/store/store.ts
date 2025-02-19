import { create } from "zustand";

type SubType = {
  otp: boolean;
  single: boolean;
  setOtp: (bol: boolean) => void;
  setSingle: (bol: boolean) => void;
};

export const useStore = create<SubType>()((set) => ({
  otp: true,
  single: false,
  setOtp: (bol) => set(() => ({ otp: bol, single: false })),
  setSingle: (bol) => set(() => ({ single: bol, otp: false })),
}));
