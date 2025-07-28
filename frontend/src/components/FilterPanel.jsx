import React, {useRef} from 'react'
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';


const FilterPanel = ({postiion = "static", modal = null, handleFilterModal = null, display="block", opacity=1, bottomNav=false, boxShadow="none", marginTop="mt-2"}) => {
    const filterRef = useRef(null);


    const colors = [
        { name: "Red", value: "red", className: "bg-red-400" },
        { name: "Blue", value: "blue", className: "bg-blue-500" },
        { name: "Green", value: "green", className: "bg-green-400" },
        { name: "Pink", value: "pink", className: "bg-pink-400" },
        { name: "Teal", value: "teal", className: "bg-teal-500" },
        { name: "Cyan", value: "cyan", className: "bg-cyan-500" },
        { name: "Indigo", value: "indigo", className: "bg-indigo-700" },
    ];

    const prices = [
        { label: "₹0.00 - ₹499.99", value: "0-499" },
        { label: "₹500.00 - ₹999.99", value: "500-999" },
        { label: "₹1000.00 - ₹1499.99", value: "1000-1499" },
    ];

    const sizes = [
        "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl"
    ];

    const [selectedColors, setSelectedColors] = React.useState([]);
    const [selectedPrices, setSelectedPrices] = React.useState([]);
    const [selectedSizes, setSelectedSizes] = React.useState([]);

    const handleColorChange = (color) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    const handlePriceChange = (price) => {
        setSelectedPrices(prev =>
            prev.includes(price)
                ? prev.filter(p => p !== price)
                : [...prev, price]
        );
    };

    const handleSizeChange = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const handleReset = () => {
        setSelectedColors([]);
        setSelectedPrices([]);
        setSelectedSizes([]);
    };


    useGSAP(() => {
        if(filterRef.current){
            gsap.to(filterRef.current, {
               top: modal === "filter" ? 0 : "100%",
               display: modal === "filter" ? "block": display,
               opacity: modal === "filter" ? 1 : opacity,
               duration: 0.2,
               ease: "power2.out"  
            })
        }

    }, [modal])

    return (
        <div ref={filterRef} className={`${postiion}
         top-0 left-0 h-full w-full bg-white z-50 ${display} ${marginTop}`}>
            <div className='w-full h-screen overflow-y-auto'>
                <div className={`px-4 py-4 flex items-center justify-between border-b-[1px] border-b-[#ccc]`} style={{
                     boxShadow: boxShadow
                }}>
                    <h3 className='text-lg font-medium tracking-wider text-gray-700'>
                        Filters
                    </h3>
                    <button
                        className='uppercase text-sm font-bold text-red-500 tracking-wider'
                        type="button"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
                <div className='mt-8 w-full !overflow-auto px-4'>
                    <form className='flex flex-col'>

                        {/* color filter */}
                        <div className='border-b-[1px] border-b-[#ccc] pb-5'>
                            <h4 className='uppercase text-sm font-medium tracking-wider text-gray-700 mb-2'>
                                Color
                            </h4>
                            <div className='mt-4 flex flex-col gap-2'>
                                {colors.map((color) => (
                                    <div className='flex items-center gap-4' key={color.value}>
                                        <div className='relative h-5 group mr-4'>
                                            <input
                                                type="checkbox"
                                                name="color"
                                                id={`color-${color.value}`}
                                                className='absolute w-5 h-5 opacity-0 cursor-pointer peer z-10'
                                                checked={selectedColors.includes(color.value)}
                                                onChange={() => handleColorChange(color.value)}
                                            />
                                            <span className='absolute top-0 left-0 bg-[#eee] shadow-[0_0_2px_1px_#ccc] w-5 h-5 rounded-[5px] peer-checked:bg-red-500 z-0 after:absolute after:left-[8px] after:top-[4px] after:hidden after:w-[5px] after:h-[10px] peer-checked:after:block after:border-white after:border-[0_3px_3px_0] after:rotate-[45deg]'></span>
                                        </div>
                                        <label htmlFor={`color-${color.value}`} className='flex items-center gap-2 cursor-pointer'>
                                            <span className={`w-5 h-5 rounded-full ${color.className}`}></span>
                                            <span>{color.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* end of color filter  */}

                        {/* price filter */}
                        <div className='py-3 border-b-[1px] border-[#ccc] pb-5'>
                            <h4 className='py-3 uppercase text-sm font-medium tracking-wider text-gray-700 mb-2'>
                                Price
                            </h4>
                            <div className='flex flex-col gap-4'>
                                {prices.map((price) => (
                                    <div className='flex items-center gap-4' key={price.value}>
                                        <div className='relative group mr-5 h-5'>
                                            <input
                                                type="checkbox"
                                                name="price"
                                                id={`price-${price.value}`}
                                                className='z-1 absolute peer w-5 h-5 opacity-0'
                                                checked={selectedPrices.includes(price.value)}
                                                onChange={() => handlePriceChange(price.value)}
                                            />
                                            <span className='absolute top-0 left-0 w-5 h-5 bg-[#eee] rounded-[5px] shadow-[0_0_2px_1px_#ccc] peer-checked:bg-red-500 z-0 after:absolute after:w-[5px] after:h-[10px] after:top-[5px] after:left-[8px] after:border-white after:border-[0_3px_3px_0] after:rotate-[45deg] after:hidden peer-checked:after:block'></span>
                                        </div>
                                        <label htmlFor={`price-${price.value}`} className='text-sm font-normal text-gray-800 cursor-pointer'>
                                            {price.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* end of price filter */}

                        {/* size    */}
                        <div className='py-3 border-b-[1px] border-[#ccc] pb-15'>
                            <h4 className='py-3 uppercase text-sm font-medium tracking-wider text-gray-700 mb-2'>
                                Size
                            </h4>
                            <div className='flex flex-col gap-4'>
                                {sizes.map((size) => (
                                    <div className='flex items-center gap-4' key={size}>
                                        <div className='relative group mr-5 h-5'>
                                            <input
                                                type="checkbox"
                                                name="size"
                                                id={`size-${size}`}
                                                className='z-1 absolute peer w-5 h-5 opacity-0'
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleSizeChange(size)}
                                            />
                                            <span className='absolute top-0 left-0 w-5 h-5 bg-[#eee] rounded-[5px] shadow-[0_0_2px_1px_#ccc] peer-checked:bg-red-500 z-0 after:absolute after:w-[5px] after:h-[10px] after:top-[5px] after:left-[8px] after:border-white after:border-[0_3px_3px_0] after:rotate-[45deg] after:hidden peer-checked:after:block'></span>
                                        </div>
                                        <label htmlFor={`size-${size}`} className='text-sm text-gray-800 cursor-pointer uppercase font-medium tracking-wider'>
                                            {size}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          
          {bottomNav && ( <div className='fixed bottom-0 h-[50px] w-full bg-white shadow-[0_0_2px_1px_#ccc] flex justify-center items-center'>
                 <div className='w-9/12 justify-between flex md:hidden'>
                    <button onClick={() => {
                         handleFilterModal("");
                    }} className='px-6 font-medium py-1 uppercase tracking-wider flex justify-center items-center'>
                     Cancel
                 </button>
                  <span className='flex justify-center items-center'>
                    |
                  </span>
                 <button className='px-6 font-medium py-1 uppercase tracking-wider flex justify-center items-center text-red-500'>
                      Apply
                 </button>
                 </div>
            </div>)}
        </div>
    )
}

export default FilterPanel
