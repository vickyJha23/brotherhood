import React from 'react'
import imageCollection from '../assets/Images/image'


const Logo = () => {
  return (
    <div className='flex items-center'>
         <img src={imageCollection.logo} alt="logo" className='h-[40px]' />   
    </div>
  )
}

export default Logo
