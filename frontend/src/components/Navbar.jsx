import React, { useEffect, useState } from 'react';
import { Menu, User, ShoppingBag, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from './Logo';

const Navbar = () => {
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
                <button type='button' className=''>
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
