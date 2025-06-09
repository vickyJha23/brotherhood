import React from 'react'
import { Link } from 'react-router-dom'


const NewArrivalCard = () => {
  return (
     <Link to='' className=''>
        <div className='min-h-[300px] flex flex-col'>
                <img src="https://media.powerlook.in/catalog/product/1/3/1326820_2_.jpg?aio=w-256" alt="" className='rounded-[5px]'  />
                <div className='flex flex-col px-2 mt-2'>
                    <h3>
                        White knit shirt
                    </h3>
                    <p className='font-semibold text-lg'>
                       ₹599
                    </p>
        </div>    
      </div>
     </Link> 
  )
}

export default NewArrivalCard
