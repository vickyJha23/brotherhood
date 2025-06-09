import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserRound, X, ChevronDown } from "lucide-react"
import useSidebarStore from '../store/Sidebarstore';
import useUserStore from "../store/user.store";
import { motion } from "framer-motion";
import {shallow} from "zustand/shallow"


const Sidebar = () => {
     const sidebarVisible = useSidebarStore((state) => state.sidebarVisible);
     const hideSidebar = useSidebarStore((state) => state.hideSidebar);
     const isLoggedIn = useUserStore((state) => state.isLoggedIn);
     const user = useUserStore((state) => state.user);
     const sideBarDropdown = useSidebarStore((state) => state.sideBarDropdown);
     const setSideBarDropdown = useSidebarStore((state) => state.setSideBarDropdown)
    

     const dropDownRef = useRef(null);
     const handleDropDown = () => {
          setDropDownActive(!dropDownActive);
     }


     useEffect(() => {
          if (dropDownRef.current) {
               const buttons = dropDownRef.current.querySelectorAll("li > a > button");
               const handleClick = (e) => {
                    const ul = e.currentTarget.parentElement.nextElementSibling;
                    const maxHeight = ul.style.maxHeight;
                    if (maxHeight !== "" && parseInt(maxHeight.slice(0, maxHeight.length - 2)) !== 0) {
                         ul.style.maxHeight = 0;
                         dropDownRef.current.style.height = parseInt(dropDownRef.current.style.height.slice(0, length - 2)) - ul.scrollHeight + "px";


                    }
                    else {
                         ul.style.maxHeight = `${ul.scrollHeight}px`;
                         dropDownRef.current.style.height = parseInt(dropDownRef.current.style.height.slice(0, length - 2)) + ul.scrollHeight + "px";
                    }
               }
               buttons.forEach(btn => btn.addEventListener("click", handleClick));


               return () => {
                    buttons.forEach((btn) => {
                         btn.removeEventListener("click", handleClick);
                    });
               }
          }
     }, [])

     return (
          <motion.section initial={{ width: 0 }} animate={{
               width: sidebarVisible ? "100%" : 0,
          }} className={`
      bg-[rgba(255,255,255,0.8)] min-h-screen fixed top-0 left-0 z-50`}>
               <motion.aside initial={{
                    x: "-100%"
               }} animate={{
                    x: sidebarVisible ? "0%" : "-100%"
               }} transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20
               }} className={`absolute w-96 left-0 top-0  bg-white shadow-xl h-full`}>
                    <div className="w-full h-full py-6">
                         <div className="flex px-6">
                              <div className='border-b-[1px] border-[#ccc] w-full flex justify-between items-center pb-5'>
                                   <div className="flex gap-4 items-center">
                                        <span className="w-[30px] h-[30px] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-[30px] before:h-[30px] before:bg-[#D9D9D9] before:rounded-[50%] before:-z-10">
                                             {user?.profileImage ? user?.profileImage : <UserRound size={20} className="" />}
                                        </span>
                                        <span className="uppercase text-base">{
                                             isLoggedIn ? user.userName : <Link to="/login">
                                                  log in
                                             </Link>
                                        }</span>
                                   </div>
                                   <button onClick={hideSidebar} className='cursor-pointer'>
                                        <X />
                                   </button>
                              </div>
                         </div>
                         {/* title section ends here */}
                         <ul className="w-full h-full overflow-y-auto px-6">
                              <li>
                                   <Link className="py-4 inline-block border-b-[1px] border-[#ccc] w-full">
                                        <span className="uppercase font-light tracking-widest">
                                             New arrivals
                                        </span>
                                   </Link>
                              </li>
                              <li>
                                   <Link className="py-4 inline-block border-b-[1px] border-[#ccc] w-full">
                                        <span className="uppercase font-light tracking-widest">
                                             best sellers
                                        </span>
                                   </Link>
                              </li>
                              <li>
                                   <Link className="py-4 inline-block border-b-[1px] border-[#ccc] w-full">
                                        <span className="uppercase font-light tracking-widest">
                                             sale
                                        </span>
                                   </Link>
                              </li>
                              <li className='py-4 inline-block border-b-[1px] border-[#ccc] w-full'>
                                   <span className='uppercase font-light tracking-widest'>T-shirts</span>
                                   <ul className='px-0 py-2'>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                             <img src='https://shoppingadviser.in/wp-content/uploads/2024/07/tshirt-3.jpg' className='w-10 h-10' alt='' />
                                             <span>
                                                  View All
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                             <img src='https://images.unsplash.com/photo-1661181475147-bbd20ef65781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-10 h-10' />
                                             <span>
                                                  Plain T-Shirts
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                             <img src="https://bluorng.com/cdn/shop/files/Untitled_Artwork_26992.jpg?v=1744353735&width=823" alt="" className='w-10 h-10' />
                                             Embroidered T-Shirts</li>
                                   </ul>
                              </li>
                              <li className='py-4 inline-block border-b-[1px] border-[#ccc] w-full'>
                                   <span className='uppercase font-light tracking-widest'>Kurtas</span>
                                   <ul className='px-0 py-2'>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                                             <img src='https://kisah.in/cdn/shop/files/KA-0949-T301-01.jpg?v=1744803516&width=5000' alt='' className='w-10 h-10 object-cover' />
                                             <span>
                                                  View All
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                                             <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/2/9258442SK6024_1.jpg?rnd=20200526195200&tr=w-720" alt="" className='w-10 h-10 object-cover' />
                                             <span>
                                                  Plain Kurtas
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                                             <img src="https://www.komalkothari.in/cdn/shop/files/03-00119copy.jpg?v=1737444350&width=600" alt="" className='w-10 h-10 object-cover' />
                                             <span>
                                                  Embroidered Kurtas
                                             </span>
                                        </li>
                                   </ul>
                              </li>
                              <li className='py-4 inline-block border-b-[1px] border-[#ccc] w-full'>
                                   <span className='uppercase font-light tracking-widest'>Suits</span>
                                   <ul className='px-0 py-2'>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                             <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/31/PXxftIOy_6be3d2fdcfd74f00aec49220ed9e1424.jpg' alt='' className='w-10 h-10 object-cover' />
                                             <span>
                                                  View All
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                                             <img src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/p/l/plain-art-silk-pakistani-suit-in-blue-v1-knv385.jpg" alt="" className='w-10 h-10 object-cover' />
                                             <span>
                                                  Plain Suits
                                             </span>
                                        </li>
                                        <li className="px-0 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                             <img src="https://www.labelmadhurithakkar.com/cdn/shop/files/IMG_2740_800x.jpg?v=1739261169" alt="" className='w-10 h-10 object-cover' />
                                             <span>
                                                  Embroidered Suits
                                             </span>
                                        </li>
                                   </ul>
                              </li>
                         </ul>
                    </div>
               </motion.aside>
          </motion.section>
     );
}

export default Sidebar
