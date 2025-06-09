import React from 'react'

const CarouselCard = ({carousel}) => {
  return (
    <div className='min-w-0 w-full' style={{
         flex: "0 0 100%"
    }}> 
       <img src={carousel.image} alt="" className='w-full' />
    </div>
  )
}

export default CarouselCard
