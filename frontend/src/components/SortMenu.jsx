import React, {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const SortMenu = ({modal, handleFilterModal}) => {
const sortModalRef = useRef(null);

useGSAP(() => {
   if(sortModalRef.current) {
        if(modal === "sort"){
             gsap.to(sortModalRef.current,  {
                 bottom: 0,
                 opacity: 1,
                 display: "flex",
                 duration: 0.3,
                 ease: "power2.Out"
             })
         }
         else {
            gsap.to(sortModalRef.current,  {
                 bottom: "-100%",
                 opacity: 0,
                 display:"none",
                  duration: 0.3,
                 ease: "power2.Out"
             })
 
         }
   }
}, [
    modal
])

  return (
    <div ref={sortModalRef} onClick={(e) => {
         if(!e.target.closest("UL")){
               handleFilterModal("");
         } 
    }} className=' bg-white fixed w-full left-0 z-50 -bottom-full hidden items-center justify-center shadow-[0_0_3px_0_#ccc] pt-4 pb-2 px-3'>
                 <div className='w-full h-full'>
                     <h3 className='text-lg tracking-wider font-normal mb-2'>
                        Sort By {
                             console.log("fdjkfdjfkdfjl")
                        }
                     </h3>
                     <ul className='flex flex-col'>
                         <li className='border-b-[1px] border-b-[#ccc] py-4 text-gray-700'>
                             <button>
                                 Latest
                             </button>
                         </li>
                         <li className='border-b-[1px] flex gap-1 border-b-[#ccc] py-4 text-gray-700'>
                             Price:
                             <button>
                                 High to Low
                             </button>
                         </li>
                         <li className='border-b-[1px] flex gap-1 border-b-[#ccc] py-4 text-gray-700'>
                            Price:
                             <button>
                                 Low to High
                             </button>
                         </li>
                     </ul>

                 </div>
            </div>
  )
}

export default SortMenu
