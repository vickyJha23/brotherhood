import React from 'react'
import imageCollection from '../assets/Images/image'


const Logo = () => {
  return (
    <div className='flex items-center'>
         {/* <img src={imageCollection.logo} alt="logo" className='w-full h-full object-cover' />    */}
         <h1 className='text-2xl font-bold tracking-[2px]'>SNITCH</h1>
    </div>
  )
}

export default Logo
