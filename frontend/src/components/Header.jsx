import React from 'react'

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='h-20 shadow'>
       <div className="w-full h-full container mx-auto 2xl:px-6">
            <Navbar />
       </div>  
   </header>
  )
}

export default Header
