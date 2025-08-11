import React, { useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';



const ProductExtraInfo = () => {
    const [openSection, setOpenSection] = useState(null);
    const [productQuantity, setProductQuantity] = useState(1);

    const handleToggle = useCallback((key) => {
        setOpenSection(openSection === key ? null: key);
    }, [openSection])



  return (
    <div className='px-5 py-5'>
        <div className='pb-5'>
             <h3 className='font-medium'>
                 More details
             </h3>
        </div>
        <div className='flex
          flex-col gap-2 border-1 border-[#ccc] rounded-[5px] h-full p-[19px_21px_22px_23px]'>
           <div className='border-b-1 border-[#ccc] py-3'>
              <div onClick={() => {
                  handleToggle("specs")
               }} className='flex justify-between items-center'>
               <div className='flex flex-col gap-1 cursor-pointer'>
                  <h4 className='font-medium'> 
                    Specifications
                  </h4>
                  <p className='text-xs font-medium'>Technical details and features</p>
               </div>
               <span>
                  {openSection === "specs"? <Minus size={20} /> : <Plus size={20} />}
               </span>
              </div>
           <div className={`mt-2 ${openSection === "specs" ? "":"hidden"}`}>
               <ul className='grid grid-cols-2 gap-x-10 gap-y-2'>
                   <li className='flex flex-col border-b-1 border-b-[#ccc] py-2'>
                       <span className='text-sm'>
                            Fit
                       </span>
                       <span className='text-xs'>
                          <b>Regular fit</b>
                       </span>
                   </li>
                   <li className='flex flex-col border-b-1 border-b-[#ccc] py-2'>
                        <span className='text-sm'>Occasion</span>
                        <span className='text-xs'>
                            <b>
                              Casual
                            </b>
                        </span>
                    </li>
                    <li className='flex flex-col border-b-1 border-b-[#ccc] py-2'>
                        <span className='text-sm'>
                          Sleeves
                        </span>
                        <span className='text-xs'>
                           <b>
                             Half Sleeves
                           </b>
                        </span>
                    </li>
                    <li className='flex flex-col border-b-1 border-b-[#ccc] py-2'>
                        <span className='text-sm'>
                          Nect Polo
                        </span>
                        <span className='text-xs'>
                           <b>
                              Half Sleeves
                           </b>
                        </span>
                    </li>
                    <li className='flex flex-col border-b-1 border-b-[#ccc] py-2'>
                        <span className='text-sm'>
                          Fabric
                        </span>
                        <span className='text-xs'>
                           <b>
                              52% cotton, 48% Polyester
                           </b>
                        </span>
                    </li>
               </ul>
           </div>
           </div>
          {/* end of specificaions */}

          {/* start of description  */}
          <div className='border-b-1 border-[#ccc] py-3'>
              <div onClick={() => {
                  handleToggle("desc")
              }} className='flex justify-between items-center'>
              <div className='flex flex-col gap-1 cursor-pointer'>
                 <h4 className='font-medium'>Description</h4>
                <p className='text-xs font-medium'>
                   Product overview
                </p>
              </div>
              <span>
                   {openSection === "desc" ? <Minus size={20} />: <Plus size={20} />}
              </span>
              </div>
              <div className={`mt-2 ${openSection === "desc" ? "": "hidden"}`}>
                 <p className='text-xs text-gray-400'>
                     A laid-black classic with a fresh twist. This dark sky blue polo features white constrast  detailing on the collar  and sleeves, along with a sleek half-zip design. Textures lines and interests, white the fit stays clean and flattening.
                 </p>
              </div>
          </div>
          {/* end of description  */}

          <div className='border-b-1 border-[#ccc] py-3'>
             <div onClick={() => {
                     handleToggle("return")
                 }} className='flex items-center justify-between'>
                 <div className='flex flex-col gap-1 cursor-pointer'>
                     <h4 className='font-medium'>
                         Return & refund policy
                     </h4>
                     <p className='text-xs font-medium'>
                          Return and refund policies.
                     </p>
                 </div>
                 <span>
                     {openSection === "return" ? <Minus size={20} /> : <Plus  size={20} />}
                 </span>
             </div>
             <div className={`mt-2 ${
               openSection === "return" ? "": "hidden"
             }`}>
                <p className='text-xs'>
                   Returns and exchanges are available within 7 days from the delivery date. For more details, please visit our <Link to="" className='text-blue-400'>
                     Returns, Exchange & Refund Policy
                   </Link> page.
                </p>
             </div>
          </div>
          {/* end of refund policies  */}

         {/* Manufactured By */}

          <div className='border-b-1 border-[#ccc] py-3'>
              <div onClick={() => {
                    handleToggle("manufacture")
                 }} className='flex justify-between items-center'>
                 <div className='flex flex-col gap-1 cursor-pointer'>
                     <h4 className='font-medium'>
                      Manufactured By
                    </h4>
                    <p className='text-xs font-medium'>
                      Company and Manufacturer information.
                     </p>
                 </div>
                 <span>
                     {openSection === "manufacture" ? <Minus size={20} /> : <Plus size={20} />}
                 </span>
              </div>
              <div className={`mt-2  ${openSection === "manufacture" ? "": "hidden"}`}>
                  <div className='flex flex-col gap-2'>
                    <p className='text-xs font-medium'>
                    Country of origin: India  
                  </p>
                  <p className='text-gray-400 text-xs'>
                     <strong className='text-gray-500'>
                         Manufacture detail:
                     </strong> One Thread Pvt Ltd. Color City Katkar pada road, boisar(w)
                     401501.
                  </p>
                  </div>
              </div>
          </div>
           {/* end of Manufactured By */}
        </div>
    </div>
  )
}

export default ProductExtraInfo
