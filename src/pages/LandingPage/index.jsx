import React from 'react';
import Clients from '../../Components/Clients';
import Nav from './../../components/Nav/index';


const LandingPage = () => {
  return (
    <>
    <Nav/>
    <div className='w-full h-screen '>
        {/* text */}
      <div className='flex items-center justify-center h-full w-full relative '>
        <h1 className='text-center md:text-6xl text-3xl sm:text-5xl font-light leading-relaxed sm:leading-relaxed md:leading-normal text-gray-500'>
        I’m a designer specialising in <span className='text'>UI/UX</span> and <span className='text'>Interaction Design</span>
        </h1>
      {/* cheron down*/}
      <span className='animate-bounce text-neutral-50 flex flex-auto absolute bottom-8'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      {/* chevron down*/}
      </div>
      {/* clients */}
      <Clients/>
    </div>
    </>
  );
};

export default LandingPage;
