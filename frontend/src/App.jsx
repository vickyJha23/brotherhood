import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes'
import {Toaster} from "sonner"

const App = () => {
  return (
    <>
        <Toaster richColors />
        <RouterProvider router={router} />
    </>
       
  )
}

export default App