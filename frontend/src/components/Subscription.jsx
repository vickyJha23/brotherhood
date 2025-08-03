import React from 'react'

const Subscription = () => {
    return (
        <div className='bg-[#f5f5f5] text-white  py-8 px-3 '>
            <div className='container gap-2  text-black mx-auto'>
                <div className='flex flex-col gap-4 md:flex-row md:gap-6 items-start justify-start h-full'>
                    <div className='flex flex-col gap-2 flex-[0_0_40%]'>
                        <p className='text-xl font-medium'>
                            Get Coupons & Offers
                        </p>
                        <p className='text-gray-400 text-sm md:text-base'>
                            You may unsubscribe at any moment. For that purpose,please find our contact info in the legal notice.
                        </p>
                    </div>
                    <div className='flex-1 flex flex-col gap-2 mt-2'>
                        <div className='flex '>
                            <input type="text" placeholder='Your email address' className='outline-none w-full border-2 px-4 border-[#ccc] border-r-0 py-3' />
                            <button className='bg-black text-white px-4 py-2 uppercase hover:bg-gray-800 transition duration-300'>
                                Subscribe
                            </button>
                        </div>
                        <p className='flex items-end gap-2 text-sm text-right'>
                            <span className='text-red-500'>
                                *
                            </span>
                            <span className='text-gray-400'>
                                Don't worry, we don't spam!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
