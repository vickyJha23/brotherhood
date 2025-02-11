import React from 'react'

import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='h-20 shadow fixed top-0 left-0 w-full'>
       <div className='container h-full mx-auto'>
            <Navbar />
       </div>  
   </header>
  )
}

export default Header
