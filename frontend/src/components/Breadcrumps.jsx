import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const breadcrumpData = {
    "/product-category": "Home",
    "/product-category/t-shirts": "T-Shirts/View All",
    "/product-category/t-shirts/view-all": "View All",
}


const Breadcrumps = () => {
     const location = useLocation();
     const pathNames = location.pathname.split("/").filter((pathItem) => pathItem !== "");
     const breadcrumps = pathNames.map((path, index) => {
         const url = `/${pathNames.slice(0, index +1).join("/")}`;
         return url;
     })  



  return (
    <nav aria-label='breadcrump' className='mt-4 items-center text-[12px] text-gray-500 flex'>
       <ul className='flex text-gray-400 m-0 px-4.5 pb-2.5'>
       <li className='flex items-center'>
           {breadcrumps.map((bread, index) => {
                if(index !== breadcrumps.length - 1) {
                    return (
                        <Link to={bread === "/product-category" ? "/":bread === "/product-category/t-shirts" ? "/product-category/t-shirts/view-all" : bread} key={bread} className='flex items-center'>
                              <span className='flex items-center text-base'>
                                 {breadcrumpData[bread] || bread}
                                 <ChevronRight className='mx-1' size={12} />
                              </span>
                        </Link>
                    )
                }
                return (
                    <span key={bread} className='text-gray-500 text-base'>
                        {breadcrumpData[bread] || bread}
                    </span>
                )
           })}
       </li>
       </ul>
    </nav>
  )
}

export default Breadcrumps
