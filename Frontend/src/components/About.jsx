import React from 'react'
import picture from '../../public/mypic.jpeg';
import image from '../../public/anjali.jpeg';
import image1 from '../../public/kajali.jpeg';

import Navbar from './Navbar';
function About() {
  return (
    <>
    <div>
    <Navbar />
    
    
   <br />
          <div className= " items-center justify-center text-center mt-8">
          <h1 className="text-2xl  md:text-4xl mt-20 text-pink-600 mt-2 ">
            About My BOOKERY!...
          </h1>
          <p className="mt-8">
          Our website is a book store ,where you can  buy different types of books, Here are also some free books are available, People can access and read them in their leisure time, those books are Novels, History, E.tc. Here you can also  find  second-hand books in half rate and often buys used books.
We have also provided some basics and most demanding courses of today , You can  buy  those courses by registering and logging on our website.
We have provided courses in most reasonable cost with best Teachers.
          <h1>Courses we have provided !</h1>
          1. Frontend Web Development!<br />
          2. Full Stack Web Development!<br />
          3. Data Structure and Algorithm!<br />
          4. Gate Courses!<br />
          5. Operating System!<br />
          6. C Programming!<br />
          7. c ++ Programming! <br />
          8. Java Programming!

          </p>
          </div>
          </div>
          
         <div className='footer footer-center p-20  text-base-content rounded dark:bg-slate-900  grid grid-flow-col gap-4 bg-gray-300 mt-6 dark:bg-slate-900 dark:text-white dark:border'>
         <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={picture} alt="" />
    
  </div>
  <h1>NISHA GUPTA</h1>
  <p>
    Backend Developer 
  </p>
  <p>+917783835443</p>
  
</div>
<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} alt="" />
  </div>
  <h1>Anjali Mahato</h1>
  <p>Frontend Developer</p>
  <p>+919142294401</p>
</div>
<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={image1} alt="" />
  </div>
  <h1>Kajal Kumari</h1>
  <p>
    Content Developer
  </p>
  <p>+916202009581</p>
</div>
         </div>
         
  </>
  )
}

export default About