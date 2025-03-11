import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";




import staticData from '../assets/static/static';
import imageCollection from '../assets/Images/image';


const Register = () => {
     const [formData, setFormData] = useState({
          userName: "",
          email: "",
          password: "",
     })
     const [isLoading, setLoading] = useState(false);
     const navigate = useNavigate();
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
     }
     const handleSubmit = async () => {
          setLoading(true);
          let isValid = true;
          if (formData.userName && formData.email && formData.password) {
               if (!staticData.emailRegex.test(formData.email)) {
                    toast.error("Invalid email format. Please enter valid email");
                    isValid = false;
               }
               if (!staticData.passwordRegex.test(formData.password)) {
                    toast.error("Invalid password format. Please enter valid password");
                    isValid = false;
               }
               if (isValid) {
                    try {
                         const response = await fetch("http://localhost:8000/api/v1/user/register", {
                              method: "POST",
                              headers: {
                                   "Content-Type": "application/json"
                              },
                              body: JSON.stringify(formData)
                         });
                         const data = await response.json();
                         if (data.success) {
                              toast.success(data.message);
                              setTimeout(() => {
                                   navigate("/auth/login");
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
               toast.error("All field required !");
          }
          setLoading(false);
     }

     return (
          <section className='h-screen w-full relative'>
               <div className='hidden md:block absolute top-0 left-0 p-8'>
                    <img src={imageCollection.logo} alt="" className='h-[40px]' />
               </div>
               <div className='w-full h-full flex justify-center items-center'>
               <div className='hidden md:flex flex-60 h-full bg-white p-3'>
                         <img src="https://thalasiknitfab.com/cdn/shop/files/WhatsApp_Image_2024-08-25_at_1.03.06_PM_1_349x.progressive.jpg?v=1724571403" alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='flex-40 bg-gray-200 h-full flex items-center justify-center'>
                         <div className='bg-white  w-[320px] max-w-md md:h-auto p-6 py-8 rounded-2xl shadow flex flex-col'>
                              <h1 className='text-center uppercase font-bold text-3xl tracking-widest mb-10'>Sign up</h1>
                              <div className='flex flex-col gap-2'>
                                   <div className='flex flex-col gap-2'>
                                        <label htmlFor="userName" className='font-bold text-lg tracking-wide'>Username</label>
                                        <input onChange={handleChange} type="text" name="userName" id="userName" className='px-3 py-2 border-2 rounded-xl' placeholder='Enter username' required value={formData.userName} />
                                   </div>
                                   <div className='flex flex-col gap-2'>
                                        <label htmlFor="email" className='font-bold text-lg tracking-wide'>Email</label>
                                        <input onChange={handleChange} type="email" name="email" id="email" className='px-3 py-2 border-2 rounded-xl' required placeholder='Enter email' value={formData.email} />
                                   </div>
                                   <div className='flex flex-col gap-2'>
                                        <label htmlFor="password" className='font-bold text-lg tracking-wide'>Password</label>
                                        <input onChange={handleChange} type="password" name="password" id="password" className='px-3 py-2 border-2 rounded-xl' required placeholder='Enter password' value={formData.password} />
                                   </div>
                              </div>
                              <button onClick={handleSubmit} type='button' className='w-full py-2 text-white bg-black rounded-xl mt-6 cursor-pointer relative disabled:bg-[#333]' disabled={isLoading ? true : false} >
                                   <span className='tracking-widest font-semibold text-lg'>Register</span>
                                   {isLoading && <ClipLoader color='white' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                              </button>
                              <p className='text-center mt-4'>
                                   Already have an account? <Link to="/auth/login" className='text-blue-500'>Login</Link>
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Register
