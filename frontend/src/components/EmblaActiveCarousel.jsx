
import {useState, useEffect, useCallback } from "react";


export const useActiveImage =  (emblaApi) => {
       const [slideIndex, setSlideIndex] = useState(0);
       const [scrollSnaps, setScrollSnaps] = useState([]);

       const buttonClickHandler = useCallback((index) => {
         if(!emblaApi) return;
           emblaApi.scrollTo(index)
       }, [emblaApi])

       const onInitialize = useCallback((emblaApi) =>
         {
           if(!emblaApi) return;
             setScrollSnaps(emblaApi.scrollSnapList());
         }, [emblaApi]);

         

        const handleSlideIndexUpdation = useCallback(() => {
            if(emblaApi) return;
            setSlideIndex(emblaApi.selectedScrollSnaps())
        }, [emblaApi])

         useEffect(() => {
           if(!emblaApi) {
                return;
           }
           onInitialize(emblaApi);
           emblaApi.on("select", handleSlideIndexUpdation)

         }, [emblaApi, onInitialize, handleSlideIndexUpdation])
    return {
           slideIndex, scrollSnaps, buttonClickHandler
    }

}
