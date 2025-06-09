import React, { useState, useEffect, useCallback } from 'react'
import Navbar from './Navbar';
import Marquee from "react-fast-marquee";


import Search from './Search';



const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);


const handleSearchVisibility = useCallback(() => {
      setIsSearchVisible(preState => !preState);
}, [])

useEffect(() => {
     const handleScroll  = () => {
          if(document.documentElement.scrollTop >= 32){
               setSticky(true);
          }
          else {
               setSticky(false);
          }
     }
     window.addEventListener("scroll", handleScroll)
     return () => {
          window.removeEventListener("scroll", handleScroll)
     }
})
  return (
     <header className={`shadow w-full h-auto bg-white`}>
          <div className='h-8 bg-[#484939] flex items-center'>
             <Marquee speed={40} direction='right' delay={0}>
                  <p className='text-sm text-white tracking-wider font-mono px-4'>Great Offer EveryDay !!!</p>
            </Marquee> 
          </div>
          <Navbar isSticky={isSticky} onClickHandler={handleSearchVisibility} />
          {isSearchVisible && <Search onClickHandler = {handleSearchVisibility} />}
     </header>
  )
}

export default Header
