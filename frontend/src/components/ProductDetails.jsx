import React from 'react'
import { BadgePercent } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';

import ProductDetailsCarousel from './ProductDetailsCarousel';





const ProductDetails = () => {
  return (
    <div className='md:container md:mx-auto grid justify-center grid-cols-1 md:grid-cols-2 border-b border-[#ccc] pb-8'>
            <ProductDetailsCarousel isNewArrival={true} />
            {/* this is about price and other things related container  */}
            <div className=''>
                 <div className='px-5 py-2'>
              <div className='flex flex-col gap-2'>
                <h2 className='font-medium'>
                  Dark  Sky Contrast Polo t shirt
                </h2>
                <p className='text-gray-400'>
                  SKU:1378710
                </p>
                <h1 className='font-medium tracking-wider text-2xl'>
                  ₹999
                </h1>
                <p className='text-green-600 font-medium text-sm'>
                    Inclusive of all taxes
                </p>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                  <span>
                    <BadgePercent color='green' />
                  </span>
                  <div className='text-xs flex flex-col gap-1'>
                    <p>
                      Get this for <b>
                        INR 849
                      </b>
                    </p>
                    <p>
                      Buy Any 2 Products - Get 15% off
                    </p>
                    <p>
                      code: <b className='uppercase'>
                        Salary15
                      </b>
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <span>
                    <BadgePercent color='green' />
                  </span>
                  <div className='text-xs flex flex-col gap-1'>
                    <p>
                      Get this for <b>
                        INR 799
                      </b>
                    </p>
                    <p>
                      Buy Any 3 Products - Get 20% off
                    </p>
                    <p>
                      code: <b className='uppercase'>
                        Salary20
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* About size  */}
             <div className='px-5 py-2'>
                 <p className='flex gap-2'>
                    Select Size <span className='text-red-500'>Size Chart</span>
                 </p>
                 <div className='flex gap-2 mt-4'>
                     <button className='w-9 h-9 flex items-center justify-center rounded-[5px] border-1 border-[#ccc]'>S</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px]  border-[#ccc] text-base'>M</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px] border-[#ccc] text-base'>L</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px] border-[#ccc] text-base'>XL</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px] border-[#ccc] text-base'>2XL</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px] border-[#ccc] text-base'>3XL</button>
                     <button className='w-9 h-9 border-1 flex items-center justify-center rounded-[5px] border-[#ccc] text-base'>4XL</button>
                 </div>
             </div>

             {/* about quantity */}
             <div className='px-5 py-0 mt-10'>
                <div className='flex gap-4 items-center'>
                     <p>Quantity</p>
                     <div className='flex gap-2 items-center'>
                        <button className='border-1 border-[#ccc] rounded-[5px] w-9 h-9 flex items-center justify-center'>
                           <Minus />
                        </button>
                        <p className='w-9 h-9 flex items-center justify-center'>1</p>
                        <button className='border-1 border-[#ccc] rounded-[5px] w-9 h-9 flex items-center justify-center'>
                            <Plus />
                        </button>
                     </div>
                </div>
             </div>
            </div>            
            
    </div>
  )
}

export default ProductDetails
