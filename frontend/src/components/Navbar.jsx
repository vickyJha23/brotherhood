import React, { useEffect, useState } from 'react';
import { Menu, User, ShoppingBag, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from './Logo';
import { AlignRight } from 'lucide-react';
import useSidebarStore from '../store/Sidebarstore';
import useUserStore from '../store/user.store';

const Navbar = ({isSticky, onClickHandler}) => {
  const showSidebar = useSidebarStore((state) => state.showSidebar);
  const isLoggedIn = useSidebarStore((state) => state.isLoggedIn);

  return (
    <nav className={`bg-white shadow w-full px-4 py-3 lg:px-4 ${isSticky ? "fixed top-0 z-40": ""}` }>
      <div className='container mx-auto flex justify-between items-center'>
        <button onClick={showSidebar} type='button' className='space-y-2 cursor-pointer lg:hidden'>
          <AlignRight size={40} className='rotate-180' />
        </button>
        <Logo />
        <ul className=" hidden lg:flex items-center gap-8 uppercase font-medium text-xs relative">
          <li>New Arrivals</li>
            
          <li className="group relative">
            T-Shirts
            <ul className="absolute min-w-2xs left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white shadow-md rounded p-2 text-black z-10">
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                 <img src='https://shoppingadviser.in/wp-content/uploads/2024/07/tshirt-3.jpg' className='w-10 h-10' alt='' />  
                 <span>
                     View All
                 </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                 <img src='https://images.unsplash.com/photo-1661181475147-bbd20ef65781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-10 h-10' />  
                 <span>
                   Plain T-Shirts
                 </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                <img src="https://bluorng.com/cdn/shop/files/Untitled_Artwork_26992.jpg?v=1744353735&width=823" alt="" className='w-10 h-10' />
                Embroidered T-Shirts</li>
            </ul>
          </li>

          <li className="group relative">
            Kurtas
            <ul className="absolute min-w-2xs left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white shadow-md rounded p-2 text-black z-10">
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                 <img src='https://kisah.in/cdn/shop/files/KA-0949-T301-01.jpg?v=1744803516&width=5000' alt='' className='w-10 h-10 object-cover' />  
                 <span>
                     View All
                 </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/2/9258442SK6024_1.jpg?rnd=20200526195200&tr=w-720" alt="" className='w-10 h-10 object-cover' />
                  <span>
                      Plain Kurtas
                  </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                <img src="https://www.komalkothari.in/cdn/shop/files/03-00119copy.jpg?v=1737444350&width=600" alt="" className='w-10 h-10 object-cover' />
                 <span>
                  Embroidered Kurtas
                 </span>
                </li>
            </ul>
          </li>

          <li className="group relative">
            Suits
            <ul className="absolute min-w-2xs left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white shadow-md rounded p-2 text-black z-10">
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                 <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/31/PXxftIOy_6be3d2fdcfd74f00aec49220ed9e1424.jpg' alt='' className='w-10 h-10 object-cover' />  
                 <span>
                    View All
                 </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
              <img src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/p/l/plain-art-silk-pakistani-suit-in-blue-v1-knv385.jpg" alt=""  className='w-10 h-10 object-cover' />
                 <span>
                    Plain Suits
                 </span>
                </li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                <img src="https://www.labelmadhurithakkar.com/cdn/shop/files/IMG_2740_800x.jpg?v=1739261169" alt="" className='w-10 h-10 object-cover' />
                
                  <span>
                      Embroidered Suits
                  </span>
                </li>
            </ul>
          </li>
        </ul> 
        <div className='flex gap-4'>
          <input type="text text-sm" className='hidden lg:block placeholder:text-sm bg-[#f9f7f7] rounded-[5px] border border-[#ccc] px-3 py-1 w-72' placeholder='Search for product' />
          <button onClick={onClickHandler} type='button' className='inline-block lg:hidden'>
              <Search />
          </button>
          <button type='button' className='inline-block'>
            <ShoppingBag className='' />
          </button>
          <button type='button' className='hidden sm:inline-block capitalize cursor-pointer'>
            {isLoggedIn ? <button type='button' className='capitalize border-[2px] border-[#ccc] px-4 py-1 rounded cursor-pointer tracking-wider transition-colors duration-500 ease-in-out hover:text-red-600 hover:border-red-600'>
              logout
            </button> : <Link to="/login">
              <User className='w-6 h-6' />
            </Link>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
