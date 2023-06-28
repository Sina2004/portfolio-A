import React, { useState } from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
  // open navigation
  const [active, setActive] = useState(false);
  // navbar blur events
  const [change, setChange] = useState(false);
  function changeColorNav() {
    if (window.scrollY >= 200) {
      setChange(true);
    } else {
      setChange(false);
    }
  }
  window.addEventListener('scroll', changeColorNav);
  // active section
  function hi() {
    
  }
  return (
    <>
      <div
        className={`fixed top-0 w-full h-20 z-50 duration-300 ${
          change ? 'backdrop-blur-sm bg-black/40' : ''
        }`}
      >
        <div className="w-full relative h-full flex items-center justify-between md:px-14 px-8 pl-5">
          {/* logo */}
          <span className='flex items-center justify-center w-36'>
            <img className='w-full' src="https://s8.uupload.ir/files/shared_image_i4s7.png" alt="logo" />
          </span>
          {/* menu svg */}
          <span
            onClick={() => setActive(!active)}
            className="sm:hidden text-neutral-50 p-4 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          {/* content */}
          <div
            className={`flex-col z-40 flex sm:justify-end sm:flex-row text-neutral-100 sm:static absolute w-full left-0 -bottom-[410px] duration-300 transition-all overflow-hidden sm:translate-x-0 -translate-x-full ${
              active ? 'translate-x-0' : ''
            }`}
          >
            
            <Link className="nav text-center relative" offset={0} duration={200} activeClass="active" smooth spy to="home">HOME</Link>
            
            <Link className="nav text-center relative"  offset={0} duration={200} activeClass="active" smooth spy to="clients">ClIENTS</Link>
            <Link className="nav text-center relative" offset={0} duration={200} activeClass="active" smooth spy to="work">WORK</Link>
            <Link className="nav text-center relative" offset={0} duration={200} activeClass="active" smooth spy to="about">ABOUT</Link>
           <Link className="nav text-center relative" offset={0} isDynamic={true} duration={200} activeClass="active" smooth spy to="footer">CONTACT ME</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
