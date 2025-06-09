import React, { useState, useEffect } from 'react'
import {Outlet} from "react-router-dom"

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
    
     

  return (
    <section className='h-screen'>
        <Sidebar/>        
        <Header />
        <div>
            <Outlet /> 
        </div>
        <Footer /> 
    </section>
  )
}

export default Dashboard
