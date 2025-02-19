import {create} from "zustand";


const useUserStore = create((set) => ({
     isLoggedIn: false, 
     user: {},
     setloginStatus: (user) => {
        set({isLoggedIn: true, user: user})
     },
     setlogoutStatus: () => {
         set({isLoggedIn: false, user: {}})
     }
}));



export default useUserStore;