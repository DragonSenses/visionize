import { create } from 'zustand';

// Define the shape of the store state
type UpgradeModalStore = {
  isOpen: boolean; // Indicates whether the modal is open
  onOpen: () => void; // Function to open the modal
  onClose: () => void; // Function to close the modal
};

// Create the Zustand store for the upgrade modal
export const useUpgradeModal = create<UpgradeModalStore>()((set) => ({
  isOpen: false, // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }), // Set isOpen to true (open modal)
  onClose: () => set({ isOpen: false }), // Set isOpen to false (close modal)
}));
