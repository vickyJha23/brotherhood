import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive";
import { useActiveImage } from "../components/EmblaActiveCarousel";
import { BadgePercent, ChevronDown, ChevronUp } from 'lucide-react';


import NewArrivalTag from "./NewArrivalTag";


const ProductDetailsCarousel = ({ isNewArrival }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({loop: false})
  const { slideIndex, scrollSnaps, buttonClickHandler } =
    useActiveImage(emblaApi);

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="overflow-hidden mt-1.5 relative flex">
      <div ref={emblaRef}  className="order-2 flex-4/5">
        <div className="flex h-full">
          <div className="flex-[0_0_100%] h-full min-w-0">
            <img
              src="https://media.powerlook.in/catalog/product/1/3/1301110_4_.jpg?aio=w-640"
              alt="" className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <img
              src="https://media.powerlook.in/catalog/product/1/3/1301110_4_.jpg?aio=w-640"
              alt=""
            />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <img
              src="https://media.powerlook.in/catalog/product/1/3/1301110_4_.jpg?aio=w-640"
              alt=""
            />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <img
              src="https://media.powerlook.in/catalog/product/1/3/1301110_4_.jpg?aio=w-640"
              alt=""
            />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <img
              src="https://media.powerlook.in/catalog/product/1/3/1301110_4_.jpg?aio=w-640"
              alt=""
            />
          </div>
        </div>
      </div>
      {!isTablet ? (
        <div className="flex justify-center items-center py-4 gap-2">
          {scrollSnaps.map((_, index) => {
            return (
              <button
                onClick={() => buttonClickHandler(index)}
                key={index}
                className={`${
                  slideIndex === index ? "bg-red-500" : "bg-gray-400"
                } h-1 w-7 rounded-[5px]`}
              ></button>
            );
          })}
        </div>
      ) : (
       <div className="order-1 flex-1/5"> 
       <button className="bg-red-600">
            <ChevronUp />
          </button>
        <div className="overflow-hidden" ref={emblaRef2}>
            <div className="h-full flex flex-col bg-yellow-500">
              {emblaApi && emblaApi.slideNodes().map((node, index) =>  {
                return <div key={index} onClick={() => buttonClickHandler(index)} className="flex-[0_0_33.33%] min-h-0">
                    <img src={node.children[0].src} alt="" className="w-full h-full object-cover" />
                </div>
            })}
            </div>
        </div>
        <button className="bg-yellow-400">
                <ChevronDown />
            </button>
        </div>
      )}
      {isNewArrival && <NewArrivalTag size="11px" width="125px" />}      
    </div>
    
  );
};

export default ProductDetailsCarousel;
