import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare , FaYoutubeSquare  } from 'react-icons/fa';
import PaymentMethods from './PaymentMethods';




const SocialMediaLinks = () => {
    return (
        <div className='border-t-[1.5px] border-b-[1.5px] border-[#ccc] px-3'>
            <div className='w-full'>
                <div className='flex py-4 flex-col xl:flex-row xl:justify-between gap-4 justify-center items-center'>
                    <PaymentMethods />
                    <div className='flex-1 flex flex-col xl:flex-row xl:gap-4 justify-end items-center gap-3'>
                     <p className='text-black font-medium text-sm '>
                        Join The One Thread Family
                     </p>
                    <div className='flex items-center justify-center gap-4'>
                        <Link to='https://www.facebook.com/onethreadclothing' target='_blank' className='text-black hover:text-gray-700 transition duration-300'>
                            <FaFacebookSquare color="#3b5998" size={30} />
                        </Link>
                        <Link to='https://www.instagram.com/onethreadclothing/' target='_blank' className='text-black hover:text-gray-700 transition duration-300'>
                            <FaInstagramSquare color='#d62976'  size={30} />
                        </Link>
                        <Link to='https://www.youtube.com/@onethreadclothing' target='_blank' className='text-black hover:text-gray-700 transition duration-300'>
                            <FaYoutubeSquare color='#FF0000'  size={30} />
                        </Link>                                                              
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaLinks
