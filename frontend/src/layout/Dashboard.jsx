import React, { useState } from 'react'
import {Outlet} from "react-router-dom"

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const Dashboard = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);

  return (
    <section className='h-screen pb-[2000px]'>
        <Sidebar isActive={isSidebarActive} setActive={setSidebarActive} />        
        <Header setActive={setSidebarActive} />
        <div>
            <Outlet /> 
        </div>
    </section>
  )
}

export default Dashboard
