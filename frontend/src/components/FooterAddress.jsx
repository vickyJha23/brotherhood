import React from 'react'

const FooterAddress = () => {
  return (
    <div className='mt-4 md:mt-0 flex flex-col'>
         <h2 className='text-black uppercase text-base font-medium'>Registered Office Address</h2>
         <div className='flex flex-col gap-2 mt-4 text-sm'>
             <p className='text-gray-400'>
                 One Thread Clothing Pvt ltd
             </p>
             <p className='text-gray-400 capitalize'>    
                    Building NO. A8 Dwarkesh Nagar Saravali Boisar 
                    <br /> Palghar Road Pin Code. 401501
             </p>
         </div>
    </div>
  )
}

export default FooterAddress
