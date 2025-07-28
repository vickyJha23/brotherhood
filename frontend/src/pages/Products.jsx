import React, { useState, useEffect, useCallback} from 'react';
import { useMediaQuery } from 'react-responsive'
import { ChevronsUp, Star } from 'lucide-react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';



import Hero from '../components/Hero';
import Breadcrumps from '../components/Breadcrumps'
import ProductCard from '../components/ProductCard';
import BottomModal from '../components/BottomModal';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SortMenu from '../components/SortMenu';
import FilterPanel from '../components/FilterPanel';




const Products = () => {
    const [scrollToTop, setScrollToTop] = useState(false);
    const [modal, setModal] = useState("");
    const isTablet = useMediaQuery({
          query: "(min-width: 768px)"
    });

     

    const moveToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);
    
    const handleFilterModal = useCallback((val) => {
           setModal(val);
    }, []);


    useEffect(() => {
        const handleTopScroll = () => {
            if (window.scrollY > 500) {
                setScrollToTop(true);
            }
            else {
                setScrollToTop(false);
            }
        }
        window.addEventListener('scroll', handleTopScroll);

        return () => {
            window.removeEventListener('scroll', handleTopScroll);
        }
    }, []);


    return (
        <section className='w-full min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-[auto_1fr]'>
                <div className='max-w-[300px] w-[300px] hidden md:block border-[0.5px] border-[#ccc] border-t-0'>
                    <FilterPanel />
                </div>
                <div className='w-full px-5'>
                    <Hero />
                    <Breadcrumps />
                    <div className=''>
                        <p className='text-base tracking-wider text-gray-500 px-4.5 pb-2.5 font-bold'>View All</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-[1px] md:gap-1'>
                            <ProductCard image={"https://media.powerlook.in/catalog/product/6/1/61287521.jpg?aio=w-256"} isRated={true} isNewArrival={false} height={isTablet && "h-40"}  />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet && "h-40"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet && "h-40"} />
                        </div>

                    </div>
                </div>
            </div>
            {scrollToTop && (
               <ScrollToTopButton moveToTop={moveToTop} />
            )}
            <BottomModal modalHandler={handleFilterModal} />
            <SortMenu modal={modal} handleFilterModal={handleFilterModal} />
            <FilterPanel postiion='fixed' modal={modal} handleFilterModal={handleFilterModal} display='hidden' opacity={0} bottomNav={true} marginTop='mt-0' />            
        </section>
    )
}

export default Products
