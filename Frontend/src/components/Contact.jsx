import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

import image1 from "../../public/img1.jpg"
function Contact() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };
  };
  return (
    <>
    <div 
    style={{backgroundImage:'url('+image1+')',backgroundSize:'cover'}}>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl text-blue-500">
          Hello Friends ! Welcome to my Contact Page, how can i help you  {" "}
            <span className="text-pink-500"> Here:)</span>
          </h1>
         
          
          
          
        </div>
        </div>
        
   
    
      <div className="flex h-screen items-center justify-center ">
      
        <div className=" w-[600px] ">
        
          <div className="modal-box bg-gray-300">
          <h3 className="font-bold text-lg">Contact</h3>
            <br/>
          
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 color-red-300"
              >
                ✕
              </Link>

              
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            
              <div className="mt-4 space-y-2">
              <span>Gender</span>
              <br />
              <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Select</option>
  <option>Male</option>
  <option>Female</option>
</select>

              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Query</span>
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" 
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-8 py-2 hover:bg-pink-700 duration-200 ">
                  Send
                </button>
                
                  
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
