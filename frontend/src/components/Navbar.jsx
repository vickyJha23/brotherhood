import React, { useEffect, useState } from 'react';
import { Menu, User, ShoppingBag, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from './Logo';
import useSidebarStore from '../store/Sidebarstore';


const Navbar = () => {
   const showSidebar  = useSidebarStore((state) => state.showSidebar);
   console.log(showSidebar)
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
       const token =  JSON.parse(localStorage.getItem("data"))?.accessToken;
       if(!token){
          return setLoggedIn(false);
       }
       setLoggedIn(true);
    }, [])


  return (
       <nav className='w-full h-full flex items-center'>
           <div className='w-full flex h-full justify-between items-center'>
                <button onClick={showSidebar} type='button' className='cursor-pointer'>
                      <Menu className='w-10 h-10'/>
                </button>
                <Logo />
                <div className='flex gap-6'>
                      <button type='button' className='capitalize cursor-pointer'>
                        {isLoggedIn ? "logout"  : <Link to="/login">
                           <User className='w-6 h-6' />
                        </Link>  }
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
