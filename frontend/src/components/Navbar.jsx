import React from 'react';
import { Menu, User, ShoppingBag, Search, Heart } from "lucide-react"
import Logo from './Logo';

const Navbar = () => {
  return (
       <nav className='w-full h-full flex items-center'>
           <div className='w-full flex h-full justify-between items-center'>
                <button type='button' className=''>
                      <Menu className='w-10 h-10'/>
                </button>
                <Logo />
                <div className='flex gap-6'>
                      <button type='button' className=''>
                         <User className=''/>
                      </button>
                      <button type='button'>
                         <Search />
                      </button>
                      <button type='button'>
                         <ShoppingBag className=''/>
                      </button>
                </div>
           </div>
       </nav>
  )
}

export default Navbar
