import React from 'react';
import { Mail, PhoneCall, Clock7  } from 'lucide-react';



const FooterSupport = () => {
  return (
    <div className='mt-4 md:mt-0 flex flex-col'>
         <h2 className='text-black uppercase text-base font-medium'>Support</h2>    
         <div className='flex flex-col text-sm gap-2 mt-4'>
              <span className='flex items-center gap-2'>
                    <span className='flex justify-center rounded-full border-[1.5px] border-black items-center w-8 h-8'>
                        <Mail color='black' size={18} />
                    </span>
                    <span className='text-gray-400'>
                        support@onethreadclothing.com
                    </span>
              </span>   
              <span className='flex items-center gap-2'>
                    <span className='flex justify-center rounded-full border-[1.5px] border-black items-center w-8 h-8'>
                        <PhoneCall color='black' size={18} />
                    </span>
                    <span className='text-gray-400'>
                        +91 7020197056
                    </span>
              </span>   
              <span className='flex items-center gap-2'>
                    <span className='flex justify-center rounded-full border-[1.5px] border-black items-center w-8 h-8'>
                        <Clock7 color='black' size={18} />
                    </span>
                    <span className='text-gray-400'>
                        Mon-Sat 10:00 AM - 7:00 PM
                    </span>
              </span>   
         </div>
    </div>
  )
}

export default FooterSupport
