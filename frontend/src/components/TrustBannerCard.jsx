import React from 'react'

const TrustBannerCard = ({icon,title, description}) => {
  return (
    <div className='grid md:grid-cols-[auto_1fr] gap-2 place-items-center'>
        <div className=''>
            <img src={icon} alt={title} className='w-[40px] h-[40px] object-contain' />
        </div>
        <div className='flex flex-col gap-2 px-4 text-black'>
             <p className='text-sm text-center md:text-left md:text-base lg:text-lg font-medium'>{title}</p>
             <p className='text-left text-sm hidden md:block max-w-[350px]'>{description}</p>
        </div>
    </div>
  )
}

export default TrustBannerCard
