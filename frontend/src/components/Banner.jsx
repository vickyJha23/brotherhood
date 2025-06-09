import React from 'react';
import imageCollection from '../assets/Images/image';
import {Link} from "react-router-dom";



const Banner = ({image, ...restProp}) => {

     return (
    <div className='mt-15 px-4'>
         <Link to="" className='bg-[#E3DFD3]'>
              <div className='md:h-60 overflow-hidden' {...restProp}>
                  <img src={ image || imageCollection.offerBanner} alt="" className='object-cover w-full' /> 
              </div>  
         </Link>   
    </div>
  )
}

export default Banner
