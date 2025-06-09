import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';



const CategoryCarousel = (prop) => {
      const {childrens, ...restProp} = prop

    const [emblaRef] = useEmblaCarousel({ loop: false })

    return (
        <div className='mt-15 px-4'>
        <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-4 justify-start xl:gap-8'>
                {childrens.map((child, indrex) => {
                   const srcSet = `${child.imageBase}?aio=w-640 1x,  ${child.imageBase}?aio=w-1080 2x`;   
                   return <div {...restProp}>
                   <img alt="T-shirts" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" srcset={srcSet} />
                </div>})}
            </div>
        </div>
        </div>
    )
}

export default CategoryCarousel
