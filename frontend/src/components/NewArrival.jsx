import React from 'react'
import NewArrivalCard from './NewArrivalCard'
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const NewArrival = () => {
  return (
    <div className='mt-15'>
        <div className='grid grid-cols-2 sm:gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 gap-y-3 px-3'>
           <NewArrivalCard />  
           <NewArrivalCard />   
           <NewArrivalCard />   
           <NewArrivalCard />   
           <NewArrivalCard />   
           <NewArrivalCard />              
           <NewArrivalCard />              
           <NewArrivalCard />              
           <NewArrivalCard />              
           <NewArrivalCard />      
        </div>    
        <Link  className='transition-all duration-200 ease-linear hover:bg-[#A3004D] hover:text-white flex justify-center items-center gap-4 mt-15 text-[#A3004D] w-58 mx-auto rounded-[5px] capitalize tracking-widest border-2 border-[#A3004D] px-3 py-2'>
             view All products
             <ArrowRight size={18}  /> 
        </Link>

    </div>
  )
}

export default NewArrival
