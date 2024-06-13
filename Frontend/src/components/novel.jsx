import React from "react";

function Banner() {
  return (
    <>
    <marquee><h1 className='text-2xl font-bold text-blue-500 mt-2 md:text-4xl'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1></marquee>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-2xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            A novel is the most common kind of literary genre today. However, the term is widely encompassing and can be hard to define. A novel is a fictional narrative typically over fifty thousand words. It focuses on specific and complex characters and explores the human experience.
            </p>
            
          </div>
          <button className="btn mt-6 btn-secondary"><a href="/">Go Back</a></button>
          <button className="btn mt-6 btn-secondary ml-10"><a href="https://lithub.com/the-20-best-novels-of-the-decade/">Explore More</a></button>
        </div>
        <div className=" order-1 w-1/2 mt-20 md:w-1/2">
        <iframe src="pdf1.pdf" className='md:w-[650px] md:h-[560px] md:ml-12'></iframe>
        </div>
      </div>
    </>
  );
}

export default Banner;
