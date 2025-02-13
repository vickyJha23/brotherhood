import React from 'react'
import { Link } from "react-router-dom";
import { UserRound, X } from "lucide-react"

const Sidebar = () => {
  return (
     <section className='w-full min-h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0'>
        <aside className='absolute p-6 top-0 left-0 w-full bg-white shadow-xl max-w-sm h-full'>
            <div className='w-full h-full'>
                 <div className='flex justify-between pb-5 border-b-[1px] border-[#ccc]'>
                     <Link to="/login" className='flex gap-4 items-center'>
                          <span className='w-[30px] h-[30px] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-[30px] before:h-[30px] before:bg-[#D9D9D9] before:rounded-[50%] before:-z-10'>
                              <UserRound size={20} className='' />
                          </span>
                          <span className='uppercase text-base'>Log in</span>
                     </Link> 
                     <button>
                         <X />
                     </button>
                 </div>  
                 {/* title section ends here */}
                 <div>
                  
                 </div>
            </div>
        </aside>  
     </section> 
  )
}

export default Sidebar
