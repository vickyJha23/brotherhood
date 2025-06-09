import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react';


export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    // if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    // if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (prop) => {
    const {children, ...restProp} = prop;
     return (
         <button {...restProp} type="button" className="cursor-pointer appearance-none w-8 h-8 flex items-center justify-center rounded-full bg-[#f1f8f9] disabled:text-red-500" style={{
              boxShadow: "inset 0 0 0 0.1rem rgb(236 236 233)"
         }}>
             <ChevronLeft size={20} />              
         </button>
     )
} 

export const NextButton = (prop) => {
    const {children, ...restProp} = prop;
    return (
        <button {...restProp} type="button" className="cursor-pointer appearance-none bg-[#f1f8f9] w-8 h-8 inset-shadow-[0,0,0,0.2rem] inset-shadow-amber-200 flex items-center justify-center rounded-full disabled:text-red-500" style={{
              boxShadow: "inset 0 0 0 0.1rem rgb(236 236 233)"
        }}>
            <ChevronRight size={20} />
        </button>    
    )
}