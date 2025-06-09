import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Ratings from './Ratings';
import { Link } from "react-router-dom";
import { MoveRight } from 'lucide-react';
import { usePrevNextButtons, PrevButton, NextButton}  from "./EmblaCarouselArrowButtons";
import Title from './Title';

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <div className='mt-15 px-3'>
                <Title title='Happy customers' className={'text-center text-[#3a393a] capitalize tracking-wider text-3xl mb-10 flex flex-col items-center font-semibold'} />
            <div className='grid md:grid-cols-[auto_1fr] gap-4 overflow-hidden'>
                <div className='flex flex-col items-center md:items-start justify-start gap-2 py-2'>
                    <h2 className='text-xl uppercase font-bold tracking-widest'>
                        Our Customers
                    </h2>
                    <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                        our influencers
                    </p>
                    <p className='flex gap-2 items-center mt-2'>
                        <span className='bg-pink-800 px-2 py-1 text-sm inline-block rounded-[5px] text-white font-semibold'>
                            4.7 / 5
                        </span>
                        <span className='tracking-widest text-sm text-gray-400'>
                            based on 5896 reviews
                        </span>
                    </p>
                    <Link className='flex text-pink-800 transition-all duration-200 ease-linear hover:text-white hover:bg-pink-800 items-center justify-center mt-4 gap-2 border-pink-800 border-2 px-2 py-1 rounded-[5px] uppercase text-sm'>
                        See More <MoveRight />
                    </Link>
                </div>
                <div className='w-full px-3'>
                    <div className='overflow-hidden'>
                        <div ref={emblaRef} className='overflow-hidden'>
                            <div className='flex'>
                                <div className='flex-[0_0_100%] w-full'>
                                    <div className='h-full flex flex-col'>
                                        <div className='flex-[0_0_60%] flex flex-col items-center gap-2'>
                                            <Ratings rating={3} />
                                            <p className='text-center text-sm md:text-base md:max-w-lg'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio, eos nemo quod in explicabo accusamus necessitatibus omnis saepe perspiciatis?
                                            </p>
                                            <p className='text-sm text-gray-400'>White t-shirt</p>
                                        </div>
                                        <div className='flex-[0_0_40%]'>
                                             <div className='w-15 h-15 rounded-full overflow-hidden bg-red-400 mx-auto'>
                                                <img src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="testimonials" className='w-full h-full object-cover' />
                                             </div>
                                             <p className='text-center text-sm font-semibold mt-2 text-white'>
                                                <span className='text-sm font-semibold text-black'>Rajesh jha</span>
                                                <span className='text-xs text-gray-400'>, Customer</span>
                                             </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-[0_0_100%] w-full'>
                                    <div className='h-full flex flex-col'>
                                        <div className='flex-[0_0_60%] flex flex-col items-center gap-2'>
                                            <Ratings rating={3} />
                                            <p className='text-center text-sm md:text-base md:max-w-lg'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio, eos nemo quod in explicabo accusamus necessitatibus omnis saepe perspiciatis?
                                            </p>
                                            <p className='text-sm text-gray-400'>White t-shirt</p>
                                        </div>
                                        <div className='flex-[0_0_40%]'>
                                             <div className='w-15 h-15 rounded-full overflow-hidden bg-red-400 mx-auto'>
                                                <img src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="testimonials" className='w-full h-full object-cover' />
                                             </div>
                                             <p className='text-center text-sm font-semibold mt-2 text-white'>
                                                <span className='text-sm font-semibold text-black'>Rajesh jha</span>
                                                <span className='text-xs text-gray-400'>, Customer</span>
                                             </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-[0_0_100%] w-full'>
                                    <div className='h-full flex flex-col'>
                                        <div className='flex-[0_0_60%] flex flex-col items-center gap-2'>
                                            <Ratings rating={3} />
                                            <p className='text-center text-sm md:text-base md:max-w-lg'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio, eos nemo quod in explicabo accusamus necessitatibus omnis saepe perspiciatis?
                                            </p>
                                            <p className='text-sm text-gray-400'>White t-shirt</p>
                                        </div>
                                        <div className='flex-[0_0_40%]'>
                                             <div className='w-15 h-15 rounded-full overflow-hidden bg-red-400 mx-auto'>
                                                <img src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="testimonials" className='w-full h-full object-cover' />
                                             </div>
                                             <p className='text-center text-sm font-semibold mt-2 text-white'>
                                                <span className='text-sm font-semibold text-black'>Rajesh jha</span>
                                                <span className='text-xs text-gray-400'>, Customer</span>
                                             </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex gap-4 mt-5 justify-center'>
                                <PrevButton disabled ={prevBtnDisabled} onClick ={onPrevButtonClick} />
                                <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
