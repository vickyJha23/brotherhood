  import React from 'react'

const DeliveryOption = () => {
  return (
    <div className='px-5 py-5 flex flex-col gap-3 border-b-1 border-b-[#ccc]'>
         <h2>Delivery Options</h2>
         <div className='border-[1px] px-2 border-[#ccc] rounded-[5px] flex items-center'>
             <input type="text" name="" id="" placeholder='Enter pincode' className='placeholder:text-sm outline-none flex-1 px-3 py-2 border-[#ccc]' />
             <button className='bg-red-500 text-sm font-medium px-5 py-0.5 shadow rounded-[2px] uppercase text-white'>
                 Check
             </button>
         </div>
         <p className='text-[11px]'>
                 Please enter the <code className='uppercase'>pin</code> code to check cash/card delivery is available.Return and Exchange will be available for 7 days  from the date of order delivery. 
            </p>
    </div>
  )
}

export default DeliveryOption
