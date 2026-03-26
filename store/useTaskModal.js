import { create } from "zustand";

const useTaskModal = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useTaskModal;