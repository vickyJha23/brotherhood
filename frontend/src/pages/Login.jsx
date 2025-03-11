import React, { useState } from 'react';
import { ClipLoader } from "react-spinners"
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'sonner';

import staticData from '../assets/static/static';
import useUserStore from '../store/user.store';
import imageCollection from '../assets/Images/image';


const Login = () => {
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     })
     const [isLoading, setLoading] = useState(false);
     const navigate = useNavigate();
     const setloginStatus = useUserStore((state) => state.setloginStatus);
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
     }

     const handleSubmit = async (e) => {
          e.preventDefault();    
          setLoading(true); 
          let isValid = true;
          if (formData.email && formData.password) {
               if (!staticData.emailRegex.test(formData.email.trim())) {
                    toast.error("Invalid email format. Please enter valid email")
                    isValid = false;
               }
               if (!staticData.passwordRegex.test(formData.password)) {
                    toast.error("Invalid password formate. Please enter valid password")
                    isValid = false;
               }
               if (isValid) {
                    try {
                         const response = await fetch("http://localhost:8000/api/v1/user/login", {
                              method: "POST",
                              headers: {
                                   "Content-Type": "application/json"
                              },
                              body: JSON.stringify(formData)
                         })
                         const data = await response.json();
                         console.log(data);
                         if (data.success) {
                              toast.success(data.message);
                              setloginStatus(data.data);
                              setTimeout(() => {
                                   navigate("/");     
                              }, 2000)
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
          <section className='h-screen w-full relative'>
               <div className='h-full w-full flex justify-center items-center'>
                    <div className='hidden md:block h-full w-full p-5'>
                          <img src={imageCollection.logo} alt="" className='h-[40px]' />
                         <img src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/13/d6708f64-ca70-452e-82ca-0435c793e8d2.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full p-6 bg-gray-200 h-full overflow-hidden flex items-center justify-center'>
                         <div className='w-[320px] max-w-md bg-white p-8 rounded-2xl shadow-lg'>
                                   <div className='w-full h-auto'>
                                   <h1 className='text-center uppercase font-bold text-3xl tracking-widest mb-10'>
                                        Login
                                   </h1>
                                   <div className='w-full h-full mt-5 flex
                      flex-col gap-4'>
                                        <div className='flex flex-col gap-2'>
                                             <label htmlFor="email" className='font-bold text-lg tracking-wide'>
                                                  Email
                                             </label>
                                             <input onChange={handleChange} type="text" id="email" name="email" className='border-2 px-3 py-2 rounded-2xl' placeholder='Enter email' required value={formData.email} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                             <label htmlFor="password" className='font-bold text-lg tracking-wide'>
                                                  Password
                                             </label>
                                             <input onChange={handleChange} type="password" id="password" name='password' className='border-2 px-3 py-2 rounded-2xl' placeholder='Enter password' required value={formData.password} />
                                        </div>
                                        <Link to="/auth/forgot-password" className='text-right text-sm -mt-2 font-semibold text-[#1E8DEF]'>Forgot password?</Link>
                                        <button type='button' onClick={handleSubmit} className='relative cursor-pointer bg-black text-white py-2 rounded-2xl disabled:bg-[#333]' disabled={isLoading ? true : false}>
                                             <span className='text-lg'>Login</span>
                                             {isLoading && <ClipLoader color='white' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                        </button>
                                   </div>
                              </div>
                              <p className='mt-5 text-center'>
                                   Don't have an account? <Link to="/auth/register" className='text-blue-500'>
                                        Signup
                                   </Link>
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Login