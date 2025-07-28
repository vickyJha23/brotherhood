import React from 'react'
import { Star } from 'lucide-react'




const Rating = () => {
  return (
    <div className='h-[30px] flex justify-evenly items-center px-2 bg-[rgba(255,255,255,0.6)] w-[100px] absolute left-2 bottom-4 rounded-[5px]'>
                    <span className='flex gap-2 items-center'> <span className=''>4.2</span>
                        <Star className='inline' stroke='none' fill='green' size={12} />
                    </span>
                    <span>|</span>
                    <span>(2)</span>
                </div>
  )
}

export default Rating
