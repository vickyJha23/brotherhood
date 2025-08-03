import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive";
import { useActiveImage } from "../components/EmblaActiveCarousel";
import { BadgePercent } from 'lucide-react';


import NewArrivalTag from "./NewArrivalTag";


const ProductDetailsCarousel = ({ isNewArrival }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { slideIndex, scrollSnaps, buttonClickHandler } =
    useActiveImage(emblaApi);

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="overflow-hidden mt-1.5 relative">
      <div ref={emblaRef}>
        <div className="flex">
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
        <div></div>
      )}
      {isNewArrival && <NewArrivalTag size="11px" width="125px" />}      
    </div>
    
  );
};

export default ProductDetailsCarousel;
