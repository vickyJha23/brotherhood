import React from 'react'
import imageCollection from '../assets/Images/image'


const Logo = () => {
  return (
    <div className='flex items-end'>
         <img src={imageCollection.logo} alt="logo" className='h-[35px] align-middle' />   
    </div>
  )
}

export default Logo
