import { create } from 'zustand';

type UpgradeModalStore = {
  isOpen: boolean;
};

export const useUpgradeModal = create<UpgradeModalStore>()((set) => ({
  isOpen: false
}));
