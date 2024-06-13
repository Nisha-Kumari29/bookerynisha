import React from 'react'

function operating() {
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
            Learn something new and explore yourself and your surroundings,
            find all that you think, Experiance and want to gain....
            </p>
            
          </div>
          <button className="btn mt-6 btn-secondary"><a href="/">Go Back</a></button>
          <button className="btn mt-6 btn-secondary ml-10"><a href="https://fs.blog/12-history-books-to-read/">Explore More</a></button>
        </div>
        <div className=" order-1 w-1/2 mt-20 md:w-1/2">
        <iframe src="oper.pdf" className='md:w-[650px] md:h-[560px] md:ml-12'></iframe>
        </div>
      </div>
    </>
  )
}

export default operating