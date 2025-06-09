import React from 'react'
import Title from '../components/Title'
import CategoryCarousel from '../components/CategoryCarousel'
import Banner from '../components/Banner'
import NewArrival from '../components/NewArrival'
import Testimonials from '../components/Testimonials'
import HomeCarousel from '../components/HomeCarousel'


const Home = () => {
  return (
    <section className='w-full'>
         <HomeCarousel />
         <div className='container mx-auto'>
             <Title title='Category collection' className={'text-center text-[#3a393a] capitalize tracking-wider text-2xl mt-15 flex flex-col items-center font-semibold'} />       
         <CategoryCarousel childrens = {[{
            imageBase: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/wJOmRfYM_fedb6ff9ef5e423aa312345075476382.jpg'
         }, {
             imageBase: 'https://img.tatacliq.com/images/i21//437Wx649H/MP000000024415562_437Wx649H_202411161758401.jpeg'
         }, {
             imageBase: 'https://m.media-amazon.com/images/I/51TEnAwxZ4L._AC_UY1100_.jpg'
         }, {
            imageBase: 'https://m.media-amazon.com/images/I/51CkUH3DLHL._SY606_.jpg'
         }, {
             imageBase: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/5/z/z/m-248932-the-souled-store-original-imahy7fxhxdyufze.jpeg?q=90&crop=false'
         }, {
            imageBase: 'https://assets.ajio.com/medias/sys_master/root/20240129/CDKU/65b7d24c16fd2c6e6ac83571/-473Wx593H-410478904-0008-MODEL.jpg'
         }]} className={'flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] xl:flex-[0_0_15%]'} />
         <Banner />
         <Title title='New deals, new trends' className={'text-center text-[#3a393a] capitalize tracking-wider text-2xl mt-15 flex flex-col items-center font-semibold'} />
         <CategoryCarousel childrens={[{
              imageBase: "https://bluorng.com/cdn/shop/files/Untitled_Artwork_26992.jpg?v=1744353735&width=823"
         }, {
             imageBase: "https://www.thefinespun.com/cdn/shop/products/Front_cd1ba175-f14d-4ccc-987a-2e66e4766f8d.jpg?v=1667724879"
         }, {
            imageBase: "https://www.thefinespun.com/cdn/shop/files/0061-MALE-SHOPIFY_9e4fef55-69b8-4a34-b591-cbe953897289.jpg?v=1694780222"
         }]} className={'!max-h-80 overflow-hidden aspect-[1/1] flex-[0_0_80%] md:flex-[0_0_33.33%] lg:flex-[0_0_33%]'} />
         <Banner image={'https://media.powerlook.in/mycustomfolder/small_banner_5_.jpg?aio=w-1200'} className={'h-full mx-auto'} />
         <Title title='New arrivals' className={'text-center text-[#3a393a] capitalize tracking-wider text-2xl mt-15 flex flex-col items-center font-semibold'} />
         <NewArrival />
         <Testimonials />
         <Banner image={'https://media.powerlook.in/mycustomfolder/bottom_banner.jpg?aio=w-1200'} className={'h-full mx-auto overflow-hidden'} />
         </div>
    </section>
  )
}

export default Home
