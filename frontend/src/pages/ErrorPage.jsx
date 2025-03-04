import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';

const ErrorPage = () => {
    const error = useRouteError();

  return (
    <section className='h-screen flex justify-center items-center'>
          <div className='bg-white w-full max-w-sm h-[300px] flex flex-col justify-center items-centern p-5'>
              <h1 className='text-center text-transparent bg-clip-text text-8xl font-bold' style={
                {
                     backgroundImage: "url('https://external-preview.redd.it/7BQ9Ig391FbwCzMSgnCCgrzbEpnWXufcUSKwe6g7GXI.jpg?auto=webp&s=7729ce0fa75865ea3e0a40076360938065072bfe')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                }
              }>
                   Oops!
              </h1>
            <div className='flex flex-col gap-2'>
                 <p className='text-center text-xl font-bold mt-5'>{error.status} {error.message || "Page Not Found"}</p>
                 <p className='text-center'>The page you are looking for might have been removed had its name changed or it temporarily unavailable.</p>
            </div>
              <button className='bg-blue-500 cursor-pointer text-white px-4 py-2 mt-5 w-[180px] max-w-[180px] mx-auto rounded-[25px]'>Go To Homepage</button>
          </div>  
    </section>
  )
}

export default ErrorPage
