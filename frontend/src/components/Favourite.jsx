import React from 'react';
import { Heart } from 'lucide-react';

const Favourite = () => {
  return (
    <div className='h-8 w-8 flex items-center justify-center bg-[#f8f8f8] absolute top-2 right-2 rounded-full shadow-mg'>
       <button className='w-full h-full flex items-center justify-center'>
           <Heart size={18} fill='#ccc' stroke='none' />
       </button>
    </div>
  )
}

export default Favourite
