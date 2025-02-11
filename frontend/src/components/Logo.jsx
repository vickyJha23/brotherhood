import React from 'react'
import imageCollection from '../assets/Images/image'


const Logo = () => {
  return (
    <div className='w-16 h-16'>
         <img src={imageCollection.logo} alt="logo" className='w-full h-full object-cover' />   
    </div>
  )
}

export default Logo
