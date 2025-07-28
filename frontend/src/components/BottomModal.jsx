import React from 'react'

const BottomModal = ({modalHandler}) => {
  return (
    <div className='fixed bottom-0 h-15 w-full bg-white shadow-[0_10px_5px_5px_#ccc] flex items-center justify-center z-50 border-t-[1px] border-t-[#ccc] md:hidden'>
        <div className='w-full flex justify-center items-center px-6'>
            <div className='flex items-center justify-between w-9/12'>
                <button onClick={(e) => {
                  modalHandler(e.target.textContent)}} className='text-red-500 uppercase font-medium tracking-wider px-6 py-2'>
                sort
            </button>
            <span>|</span>
            <button onClick={(e) => {modalHandler(e.target.textContent)}} className='text-red-500 uppercase font-medium tracking-wider px-6 py-2'>
                filter
            </button>
            </div>
        </div>
    </div>
  )
}

export default BottomModal
