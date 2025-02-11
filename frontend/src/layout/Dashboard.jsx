import React from 'react'
import {Outlet} from "react-router-dom"

import Header from '../components/Header'

const Dashboard = () => {
  return (
    <section className='h-screen'>
        <div></div>
        <Header />
        <div>
            <Outlet /> 
        </div>
    </section>
  )
}

export default Dashboard
