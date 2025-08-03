import React from 'react'

const NewArrivalTag = ({size = "8px", width="92px"}) => {
  return (
    <div className='absolute flex justify-start px-2 items-center top-4 text-white left-0 w-23 h-5' style={{
        backgroundImage: "linear-gradient(61deg, rgb(0, 0, 0) 75%, transparent 70%)",
        width: width
    }}>
        <p className='uppercase' style={{
             fontSize: size
        }}>
             New Arrival
        </p>
    </div>
  )
}

export default NewArrivalTag
