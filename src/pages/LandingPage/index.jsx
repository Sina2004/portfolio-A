import React, { useEffect } from 'react';
import Clients from '../../Components/Clients';
import Work from '../../Components/Work';
import AboutMe from '../../Components/About me';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar/Navbar.jsx';

import Aos from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  },[]);

  return (
    <>
    <Navbar/>
    <div className='w-full h-screen '>
        {/* text */}
      <div id="home" className='flex items-center justify-center h-full w-full relative px-4'>
        <h1 data-aos="zoom-in" className='text-center md:text-6xl text-3xl sm:text-5xl font-light leading-relaxed sm:leading-relaxed md:leading-normal text-gray-500 cursor-default select-none'>
        I’m a designer specialising in <span className='text font-medium neon3'>UI/UX</span> and <span className='text font-normal neon3'>Product Design</span>
        </h1>
      {/* cheron down*/}
      <span className='animate-bounce text-neutral-50 flex flex-auto absolute bottom-8'>
      <svg data-aos="zoom-in-up" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      {/* chevron down*/}
      </div>
      {/* clients */}
      <Clients/>
      {/* work */}
      <Work/>
      {/* about me */}
      <AboutMe/>
      <Footer/>
    </div>
    </>
  );
};

export default LandingPage;
