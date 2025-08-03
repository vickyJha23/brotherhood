import React from 'react'



import Rating from './Rating'
import Favourite from './Favourite'
import NewArrivalTag from './NewArrivalTag'


const ProductCard = ({ image, isRated = false, isNewArrival, height="h-64"}) => {
    return (
        <div className='bg-white rounded-[5px] overflow-hidden'>
            <div className={`bg-white  relative ${height} unr overflow-hidden`}>
                <img src={image} alt="" className='w-full h-full object-cover rounded-[5px]' />
                {isRated && <Rating />}
                <Favourite />
                {isNewArrival && <NewArrivalTag />}
            </div>
            <div className="px-3 py-2 flex flex-col gap-1">
                <p className='text-xs'>
                    Light Blue Plain Regular Fit Shirt
                </p>
                <p className='text-base flex items-center gap-1'>
                    <span className='text-[12px] text-gray-500'>₹</span>
                    <span className='text-[14px] font-bold'>999</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard
