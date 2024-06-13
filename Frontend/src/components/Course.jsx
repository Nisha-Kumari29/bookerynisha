import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";

import {Link} from "react-router-dom";
function Course() {
  
  const filterData=list.filter((data)=>data.category==="Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   
    
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Our website is a book store ,where you can  buy different types of books, Here are also some free books are available, People can access and read them in their leisure time,l those books are Novels, History, E.tc. Here you can also  find  second-hand books in half rate and often buys used books.
We have also provided some basics and most demanding courses of today , You can  buy  those courses by registering and logging on our website.
We have provided courses in most reasonable cost with best Teachers.
          </p>
          
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
            
          
        </div>
        </div>
    <div className='mt-3'> 
    <Slider {...settings}>
    <div  className='mt-4 my-5 p-3'>
      
    <div className="card w-80 bg-base-100 shadow-xl ml-2 mb-8 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <a href='/mern'>FullStack Webdevelopement!</a>
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>Beginner to advance...</p>
    <div className="card-actions justify-between">
    <div className="badge badge-outline">Rs.3000</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Course" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Data Structure and Algorithm !
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>Beginner to advance...</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.2000</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Frontend Web Developement!
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.2000</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      GATE for Comouter Science!
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>For GATE-2025</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.3500</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      C Programming
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.470</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Java Prog!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.320</div> 
      <div className="badge badge-outline hover:bg-pink-500 cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Operating System!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.300</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl ml-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.freepik.com/premium-photo/digital-marketing-cro-conversion-rate-optimization-analytics-management-web-development-platform-growth-business-soft-blue-background-3d-render-illustration_598821-848.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      DSA !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.500</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        
      </Slider>
      </div>
     

    
    </>
  )
}

export default Course