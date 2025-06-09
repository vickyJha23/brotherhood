import { useEffect, useState, useCallback } from "react";


export const useDotButton = (emblaApi) => {
     const [slideIndex, setSlideIndex] = useState(0);
     const [scrollSnaps, setScrollSnaps] = useState([]);

     const onDotButtonClick = useCallback((index) => {
          if(!emblaApi) return;
          emblaApi.scrollTo(index)
     }, [emblaApi])

     const onInit = useCallback((emblaApi) => {
         if(!emblaApi) return ;
          setScrollSnaps(emblaApi.scrollSnapList());
     }, [emblaApi])

     const onSelect = useCallback((emblaApi) => {
          if(!emblaApi) return;
         setSlideIndex(emblaApi.selectedScrollSnap())
     }, [emblaApi])

     useEffect(() => {
         if(!emblaApi) return;
         onInit(emblaApi)
         onSelect(emblaApi);
         emblaApi.on('reInit', onInit ).on('reInit', onSelect).on('select', onSelect);
     }, [emblaApi, onInit, onSelect])


    return {
        slideIndex,
        scrollSnaps,
        onDotButtonClick
    }
}



export const DotButtons = (prop) => {
    const { children, ...restProp } = prop;
  
    return <button type="button" {...restProp}>
    </button>
}