
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ],
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
        Here you can find all relevant books according to your interest....
        </p>
        <br/>
        </div>
    
    <div>
    <Slider {...settings}>
    <div className='mt-4 my-3 p-3'>
      
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <a href='/story'>Stories !</a>
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>Read Stories and explore yourself..</p>
    <div className="card-actions justify-between">
    <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Free</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <a href='/history'>History!</a>
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>By reading History discover World..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Free</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    <a href='/novel'>Novels!</a> 
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>The Diary of Anne Frank!</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Free</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      python!
      <div className="badge badge-secondary">New</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      C Programming
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Java Programming
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>From Beginner to Advance..</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline hover:bg-pink-500 cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:text-white duration-200"><a href='/java'>Buy Now</a></div>
    </div>
  </div>
</div>
        </div>
        <div  className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Operating System!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Peter Bear Galvin,Tanen Bomb</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200"><a href='/operating'>Buy Now</a></div>
    </div>
  </div>
</div>
        </div>
        <div  className='mt-4 my-3 p-3'>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.pikbest.com/png-images/qiantu/cartoon-vector-story-book-decoration_2594981.png!sw800" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      DSA !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Programming and Algorithm....</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.0</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200"><a href='/java'>Buy Now</a></div>
    </div>
  </div>
</div>
        </div>
        
      </Slider>
    </div>
    </div>
    </>
  )

}

export default Freebook;