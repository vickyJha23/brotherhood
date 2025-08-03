import React from 'react'
import TrustBanner from './TrustBanner'
import Subscription from './Subscription'
import FooterCompanyLinks from './FooterCompanyLinks'
import FooterSupport from './FooterSupport'
import FooterAddress from './FooterAddress'
import SocialMediaLinks from './SocialMediaLinks'
import FooterCopyRight from './FooterCopyRight'

const Footer = () => {
  return (
    <div className='text-white my-15 mb-0 border-t-2 border-[#ccc]'>
          <div className='px-3'>
            <TrustBanner />  
            <Subscription />
          <div className='container mx-auto py-8 flex items-center justify-center'>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3'>
                <FooterCompanyLinks />
                <FooterSupport /> 
                <FooterAddress />
              </div>
          </div>
          </div>
          <SocialMediaLinks />
          <FooterCopyRight />
    </div>
  )
}

export default Footer
