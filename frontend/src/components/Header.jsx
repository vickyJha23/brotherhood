import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isVisible, setVisible] = useState(false);

useEffect(() => {
     const handleScroll  = () => {
          if(document.documentElement.scrollTop > 150){
               setSticky(true);
               setTimeout(() => {
                    setVisible(true);
               }, 50)
          }
          else {
               setSticky(false);
               setTimeout(() => {
                    setVisible(false);
               }, 50)
          }
     }
     window.addEventListener("scroll", handleScroll)
     return () => {
          window.removeEventListener("scroll", handleScroll)
     }
})
  return (
     <header className={`shadow h-20 bg-white relative ${isSticky ? "header-stuck": ""} ${isVisible ? "header-opening": ""}`}>
          <div className='container mx-auto w-full h-full px-4'>
               <Navbar />
          </div>     
     </header>
  )
}

export default Header
