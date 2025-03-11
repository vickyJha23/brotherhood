import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MailCheck, MoveLeft } from 'lucide-react';
import { ClipLoader } from "react-spinners"


import staticData from '../assets/static/static';
import { toast } from 'sonner';

const VerifyOtp = () => {
     const [otp, setOtp] = useState("");
     const [isLoading, setLoading] = useState(false);
     const [timer, setTimer] = useState(120);
     const [isResend, setIsResend] = useState(false);
     const [success, setSuccess] = useState();

     const otpHandler = (e) => {
          const otpElement = e.target.value;
          setOtp((prevState) => {
                if(prevState.length < 6){
                    return prevState + otpElement;
                }
                return prevState;
          });
     }
    //  console.log(otp);
     const submitHandler = async (e) => {
            e.preventDefault();
            setLoading(true);
           if(otp){
               let isValid = true;
               if(!staticData.otpRegex.test(otp)){
                     isValid = false;
                     toast.error("Invalid otp")
               } 
               if(isValid){
                  try {
                    const response = await fetch('/api/verify-otp', {
                        method:"POST",
                        headers: {
                             "Content-Type": "application/json"
                        },
                        body: JSON.stringify({otp})
                    })
                    if(!response.ok){
                        const errorData = await response.json();
                        toast.error(errorData.error.message);
                        setSuccess(false);
                    }
                    const data = await response.json();
                    setSuccess(true);
                    toast.success(data.message);
                    
                  } catch (error) {
                       toast.error(error.message)
                  }
               }
           }
           else{
               toast.error("kindly enter otp");     
           } 
           setLoading(false);
     }

     useEffect(() => {
         if(!success) return;
          const intervalId = setInterval(() =>{
               setTimer((prevTimer) => {
                   if(prevTimer > 0){
                        return prevTimer - 1;
                   }
                   else {
                      clearInterval(intervalId);
                      setIsResend(true);
                      return 0;
                   }
               })  
          }, 2000)
     }, [success])


  return (
      <section className='h-screen w-full'>
           <div className='w-full h-full flex'>
               <div className='flex-40 bg-gray-300 flex justify-center items-center'>
                   <div className='w-[320px] max-w-80 bg-white shadow rounded-2xl px-4 py-8 flex flex-col gap-2'>
                        <span className='border border-gray-300 w-[50px] rounded-lg h-[50px] mx-auto flex items-center justify-center shadow mb-4'>
                            <MailCheck size={30} />
                        </span>    
                        <h2 className='font-medium text-2xl tracking-wide'>Password Reset</h2>
                        <p className='text-sm text-gray-400'>We sent code to <span className='font-bold text-black'>vickyjha388@gmail.com</span></p>
                        <div className='flex flex-col gap-3'>
                             <div className='flex gap-3 mt-2'>
                                <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                                <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                                <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                               <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                               <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                                <input onChange={otpHandler} type="text" className='w-full h-10 border border-gray-300 rounded text-lg text-center' maxLength={1} />
                            </div>
                            <button onClick={submitHandler} type='button' className='bg-black w-full outline-none rounded-2xl text-white py-2 transition-all duration-500 ease-linear hover:bg-[rgba(0,0,0,0.8)] cursor-pointer disabled:bg-[rgba(0,0,0,0.8)] relative' disabled={isLoading}>
                                   Reset Password
                                   {isLoading && (<ClipLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' color='white' />)}
                            </button>
                            <p className='text-xs text-center'>
                                Didn't receive the email? {isResend ? <Link to="" className='text-blue-500 hover:text-blue-700'>Resend OTP</Link>: <span>
                                     <span>{`0${Math.floor(timer / 60)}`}</span>:<span>
                                          {timer % 60 < 10 ? `0${timer % 60}`: timer % 60}  
                                     </span>
                                </span>  }
                                
                            </p>
                            <Link to="/auth/login" className='flex justify-center items-center gap-2 text-sm'>
                                 <MoveLeft className='text-gray-400' />  
                                 <span>
                                     Back to log in
                                 </span>
                            </Link>
                        </div>
                        
                   </div>       
               </div>
               <div className='hidden md:block
                flex-70 bg-white p-4'>
                   <img src="https://images.bewakoof.com/t1080/men-s-black-graphic-printed-oversized-hoodies-644560-1735908012-1.jpg" alt="" className='object-cover w-full h-full rounded-xl' />
               </div> 
           </div>
      </section>
  )
}

export default VerifyOtp
