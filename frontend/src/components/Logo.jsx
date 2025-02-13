import React from 'react'
import imageCollection from '../assets/Images/image'


const Logo = () => {
  return (
    <div className='w-16 h-16 flex items-center'>
         {/* <img src={imageCollection.logo} alt="logo" className='w-full h-full object-cover' />    */}
         <h1 className='text-3xl font-bold tracking-[2px]'>SNITCH</h1>
    </div>
  )
}

export default Logo
