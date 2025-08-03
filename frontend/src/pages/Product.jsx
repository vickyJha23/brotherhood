import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useActiveImage } from '../components/EmblaActiveCarousel';

import Breadcrumps from '../components/Breadcrumps';
import ProductDetailsCarousel from '../components/ProductDetailsCarousel';






const Product = () => {
  



  return (
    <section className='min-h-screen'>
        <div className='container mx-auto h-screen'>
            <div className='pt-2'>
                <Breadcrumps />
                 <div className='grid grid-cols-1'>
                     <ProductDetailsCarousel isNewArrival = {true} /> 
                 </div>    
            
            </div>
        </div>
    </section>
  )
}

export default Product