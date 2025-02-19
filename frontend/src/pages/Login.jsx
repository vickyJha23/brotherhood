import React, { useState } from 'react';
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom";
import { toast } from 'sonner';

import staticData from '../assets/static/static';
import useUserStore from '../store/user.store';


const Login = () => {
    const [formData, setFormData] = useState({
         email: "",
         password: "",
    })   
    const setloginStatus = useUserStore((state) => state.setloginStatus);
    const [isLoading, setLoading] = useState(false);
    const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevFormData) => ({...prevFormData, [name]:value}))
    }
   
    const handleSubmit = async () => {
        setLoading(true); 
        let isValid = true;
        if(formData.email && formData.password) {
             if(!staticData.emailRegex.test(formData.email.trim())){
                  toast.error("Invalid email format. Please enter valid email")
                  isValid = false;   
             }
             if(!staticData.passwordRegex.test(formData.password))
               {
                   toast.error("Invalid password formate. Please enter valid password")
                   isValid = false;
               }  
             if(isValid){
                 try {
                     const response = await fetch("http://localhost:8000/api/v1/user/login", {
                          method: "POST",
                          headers:{
                              "Content-Type": "application/json"
                          },
                          body: JSON.stringify(formData)
                     })
                     const data = await response.json();
                     if(data.success){
                          toast.success(data.message);
                          setloginStatus(true);
                     }
                     else {
                         toast.error(data.error.message);
                     }
                    
                 } catch (error) {
                      toast.error(error.message);   
                 }
             }
        } 
        else {
              toast.error("All fields are required")
        }  
        setLoading(false);
    }


  return (
       <section className='h-screen w-full'>
            <div className='w-full max-w-md mx-auto bg-white mt-10 h-[500px] p-6 overflow-hidden'>
                <div className='w-full h-auto'>
                     <h1 className='text-center uppercase font-bold text-3xl tracking-widest'>
                           Login
                     </h1> 
                     <div className='w-full h-full mt-5 flex
                      flex-col gap-4'>
                          <div className='flex flex-col gap-2'>
                               <label htmlFor="email" className='font-bold text-lg tracking-wide'>
                                   Email
                               </label>   
                               <input onChange={handleChange} type="text" id="email" name="email"  className='border-2 px-3 py-2 rounded-2xl' placeholder='Enter email' required value={formData.email} />
                          </div>  
                          <div className='flex flex-col gap-2'>
                               <label htmlFor="password" className='font-bold text-lg tracking-wide'>
                                   Password
                               </label>   
                               <input onChange={handleChange} type="password" id="password" name='password'  className='border-2 px-3 py-2 rounded-2xl' placeholder='Enter password' required value={formData.password} />
                          </div>
                          <button type='button' onClick={handleSubmit} className='relative cursor-pointer bg-black text-white py-2 rounded-2xl disabled:bg-[#333]' disabled={isLoading ? true:false}>
                               <span className='text-lg'>Login</span>
                               {isLoading &&  <ClipLoader color='white' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                          </button>  
                     </div>
                </div>
                <p className='mt-5 text-center'>
                    Don't have an account? <Link to="/register" className='text-blue-500'>
                        Signup
                    </Link> 
                </p>   
            </div>
       </section>
  )
}

export default Login