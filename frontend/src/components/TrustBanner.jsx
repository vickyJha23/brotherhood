import React from 'react'
import TrustBannerCard from './TrustBannerCard'


const TrustBanner = () => {
  return (
    <div className='container mx-auto flex justify-between py-8'>
       <TrustBannerCard icon={'https://www.powerlook.in/images/quality.svg?aio=w-32'} title={'Premium quality Product'} description={'All the clothing products are made from 100% premium quality fabric.'} />
       <TrustBannerCard icon={'https://www.powerlook.in/images/icons-secure.png?aio=w-32'} title={'Secure payment'} description={'Highly Secured SSL-Protected Payment Gateway.'} />
       <TrustBannerCard icon={'https://www.powerlook.in/images/icon-return.svg?aio=w-32'} title={'7 day\'s return policy '} description={'Return or exchange the orders within 7 days of delivery.'} />
    </div>
  )
}

export default TrustBanner
