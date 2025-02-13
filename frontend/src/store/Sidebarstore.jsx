import { create } from "zustand";

const useSidebarStore = create((set) => ({
      sidebarVisible: false,
      showSidebar: () => {
        console.log("Sidebar opened");
        set({ sidebarVisible: true });
      },
      hideSidebar: () => {
        console.log("Sidebar closed");
        set({ sidebarVisible: false });
      },
}));

export default useSidebarStore;