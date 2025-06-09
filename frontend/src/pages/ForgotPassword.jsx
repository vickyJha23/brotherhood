import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft } from "lucide-react";
import { toast } from 'sonner';
import { ClipLoader } from "react-spinners";


import staticData from '../assets/static/static';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let isValid = true;
        if (email) {
            if (!staticData.emailRegex.test(email)) {
                isValid = false;
                toast.error("Invalid email format. Please enter valid email")
            }
             if (isValid) {
                try {
                    const response = await fetch("http://localhost:8000/api/v1/user/forgot-password", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email })
                    })
                    if (!response.ok) {
                        const data = await response.json();
                        return toast.error(data.error.message);
                    }
                    const data = await response.json();
                    toast.success(data.message);
                    setEmail("");

                } catch (error) {
                    toast.error(error.message);
                }
              }
            }
            else {
                  toast.error("email is required")
            }    
            setTimeout(()=> {
                setLoading(false);
            }, 2000)
        }


        return (
            <section className='h-screen w-full'>
                <div className='w-full flex items-center justify-start h-full'>
                    <div className='flex-1/2 h-full flex items-center justify-center'>
                        <div className='w-full lg:max-w-lg bg-white rounded-2xl flex flex-col gap-4 px-4 py-8'>
                            <h2 className='font-bold text-2xl tracking-wide'>Forgot password?</h2>
                            <p className='text-base text-gray-500'>No worries, we'll send you reset instructions</p>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email" className='text-black font-bold text-lg'>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className='border-2 px-3 py-2 rounded-2xl' placeholder='Enter your email' value={email} required />
                                </div>
                                <button onClick={handleSubmit} type='button' className='bg-black relative disabled:bg-gray-500 text-white cursor-pointer py-2 rounded-2xl w-full tracking-wide' disabled={isLoading}>
                                    Reset password
                                    {isLoading && <ClipLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' color='white' />}
                                </button>
                                <Link to="/auth/login" className='flex text-sm gap-2 justify-center items-center text-gray-500'>
                                    <MoveLeft className='text-gray-500' /> Back to login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block flex-1/2 h-full p-2'>
                        <img src="https://m.media-amazon.com/images/I/81STsuNzgEL._AC_UY1100_.jpg" alt="" className='w-full h-full object-cover' />
                    </div>

                </div>
            </section>
        )
    }

    export default ForgotPassword
