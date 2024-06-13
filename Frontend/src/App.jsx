import React from 'react';
import { Toaster } from 'react-hot-toast';
import Home from './home/Home';
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import About from './components/About';
import { useAuth } from './context/AuthProvider';
import Novel from './components/novel';
import MovieList from './components/MovieList';
import Story from './components/story';
import History from './components/history';
import Mern from './components/mern';
import Operating from './components/operating';
import Java from './components/java';

function App () {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
   <>
  <div className='dark-bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={authUser ? <Courses />: <Navigate to="/signup" />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path="/novel" element={<Novel />} />
    <Route path="/MovieList" element={<MovieList />} />
    <Route path="/story" element={<Story />} />
    <Route path="/history" element={<History />} />
    <Route path="/mern" element={<Mern />} />
    <Route path='/operating' element={<Operating />} />
    <Route path='/java' element={<Java />} />
   </Routes>
   <Toaster />
   
  </div>
   </>
  )
}

export default  App;
