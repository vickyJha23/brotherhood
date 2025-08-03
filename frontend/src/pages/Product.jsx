import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useActiveImage } from '../components/EmblaActiveCarousel';

import Breadcrumps from '../components/Breadcrumps';
import ProductDetails from '../components/ProductDetails';
import DeliveryOption from '../components/DeliveryOption';
import ProductExtraInfo from '../components/ProductExtraInfo';





const Product = () => {

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto'>
        <div className='pt-2'>
          <Breadcrumps />
          <ProductDetails/>
          <DeliveryOption  />
          <ProductExtraInfo />
        </div>
      </div>
    </section>
  )
}

export default Product