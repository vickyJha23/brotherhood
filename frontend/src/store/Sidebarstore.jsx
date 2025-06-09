import { create } from "zustand";

const useSidebarStore = create((set) => ({
      sidebarVisible: false,
      sideBarDropdown: '',
      showSidebar: () => {
        set({ sidebarVisible: true });
      },
      hideSidebar: () => {
        set({ sidebarVisible: false });
      },
      setSideBarDropdown: (value) => (set((state) => ({
        sideBarDropdown: value
      })))
}));

export default useSidebarStore;