import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";
import { ClipLoader } from "react-spinners"
import { Regex } from 'lucide-react';



import staticData from '../assets/static/static';


const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
    })
    const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({...prevFormData, [name]:value})) 
   }
   const handleSubmit = async () => {
         setLoading(true);
         let isValid = true;
         if(formData.userName && formData.email && formData.password){
               if(!staticData.emailRegex.test(formData.email)){
                     toast.error("Invalid email format. Please enter valid email");
                     isValid = false;
               }
               if(!staticData.passwordRegex.test(formData.password)){
                    toast.error("Invalid password format. Please enter valid password");
                    isValid = false;
               }
               if(isValid){
                    try {
                        const response = await fetch("", {
                              method: "POST",
                              headers: {
                                   "Content-Type": "application/json"
                              },
                              body: JSON.stringify(formData)

                        });
                        const data = await response.json();
                        if(data.success){
                              toast.success(data.message);
                        }  
                        else {
                            toast.error(data.message);
                        }
                    } catch (error) {
                         toast.error(error.message);
                    }
               }               
            } 
         else {
              toast.error("All field required !");
         }
         setTimeout(() => {
            setLoading(false);
         }, 1000)
   }

  return (
     <section className='h-screen w-full grid place-items-center bg-[#f1f5f9]'>
         <div className='w-full max-w-md h-[500px] white shadow overflow-hidden'>
             <div className='w-full h-auto p-6'>
                 <h1 className='text-center text-2xl font-bold uppercase tracking-wider'>Create an account</h1>
                 <div className='h-full mt-10 flex flex-col gap-2'>
                     <div className='flex flex-col gap-2'>
                          <label htmlFor="userName" className='font-bold pl-1'>Username</label>
                          <input onChange={handleChange} type="text" name="userName" id="userName" className='px-3 py-2 border-2 rounded-xl' placeholder='Enter username' required value={formData.userName} />
                     </div>
                     <div className='flex flex-col gap-2'>
                          <label htmlFor="email" className='font-bold pl-1'>Email</label>
                          <input onChange={handleChange} type="email" name="email" id="email" className='px-3 py-2 border-2 rounded-xl' required placeholder='Enter email' value={formData.email} />
                     </div>
                     <div className='flex flex-col gap-2'>
                          <label htmlFor="password" className='font-bold pl-1'>Password</label>
                          <input onChange={handleChange} type="password" name="password" id="password" className='px-3 py-2 border-2 rounded-xl' required placeholder='Enter password' value={formData.password} />
                     </div>
                 </div>
                 <button onClick={handleSubmit} type='button' className='w-full text-white bg-black rounded-xl py-2 mt-6 cursor-pointer tracking-widest relative disabled:bg-[#333]' disabled={isLoading ? true:false} >
                     <span>Register</span>
                     {isLoading && <ClipLoader color='white' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                </button>
                <p className='text-center mt-4'>
                    Already have an account? <Link to="/login" className='text-blue-500'>Login</Link>
                </p>
             </div>         
         </div>
     </section>
  )
}

export default Register
