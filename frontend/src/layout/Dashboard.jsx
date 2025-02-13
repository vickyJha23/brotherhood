import React from 'react'
import {Outlet} from "react-router-dom"

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const Dashboard = () => {
  return (
    <section className='h-screen'>
        <Sidebar />        
        <Header />
        <div>
            <Outlet /> 
        </div>
    </section>
  )
}

export default Dashboard
