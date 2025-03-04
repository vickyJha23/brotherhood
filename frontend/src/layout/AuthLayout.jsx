import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className='h-screen overflow-hidden'>
          <main>    
              <Outlet />
          </main>
    </section>
  )
}

export default AuthLayout
