import React, { useEffect, useState } from 'react';
import { Menu, User, ShoppingBag, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from './Logo';
import useSidebarStore from '../store/Sidebarstore';
import useUserStore from '../store/user.store';

const Navbar = () => {
   const showSidebar  = useSidebarStore((state) => state.showSidebar);
    const isLoggedIn = useSidebarStore((state) => state.isLoggedIn);
   
  return (
       <nav className='w-full h-full flex items-center'>
           <div className='w-full flex justify-between items-center'>
                <button onClick={showSidebar} type='button' className='space-y-2 cursor-pointer'>
                      <span className='block w-8 h-[0.25rem] bg-black'>
                      </span>
                      <span className='block w-5 h-[0.25rem] bg-black'></span>
                      <span className='block w-8 h-[0.25rem] bg-black'></span>
                </button>
                <Logo />
                <div className='flex gap-6'>
                      <button type='button' className='hidden sm:inline-block capitalize cursor-pointer'>
                        {isLoggedIn ? <button type='button' className='capitalize border-[2px] border-[#ccc] px-4 py-1 rounded cursor-pointer tracking-wider transition-colors duration-500 ease-in-out hover:text-red-600 hover:border-red-600'>
                              logout
                        </button>  : <Link to="/login">
                           <User className='w-6 h-6' />
                        </Link>  }
                      </button>
                      <button type='button'>
                         <Search />
                      </button>
                      <button type='button' className='hidden sm:inline-block'>
                          <ShoppingBag className=''/>
                      </button>
                </div>
           </div>
       </nav>
  )
}

export default Navbar
