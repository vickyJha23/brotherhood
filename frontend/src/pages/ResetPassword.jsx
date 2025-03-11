import React, { useState, useRef, useEffect } from 'react';
import { RectangleEllipsis } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

import staticData from '../assets/static/static';
import { toast } from 'sonner';


const ResetPassword = () => {
     const [email, setEmail] = useState("");
     const [newPassword, setNewPassword] = useState("");
     const param = new URLSearchParams(window.location.search);
     const [isLoading, setIsLoading] = useState(false);
     useEffect(() => {
         setEmail(param.get("email")); 
     }, [])
     const handleReset =  async (e) => {
         e.preventDefault();
         setIsLoading(true);
        if( email && newPassword ){
               let isValid = true;
               if(!staticData.emailRegex.test(email)){
                   isValid = false;
                   toast.error("Please provide valid email");
               }   
               if(!staticData.passwordRegex.test(newPassword)){
                   isValid = false;
                   toast.error("Please enter valid password");
               }
               if(isValid){
                    try {
                        const response = await fetch("https://localhost:3000/api/v1/user/reset-password", {
                           method: "POST",
                           headers: {
                               "Content-Type": "application/json"
                           },
                           body: JSON.stringify({email, newPassword})
                        })
                        if(!response.ok){
                             const errorData = await response.json();
                            return toast.error(errorData.error.message);
                        }
                        const data = await response.json();
                        toast.success(data.message);
                    } catch (error) {
                          toast.error(error.message);
                    }
               }

        }
        else {
              toast.error("Please enter All required fields")
        }
        setIsLoading(false);
     } 

  return (
    <section className='h-screen w-full'>
        <div className='h-full flex items-center justify-center'>
            <div className='flex-40 h-full bg-gray-300 flex justify-center items-center'>
                 <div className='bg-white w-[320px] max-w-80 shadow rounded-xl p-5 flex flex-col gap-4'>
                      <p className='flex justify-center items-center bg-white border border-[#ccc] w-[50px] h-[50px] mx-auto rounded shadow-md'>
                         <RectangleEllipsis size={35} />    
                      </p>
                       <div className='flex flex-col gap-3 justify-center items-center'>
                           <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="email" className='font-bold text-lg tracking-wide'>Email</label>
                                <input type="text" className='border border-black rounded-2xl py-2 px-4 w-full' name='email' id='email' placeholder='example@gmail.com' value={email} />
                           </div> 
                           <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="password" className='font-bold tracking-wide text-lg'>Password</label>
                                <input onChange={(e) => setNewPassword(e.target.value)} type="text" name="password" id="password"
                                className='w-full border border-black rounded-2xl py-2 px-4' placeholder='Enter password..' value={newPassword} /> 
                           </div>
                           <button type='button' className='bg-black relative text-white w-full py-2 rounded-2xl cursor-pointer transition-colors duration-400 ease-in-out hover:bg-[rgba(0,0,0,0.8)] tracking-wide disabled:bg-[rgba(0,0,0,0.8)]' disabled={isLoading}>
                                 Reset
                                 {isLoading && <ClipLoader color='white' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />}
                           </button>
                           <Link to="/auth/login" className='flex gap-2 text-sm'>
                                <MoveLeft className='text-gray-400' />
                                <span>
                                    Back to log in
                                </span>
                           </Link>
                       </div>      
                 </div>
            </div>
            <div className='hidden md:flex flex-60 h-full bg-yellow-300'>

            </div>
        </div>
    </section>
  )
}

export default ResetPassword
