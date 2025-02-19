import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserRound, X, ChevronDown } from "lucide-react"
import useSidebarStore from '../store/Sidebarstore';
import useUserStore from "../store/user.store";
import { motion } from "framer-motion";


const Sidebar = () => {
   const sidebarVisible = useSidebarStore((state) => state.sidebarVisible);
   const hideSidebar = useSidebarStore((state) => state.hideSidebar);
   const isLoggedIn = useUserStore((state) => state.isLoggedIn);
   const user =  useUserStore((state) => state.user);
   const [dropDownActive, setDropDownActive] = useState(false);

   const dropDownRef = useRef(null);
   const handleDropDown = () => {
        setDropDownActive(!dropDownActive);
   }  
  

   useEffect(() => {
        if(dropDownRef.current){
             const buttons = dropDownRef.current.querySelectorAll("li > a > button");
             const handleClick = (e) => {
                   const ul = e.currentTarget.parentElement.nextElementSibling; 
                  const maxHeight = ul.style.maxHeight;
                  if(maxHeight !== "" && parseInt(maxHeight.slice(0, maxHeight.length - 2)) !== 0){
                       ul.style.maxHeight = 0;
                       dropDownRef.current.style.height = parseInt(dropDownRef.current.style.height.slice(0, length-2)) - ul.scrollHeight + "px";
                

                  }
                  else {
                       ul.style.maxHeight = `${ul.scrollHeight}px`;
                       dropDownRef.current.style.height = parseInt(dropDownRef.current.style.height.slice(0, length-2)) + ul.scrollHeight + "px";
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
    <motion.section initial={{width: 0}} animate={{
     width: sidebarVisible ? "100%" : 0,
    }} className={`h-full 
      bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 z-20`}>
      <motion.aside initial={{
           x: "-100%"
      }} animate={{
          x: sidebarVisible ? "0%": "-100%"
      }} transition={{
           type: "spring",
           stiffness: 120,
           damping: 20
      }} className={`absolute w-96 left-0 top-0  bg-white shadow-xl h-full`}>
        <div className="w-full h-full py-6">
          <div className="flex px-6">
             <div className='border-b-[1px] border-[#ccc] w-full flex justify-between items-center pb-5'>
             <Link to="/login" className="flex gap-4 items-center">
              <span className="w-[30px] h-[30px] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-[30px] before:h-[30px] before:bg-[#D9D9D9] before:rounded-[50%] before:-z-10">
                   {user?.profileImage ? user?.profileImage : <UserRound size={20} className="" /> }
              </span>
              <span className="uppercase text-base">{
                isLoggedIn ? user.userName: <Link to="/login">
                     log in    
                </Link>
               }</span>
            </Link>
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
             <li className='py-4 border-b-[1px] border-[#ccc] w-full'>
                 <Link className='flex items-center transition-all duration-500 ease-in-out justify-between w-full' style={{
                     paddingBottom: dropDownActive ? "16px": "0"
                 }}>
                    <span className='uppercase font-light tracking-widest'>Shop</span>
                    <span className='border-l-[1px] w-auto h-full border-[#ccc] flex items-center justify-center pl-4'>
                    <button onClick={handleDropDown} className='  cursor-pointer'>
                       <ChevronDown/>
                    </button>
                    </span>
                 </Link>   
                  <ul ref={dropDownRef} className={`overflow-hidden flex flex-col gap-4 font-light transition-all duration-500 ease-in-out ${dropDownActive ? "overflow-auto": ""}`}
                  style={{
                      height: dropDownActive ? `${parseInt(dropDownRef.current?.scrollHeight)}px` : "0px",
                      opacity: dropDownActive ? "1": "0",
                      visibility: dropDownActive ? "visible": "hidden"
                  }}
                  >
                       {/* {shirts} */ }
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                    Shirts
                                </span>
                                <button className="w-6 h-6 cursor-pointer flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%]">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            <ul className="border-l-[1px] transition-all duration-500 ease-in-out max-h-0 overflow-hidden border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Plain
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               strips
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Checks
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Printed
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Oversized
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Overshirt
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Crochet
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Linen
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>

                       {/* tshirts */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                    T-Shirts
                                </span>
                                <button className="w-6 h-6 flex items-center justify-center border-[1px] cursor-pointer border-[#ccc] rounded-[50%]">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                            <ul className="border-l-[1px] overflow-hidden transition-all duration-500 ease-in-out max-h-0 border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               basic
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               oversized
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Polo
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>


                       {/* trousers */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                     Trousers
                                </span>
                                <button className="w-6 h-6 flex items-center justify-center border-[1px] border-[#ccc] cursor-pointer rounded-[50%]">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                            <ul className="border-l-[1px] overflow-hidden transition-all duration-500 ease-in-out max-h-0  border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Chino
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                              formal
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               korean
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               linen
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>

                        {/* Cargo pants */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                     Cargo pants
                                </span>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                       </li>

                       {/* Jeans  */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                     Jeans
                                </span>
                                <button className="w-6 h-6 flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                            <ul className="border-l-[1px] overflow-hidden transition-all duration-500 ease-in-out max-h-0 border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Baggy
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                              Straight
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               slim
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               bootcut
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>

                       {/* winterwears */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                     Winterwears
                                </span>
                                <button className="w-6 h-6 flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                            <ul className="border-l-[1px] overflow-hidden transition-all duration-500 ease-in-out max-h-0 border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Hoodies
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                              Jacket
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Sweaters
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Sweatshirts
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>

                       {/* {accessories} */}
                       <li className=''>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                     Accessories
                                </span>
                                <button className="w-6 h-6 flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer">
                                      <ChevronDown size={15} />
                                </button>
                            </Link>
                            {/* {here i need to add a dropdown} */}
                            <ul className="border-l-[1px] overflow-hidden transition-all duration-500 ease-in-out max-h-0 border-[#000] flex flex-col gap-2 px-3">
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Perfumes
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                              Bags
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Belts
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Sunglasses
                                          </span>
                                     </Link>  
                                </li>
                                <li className=''>
                                     <Link>
                                          <span className='text-xs capitalize tracking-wide font-medium'>
                                               Shoes
                                          </span>
                                     </Link>  
                                </li>
                            </ul>
                       </li>
                       <li>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                      Suit & Blazers
                                </span>
                            </Link>
                       </li>
                       <li>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                      Joggers
                                </span>
                            </Link>
                       </li>
                       <li>
                            <Link className="flex items-center justify-between">
                                <span className='text-sm'>
                                      Shorts
                                </span>
                            </Link>
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
