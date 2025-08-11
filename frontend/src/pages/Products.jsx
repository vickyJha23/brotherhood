import React, { useState, useEffect, useCallback} from 'react';
import { useMediaQuery } from 'react-responsive'
import { ChevronsUp, Star,  ChevronDown } from 'lucide-react';



import Hero from '../components/Hero';
import Breadcrumps from '../components/Breadcrumps'
import ProductCard from '../components/ProductCard';
import BottomModal from '../components/BottomModal';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SortMenu from '../components/SortMenu';
import FilterPanel from '../components/FilterPanel';



const Products = () => {
    const [scrollToTop, setScrollToTop] = useState(false);
    const [sortDropDown, setSortDropDown] = useState(false);
    const [dropDownContent, setDropDownContent] = useState("select");
    const [modal, setModal] = useState("");
    
    const isTablet = useMediaQuery({
         query: "(min-width: 768px) and (max-width: 1024px)"
    });  

   const isDesktop = useMediaQuery({
        query: "(min-width: 1024px)"
   })

    const moveToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);
    
    const handleFilterModal = useCallback((val) => {
           setModal(val);
    }, []);

    const handleSortDropDown = useCallback(() => {
         setSortDropDown((prev) => !prev);
    }, [])


    const handleDropDownContent = useCallback((content) => {
         setDropDownContent((prev) => {
            return prev.toLowerCase() === content.toLowerCase() ? prev : content;
         })   
    }, [])
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
        <section className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-[auto_1fr]'>
                <div className='max-w-[300px] w-[300px] min-h-screen hidden md:block'>
                    <FilterPanel />
                </div>
                <div className='w-full px-5 pt-4 md:h-screen border-l-[0.5px] border-l-[#ccc] md:overflow-y-auto scrollbar-none'>
                    <Hero />
                    <Breadcrumps />
                    <div className='border-b-0'>
                        <div className='flex justify-between'>
                           <p className='text-base tracking-wider text-gray-500 px-4.5 pb-2.5 font-bold'>View All</p>
                          <div className='flex-col gap-1 hidden md:flex'>
                             <p className='self-end-safe'>
                                <small>
                                    Sort by:
                                </small>
                             </p>
                              <div className='relative min-w-[180px] h-[40px] border-2 border-[#ccc] rounded-[5px]'>
                                 <div onClick={handleSortDropDown} className='h-full cursor-pointer flex justify-between items-center px-2'>
                                    <p className='capitalize text-sm'>{dropDownContent}</p>
                                    <button className='cursor-pointer'>
                                       <ChevronDown />
                                    </button>
                                 </div>
                                 <div onClick={handleSortDropDown} className={`bg-white min-w-[180px] rounded-[5px] shadow-[0_0_3px_0_#333] absolute z-30 left-0 mt-2 ${sortDropDown ? "": "hidden"}`}>
                                     <p onClick={(e) => {
                                          handleDropDownContent(e.currentTarget.textContent)
                                     }} className='px-2 py-2 cursor-pointer'>
                                        Latest
                                     </p>
                                     <p onClick={(e) => {
                                          handleDropDownContent(e.currentTarget.textContent)
                                     }} className='px-2 py-2 cursor-pointer'>
                                       Price: High to Low
                                     </p> 
                                     <p onClick={(e) => {
                                          handleDropDownContent(e.currentTarget.textContent)
                                     }} className='px-2 py-2 cursor-pointer'>
                                        Price: Low to High
                                     </p>  
                                 </div>
                              </div>
                          </div>
                        </div>    

                        {/* products related data  */}
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4 gap-[1px] md:gap-1 pt-10 pb-15'>
                            <ProductCard image={"https://media.powerlook.in/catalog/product/6/1/61287521.jpg?aio=w-256"} isRated={true} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"}  />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={true} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                            <ProductCard image={"https://media.powerlook.in/catalog/product/1/3/1351620_5__1.jpg?aio=w-640"} isNewArrival={false} height={isTablet ? "h-40": isDesktop ? "h-80": "h-64"} />
                        </div>

                    </div>
                </div>
            </div>
            {scrollToTop && (
               <ScrollToTopButton moveToTop={moveToTop} />
            )}
           {!isTablet&& <BottomModal modalHandler={handleFilterModal} />}
           {!isTablet &&  <SortMenu modal={modal} handleFilterModal={handleFilterModal} />}
           {!isTablet &&    <FilterPanel postiion='fixed' modal={modal} handleFilterModal={handleFilterModal} display='hidden' opacity={0} bottomNav={true} marginTop='mt-0' />}            
        </section>
    )
}

export default Products