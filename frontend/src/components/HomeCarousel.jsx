import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons, NextButton, PrevButton } from './EmblaCarouselArrowButtons'
import { DotButtons, useDotButton } from './EmblaCarouselDotButton'
import { carouselProducts } from '../assets/Images/image'
import CarouselCard from './CarouselCard'
import Autoplay from 'embla-carousel-autoplay';
import {useMediaQuery} from 'react-responsive';

const HomeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false}, [Autoplay()]);
  const isDesktop = useMediaQuery({
      query: '(min-width: 1024px)'
  }) 

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  const { slideIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)


  return (
    <section className="embla w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
            {!isDesktop ? carouselProducts.map((carousel, index) => <CarouselCard key={index} carousel={carousel} />) : (
              <>
                <div className='min-w-0 flex-[0_0_100%]'>
                     <img src="https://media.powerlook.in/mycustomfolder/banner-2_10_.jpg?aio=w-3840" alt="" />
                </div>
                <div className='min-w-0 flex-[0_0_100%]'>
                    <img src="https://media.powerlook.in/mycustomfolder/banner-4_2.jpg?aio=w-3840" alt="" />
                </div>
              </>
            )}
        </div>
      </div>
      <div className='px-4 py-4 grid grid-cols-[auto_auto] justify-between content-between items-center'>
          <div className='flex gap-4 justify-center'>
              <PrevButton disabled ={prevBtnDisabled} onClick ={onPrevButtonClick} />
              <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick}  />
          </div>
          <div className='w-auto flex gap-2'>
              {scrollSnaps.map((_, index) => <DotButtons key={index} onClick={() => onDotButtonClick(index)} className={`${slideIndex === index ? 'border-green-500':'border-[#cdcdce]'} rounded-full border-2 w-3 h-3`} />)}
          </div> 
      </div>
    </section>
  )
}

export default HomeCarousel
