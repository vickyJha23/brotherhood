import React from 'react';
import { MoveLeft } from 'lucide-react';
import { Link } from "react-router-dom";

const Search = ({onClickHandler}) => {
  


  return (
    <div className='w-full min-h-screen p-4 bg-white fixed top-0 left-0 z-50'>
       <div className='container mx-auto w-full h-screen'>
           <div className='flex gap-2'>
               <button onClick={onClickHandler} className='px-3 py-3'>
                   <MoveLeft size={24} />
               </button>
               <input type="text" className='border px-4 py-3 outline-none rounded-[5px] border-[#ccc] w-full' placeholder='Search for product' />
           </div>
           <ul className='mt-5'>
              <li className='border-b-[1px] border-[#ccc] py-4 px-3'>
                  <Link to='/'  className='flex items-center gap-4'>
                      <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSezJEqZ70mZYDU6FJQsNnjYNDm2BMQID4d0qTeCudqTHCnwJKd742QS4pt_Nvd0xPJL6eY6XoUGGFov09X3mTRa8SqynPL_Rs9YU9SsQcK1p-BswL1x-BGDVE" alt="" className='w-10 h-10 object-cover' />
                      <div className='flex flex-col'>
                        <p>
                         T shirts
                      </p>
                      <p className='flex text-xs items-end gap-1'>
                         <span className='text-gray-400'>
                             Regular price
                         </span>
                         <span className='font-semibold'>
                              ₹ 500
                         </span>
                      </p>
                      </div>
                  </Link> 
              </li>

           </ul>
       </div>
    </div>
  )
}

export default Search
