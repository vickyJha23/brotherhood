import React from 'react'
import { Link } from 'react-router-dom'


const FooterCompanyLinks = () => {
  return (
    <div className='flex flex-col'>
         <h2 className='text-black uppercase text-base font-medium'>Company</h2>
         <ul className='grid grid-cols-2 md:grid-cols-1 mt-4'>
            <li className='text-gray-600 text-sm my-2'>
                <Link to='/about' className=''>About Us</Link>
            </li>
            <li className='text-gray-600 text-sm my-2'>
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li className='text-gray-600 text-sm my-2'>
                <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
            <li className='text-gray-600 text-sm my-2'>
                <Link to='/terms-and-conditions'>Terms & Conditions</Link>
            </li>
            <li className='text-gray-600 text-sm my-2'>
                <Link to='/terms-and-conditions'>Returns, Exchange & Refunds</Link>
            </li>
         </ul>    
    </div>
  )
}

export default FooterCompanyLinks
